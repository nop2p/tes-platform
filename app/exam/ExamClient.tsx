"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ExplanationPanel,
  QuestionCard,
} from "@/components/exam";

import {
  Button,
  Container,
} from "@/components/ui";

import {
  areAllAnswersConfirmed,
  canGoNext,
  canGoPrevious,
  canResumeExamSession,
  completeExamSession,
  confirmAnswer,
  createExamSession,
  expireExamSession,
  formatRemainingTime,
  getAnswerByQuestionId,
  getExamTimerState,
  goToNextQuestion,
  goToPreviousQuestion,
  loadExamSession,
  saveExamSession,
  selectAnswer,
} from "@/lib/exam";


import type {
  ExamSession,
  Question,
  Subject,
} from "@/types";

interface ExamClientProps {
  subject: Subject;
  questions: Question[];
}

export function ExamClient({
  subject,
  questions,
}: ExamClientProps) {
  const router = useRouter();

  /*
   * Package 2.12 – Part 7.4
   *
   * Hydration-safe Session Initialization
   *
   * สำคัญ:
   * ห้ามสร้าง ExamSession ระหว่าง initial render
   * เพราะ createExamSession() ใช้ Date.now()
   * และ Math.random()
   *
   * Server และ Client จึงเริ่มต้นด้วย null เหมือนกัน
   * แล้วค่อย Initialize หลัง Client mount
   */
    
const [session, setSession] =
  useState<ExamSession | null>(null);

const [remainingSeconds, setRemainingSeconds] =
  useState(0);
  
const sessionRef =
  useRef<ExamSession | null>(null);

/*
 * ป้องกันการสิ้นสุด Session ซ้ำ
 *
 * ใช้ร่วมกันระหว่าง
 * - Submit
 * - Auto Expire
 * - Resume Expire
 */
const isFinishingRef =
  useRef(false);
  
  /*
   * Initialize / Resume Session
   *
   * 1. โหลด Session ที่บันทึกไว้
   * 2. ตรวจว่า Session เดิม Resume ได้หรือไม่
   * 3. ถ้า Resume ได้ ใช้ Session เดิม
   * 4. ถ้า Resume ไม่ได้ สร้าง Session ใหม่
   *
   * ทำงานเฉพาะฝั่ง Client หลัง mount
   */
  useEffect(() => {
    const savedSession =
      loadExamSession();

    if (
      savedSession &&
      canResumeExamSession(
        savedSession,
        subject.id,
        questions,
      )
    ) {
      const restoredTimerState =
        getExamTimerState(savedSession);

      if (restoredTimerState.isExpired) {
        const expiredSession =
          expireExamSession(savedSession);
        finishSession(expiredSession);
        return;
      }

      setSession(savedSession);
      return;
    }

 const newSession =
  createExamSession(
    subject.id,
    questions,
    {
      ...subject.examConfig,
    },
  );

setSession(newSession);
  }, [subject.id, questions]);

  /*
   * บันทึก ExamSession ทุกครั้งที่ state เปลี่ยน
   *
   * null หมายถึง Session
   * ยัง Initialize ไม่เสร็จ
   */
  useEffect(() => {
    if (!session) {
      return;
    }

    saveExamSession(session);
  }, [session]);

useEffect(() => {
  sessionRef.current = session;
}, [session]);

/*
 * Package 2.13
 * Timer Engine
 *
 * สร้าง interval เพียงครั้งเดียว
 * แล้วอ่าน Session ล่าสุดผ่าน sessionRef
 */
/*
 * Package 2.13
 * Timer Engine
 *
 * - คำนวณทันทีเมื่อ Component mount
 * - จากนั้นอัปเดตทุก 1 วินาที
 * - ใช้ sessionRef เพื่อหลีกเลี่ยง stale closure
 */
useEffect(() => {
  function updateTimer() {
    const currentSession =
      sessionRef.current;

    if (!currentSession) {
      return;
    }

    const timerState =
      getExamTimerState(
        currentSession,
      );

    if (timerState.isExpired) {
      const expiredSession = expireExamSession(currentSession);
      finishSession(expiredSession);
      return;
    }

    setRemainingSeconds(
      timerState.remainingSeconds,
    );
  }

  // แสดงเวลาทันที
  updateTimer();

  const timerId = window.setInterval(
    updateTimer,
    1000,
  );

  return () => {
    window.clearInterval(timerId);
  };
}, []);


  /*
   * Loading State
   *
   * Server render และ Client initial render
   * ต้องแสดงผลเหมือนกัน
   */
  if (!session) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-slate-600">
            กำลังเตรียมแบบทดสอบ...
          </p>
        </div>
      </Container>
    );
  }

  const currentQuestion =
    questions[session.currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบข้อสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            ไม่สามารถโหลดข้อสอบข้อปัจจุบันได้
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </Container>
    );
  }

  const currentAnswer =
    getAnswerByQuestionId(
      session,
      currentQuestion.id,
    );

  const correctChoice =
    currentQuestion.choices.find(
      (choice) =>
        choice.id === currentQuestion.answer,
    );

  const hasPreviousQuestion =
    canGoPrevious(session);

  const hasNextQuestion =
    canGoNext(session);

  /*
   * ตรวจว่าอยู่ข้อสุดท้ายหรือไม่
   */
  const isLastQuestion =
    session.currentQuestionIndex ===
    session.questionIds.length - 1;

  /*
   * ตรวจว่าทุกข้อยืนยันแล้วหรือยัง
   */
  const canFinishExam =
    areAllAnswersConfirmed(session);

  function handleSelectChoice(
    choiceId: string,
  ) {
    setSession((currentSession) => {
      if (!currentSession) {
        return currentSession;
      }

      return selectAnswer(
        currentSession,
        currentQuestion,
        choiceId,
      );
    });
  }

  function handleConfirmAnswer() {
    setSession((currentSession) => {
      if (!currentSession) {
        return currentSession;
      }

      return confirmAnswer(
        currentSession,
        currentQuestion,
      );
    });
  }

  function handlePreviousQuestion() {
    setSession((currentSession) => {
      if (!currentSession) {
        return currentSession;
      }

      if (!canGoPrevious(currentSession)) {
        return currentSession;
      }

      return goToPreviousQuestion(
        currentSession,
      );
    });
  }

  function handleNextQuestion() {
    setSession((currentSession) => {
      if (!currentSession) {
        return currentSession;
      }

      if (!canGoNext(currentSession)) {
        return currentSession;
      }

      return goToNextQuestion(
        currentSession,
      );
    });
  }

  /*
   * Package 2.9 – Part 4
   *
   * Completion Flow:
   *
   * 1. ตรวจว่าทุกข้อยืนยันแล้ว
   * 2. Complete ExamSession
   * 3. ตรวจว่า Engine เปลี่ยน status สำเร็จ
   * 4. Save completed session
   * 5. Navigate ไป /result
   */
  function finishSession(
    nextSession: ExamSession,
  ) {
    if (isFinishingRef.current) {
      return;
    }

    isFinishingRef.current = true;

    saveExamSession(nextSession);
    setSession(nextSession);
    router.push("/result");
  }

  function handleCompleteExam() {
  /*
   * Type Guard
   *
   * Event handler อาจถูกเรียกภายหลัง
   * จึงต้องตรวจ session อีกครั้ง
   */
  if (!session) {
    return;
  }

  if (!areAllAnswersConfirmed(session)) {
    return;
  }

  const completedSession =
    completeExamSession(session);

    /*
     * Safety Guard
     *
     * completeExamSession() มีการตรวจ
     * areAllAnswersConfirmed() ภายในอีกครั้ง
     */
    if (
      completedSession.status !== "completed"
    ) {
      return;
    }    /*
      * ใช้ Completion Boundary ร่วมกับ
      * Auto Expire และ Resume Expire
     */
    finishSession(completedSession);
}

  return (
    <Container className="py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">

        {/* Exam Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-blue-600">
            {subject.code}
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            {subject.name}
          </h1>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-slate-600">
    แบบทดสอบจำนวน{" "}
    {session.questionIds.length} ข้อ
  </p>

  <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-2">
    <div className="text-xs font-medium uppercase tracking-wide text-blue-600">
      เวลาคงเหลือ
    </div>

    <div className="font-mono text-lg font-bold text-blue-700">
      {formatRemainingTime(
        remainingSeconds,
      )}
    </div>
  </div>
</div>
        </div>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={
            session.currentQuestionIndex + 1
          }
          totalQuestions={
            session.questionIds.length
          }
          selectedChoiceId={
            currentAnswer?.selectedChoiceId
          }
          choicesDisabled={
            currentAnswer?.isConfirmed === true
          }
          onSelectChoice={
            handleSelectChoice
          }
        />

        {/* Explanation */}
        {currentAnswer?.isConfirmed && (
          <ExplanationPanel
            isCorrect={
              currentAnswer.isCorrect === true
            }
            correctChoice={correctChoice}
            explanation={
              currentQuestion.explanation
            }
          />
        )}

        {/* Actions */}
        <div className="mt-6 space-y-4">

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            {/* Previous */}
            <Button
              onClick={handlePreviousQuestion}
              disabled={!hasPreviousQuestion}
              className="shadow-sm transition-all enabled:hover:-translate-y-0.5 enabled:hover:shadow-md disabled:border disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100 disabled:shadow-none"
            >
              ← ข้อก่อนหน้า
            </Button>

            {/* Confirm */}
            <Button
              onClick={handleConfirmAnswer}
              disabled={
                !currentAnswer?.selectedChoiceId ||
                currentAnswer?.isConfirmed === true
              }
            >
              {currentAnswer?.isConfirmed
                ? "ยืนยันแล้ว"
                : "ยืนยันคำตอบ"}
            </Button>

            {/* Next / Complete */}
            {isLastQuestion ? (
              <Button
                onClick={handleCompleteExam}
                disabled={!canFinishExam}
              >
                จบแบบทดสอบ
              </Button>
            ) : (
              <Button
                onClick={handleNextQuestion}
                disabled={!hasNextQuestion}
                className="shadow-sm transition-all enabled:hover:-translate-y-0.5 enabled:hover:shadow-md disabled:border disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:opacity-100 disabled:shadow-none"
              >
                ข้อถัดไป →
              </Button>
            )}

          </div>

          {/* Exit */}
          <div className="flex justify-start">
            <Link href="/">
              <Button variant="secondary">
                ออกจากแบบทดสอบ
              </Button>
            </Link>
          </div>

        </div>

        {/* Session ID */}
        <div className="mt-5 text-center text-xs text-slate-400">
          Session: {session.id}
        </div>

      </div>
    </Container>
  );
}
