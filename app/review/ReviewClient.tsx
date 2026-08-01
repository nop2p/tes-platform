"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui";

import {
  questions,
  topics,
} from "@/data";

import {
  analyzeExamResult,
  hasValidExamSessionContext,
  loadExamSession,
} from "@/lib/exam";

import type {
  ExamSession,
} from "@/types";

const CHOICE_LABELS = [
  "ก",
  "ข",
  "ค",
  "ง",
];

export function ReviewClient() {
  const [session, setSession] =
    useState<ExamSession | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  /*
   * Package 2.11 - Part 3
   * index ของข้อที่กำลัง Review
   */
  const [
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = useState(0);

  type ReviewFilter =
    | "all"
    | "correct"
    | "wrong"
    | "unanswered";

  const [reviewFilter, setReviewFilter] =
    useState<ReviewFilter>("all");

  useEffect(() => {
    const savedSession =
      loadExamSession();

    setSession(savedSession);
    setIsLoading(false);
  }, []);

  /*
   * Loading
   */
  if (isLoading) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-slate-600">
            กำลังโหลดข้อมูลการตรวจคำตอบ...
          </p>
        </div>
      </Container>
    );
  }

  /*
   * ไม่พบ Session
   */
  if (!session) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบข้อมูลการทดสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            ไม่พบ Exam Session สำหรับตรวจคำตอบ
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

  /*
   * Review ได้เฉพาะ Session ที่ completed
   */
  if (session.status !== "completed") {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200 bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            ยังไม่สามารถตรวจคำตอบได้
          </h1>

          <p className="mt-3 text-slate-600">
            กรุณาทำแบบทดสอบให้เสร็จก่อนตรวจคำตอบ
          </p>

          <Link
            href={`/exam?subject=${session.subjectId}`}
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
          >
            กลับไปทำแบบทดสอบ
          </Link>

        </div>
      </Container>
    );
  }

  /*
   * Package 2.13 – Part 8.3C.5
   *
   * Review Contextual Integrity Boundary
   *
   * completed Session ต้องสัมพันธ์กับ
   * Question dataset ปัจจุบันจริงก่อน
   * จึงจะอนุญาตให้ Review อ่านผลคำตอบ
   * เฉลย หรือคำอธิบาย
   */
  const subjectQuestions =
    questions.filter(
      (question) =>
        question.subjectId === session.subjectId,
    );

  if (
    !hasValidExamSessionContext(
      session,
      session.subjectId,
      subjectQuestions,
    )
  ) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            ข้อมูลการตรวจคำตอบไม่ถูกต้อง
          </h1>

          <p className="mt-3 text-slate-600">
            ข้อมูล Exam Session ไม่สัมพันธ์กับชุดข้อสอบปัจจุบัน
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

  /*
   * -------------------------
   * Package 2.11
   * Review Question Data
   * -------------------------
   */

  const currentQuestionId =
    session.questionIds[
      currentQuestionIndex
    ];

  const currentQuestion =
    questions.find(
      (question) =>
        question.id ===
        currentQuestionId,
    );

  if (!currentQuestion) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบข้อมูลข้อสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            ไม่พบ Question ที่ตรงกับ Session
          </p>

          <Link
            href="/result"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
          >
            กลับหน้าผลการทดสอบ
          </Link>

        </div>
      </Container>
    );
  }

  const currentAnswer =
    session.answers.find(
      (answer) =>
        answer.questionId ===
        currentQuestion.id,
    );

  const selectedChoiceId =
    currentAnswer?.selectedChoiceId;

  const correctChoiceId =
    currentQuestion.answer;

  const isCorrect =
    currentAnswer?.isCorrect === true;

  const isUnanswered =
    currentAnswer?.isConfirmed !== true;

/*
 * -------------------------
 * Package 2.13 - Part 8.5C
 * Review Summary Single Source of Truth
 * -------------------------
 *
 * หลังผ่าน Completion + Contextual Integrity
 * ให้ Result Analyzer เป็นแหล่งคำนวณ Summary
 * เดียวกับหน้า Result
 *
 * Filter / Navigation ยังคงเป็น Review concern
 * และไม่ถูกย้ายเข้า Result Analyzer
 */
const analysis =
  analyzeExamResult(
    session,
    questions,
    topics,
  );

const filteredQuestionIndexes =
  session.questionIds
    .map((questionId, index) => {
      const answer = session.answers.find(
        (item) => item.questionId === questionId,
      );
      const questionIsCorrect =
        answer?.isCorrect === true;
      const questionIsUnanswered =
        answer?.isConfirmed !== true;

      if (reviewFilter === "correct") {
        return questionIsCorrect ? index : null;
      }
      if (reviewFilter === "wrong") {
        return answer?.isConfirmed === true &&
          !questionIsCorrect
          ? index
          : null;
      }
      if (reviewFilter === "unanswered") {
        return questionIsUnanswered ? index : null;
      }
      return index;
    })
    .filter(
      (index): index is number => index !== null,
    );

  /*
   * -------------------------
   * Package 2.11 - Part 3
   * Review Navigation
   * -------------------------
   */

  const currentFilteredPosition =
    filteredQuestionIndexes.indexOf(currentQuestionIndex);

  const hasPreviousQuestion =
    currentFilteredPosition > 0;

  const hasNextQuestion =
    currentFilteredPosition >= 0 &&
    currentFilteredPosition < filteredQuestionIndexes.length - 1;

  function handlePreviousQuestion() {
    if (!hasPreviousQuestion) return;
    setCurrentQuestionIndex(
      filteredQuestionIndexes[currentFilteredPosition - 1],
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleNextQuestion() {
    if (!hasNextQuestion) return;
    setCurrentQuestionIndex(
      filteredQuestionIndexes[currentFilteredPosition + 1],
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReviewFilterChange(nextFilter: ReviewFilter) {
    if (!session) {
      return;
    }

    setReviewFilter(nextFilter);

    const nextIndexes = session.questionIds
      .map((questionId, index) => {
        const answer = session.answers.find(
          (item) => item.questionId === questionId,
        );
        const correct = answer?.isCorrect === true;
        const unanswered = answer?.isConfirmed !== true;

        if (nextFilter === "correct") return correct ? index : null;
        if (nextFilter === "wrong") {
          return answer?.isConfirmed === true && !correct
            ? index
            : null;
        }
        if (nextFilter === "unanswered") {
          return unanswered ? index : null;
        }
        return index;
      })
      .filter((index): index is number => index !== null);

    if (
      nextIndexes.length > 0 &&
      !nextIndexes.includes(currentQuestionIndex)
    ) {
      setCurrentQuestionIndex(nextIndexes[0]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

/*
 * Package 2.11 - Part 4
 * Question Navigator
 */
function handleSelectQuestion(
  questionIndex: number,
) {
  if (!session) {
    return;
  }

  if (
    questionIndex < 0 ||
    questionIndex >= session.questionIds.length
  ) {
    return;
  }

  setCurrentQuestionIndex(questionIndex);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

  return (
    <Container className="py-8 sm:py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-blue-600">
            ตรวจคำตอบ
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
            Question Review
          </h1>

          <p className="mt-2 text-slate-600">
            ตรวจสอบคำตอบหลังทำแบบทดสอบ
          </p>
        </div>
        
   {/* Review Summary / Filter */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <button
            type="button"
            onClick={() => handleReviewFilterChange("all")}
            aria-pressed={reviewFilter === "all"}
            className={`rounded-2xl border p-4 text-center transition ${
              reviewFilter === "all"
                ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"
            }`}
          >
            <p className="text-sm font-medium text-slate-500">ทั้งหมด</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{analysis.totalQuestions}</p>
            <p className="mt-1 text-xs text-slate-400">ข้อ</p>
          </button>

          <button
            type="button"
            onClick={() => handleReviewFilterChange("correct")}
            aria-pressed={reviewFilter === "correct"}
            className={`rounded-2xl border p-4 text-center transition ${
              reviewFilter === "correct"
                ? "border-green-500 bg-green-100 ring-2 ring-green-100"
                : "border-green-200 bg-green-50 hover:bg-green-100"
            }`}
          >
            <p className="text-sm font-medium text-green-700">ตอบถูก</p>
            <p className="mt-1 text-2xl font-bold text-green-700">{analysis.correctAnswers}</p>
            <p className="mt-1 text-xs text-green-600">ข้อ</p>
          </button>

          <button
            type="button"
            onClick={() => handleReviewFilterChange("wrong")}
            aria-pressed={reviewFilter === "wrong"}
            className={`rounded-2xl border p-4 text-center transition ${
              reviewFilter === "wrong"
                ? "border-red-500 bg-red-100 ring-2 ring-red-100"
                : "border-red-200 bg-red-50 hover:bg-red-100"
            }`}
          >
            <p className="text-sm font-medium text-red-700">ตอบผิด</p>
            <p className="mt-1 text-2xl font-bold text-red-700">{analysis.incorrectAnswers}</p>
            <p className="mt-1 text-xs text-red-600">ข้อ</p>
          </button>

          <button
            type="button"
            onClick={() => handleReviewFilterChange("unanswered")}
            aria-pressed={reviewFilter === "unanswered"}
            className={`rounded-2xl border p-4 text-center transition ${
              reviewFilter === "unanswered"
                ? "border-amber-500 bg-amber-100 ring-2 ring-amber-100"
                : "border-amber-200 bg-amber-50 hover:bg-amber-100"
            }`}
          >
            <p className="text-sm font-medium text-amber-700">
              ไม่ทำข้อสอบ
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-700">
              {analysis.unansweredAnswers}
            </p>
            <p className="mt-1 text-xs text-amber-600">ข้อ</p>
          </button>
        </div>

        {/* Question Navigator */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h2 className="font-bold text-slate-900">
              ตรวจคำตอบแต่ละข้อ
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              เลือกหมายเลขข้อที่ต้องการตรวจสอบ
            </p>
          </div>

          {filteredQuestionIndexes.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-semibold text-slate-700">
                {reviewFilter === "correct"
                  ? "ไม่มีข้อที่ตอบถูก"
                  : reviewFilter === "wrong"
                    ? "ไม่มีข้อที่ตอบผิด"
                    : reviewFilter === "unanswered"
                      ? "ไม่มีข้อที่ไม่ได้ทำ"
                    : "ไม่มีข้อสำหรับตรวจสอบ"}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                เลือกตัวกรองอื่นเพื่อดูข้อสอบ
              </p>
            </div>
          ) : (
            <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
              {filteredQuestionIndexes.map(
                (index) => {
                  const questionId =
                    session.questionIds[index];

                  const answer =
                    session.answers.find(
                      (item) =>
                        item.questionId ===
                        questionId,
                    );

                  const isCurrent =
                    index ===
                    currentQuestionIndex;

                  const questionIsCorrect =
                    answer?.isCorrect === true;

                  const questionIsUnanswered =
                    answer?.isConfirmed !== true;

                  let buttonClassName =
                    "border-slate-300 bg-white text-slate-600 hover:bg-slate-50";

                  if (questionIsUnanswered) {
                    buttonClassName =
                      "border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100";
                  } else if (questionIsCorrect) {
                    buttonClassName =
                      "border-green-300 bg-green-50 text-green-700 hover:bg-green-100";
                  } else {
                    buttonClassName =
                      "border-red-300 bg-red-50 text-red-700 hover:bg-red-100";
                  }

                  if (isCurrent) {
                    buttonClassName =
                      "border-blue-600 bg-blue-600 text-white ring-2 ring-blue-200";
                  }

                  return (
                    <button
                      key={questionId}
                      type="button"
                      onClick={() =>
                        handleSelectQuestion(index)
                      }
                      aria-label={`ตรวจคำตอบข้อที่ ${
                        index + 1
                      }`}
                      aria-current={
                        isCurrent
                          ? "true"
                          : undefined
                      }
                      className={`flex aspect-square items-center justify-center rounded-xl border text-sm font-bold transition ${buttonClassName}`}
                    >
                      {index + 1}
                    </button>
                  );
                },
              )}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <span className="flex items-center gap-2 text-green-700">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              ตอบถูก
            </span>

            <span className="flex items-center gap-2 text-red-700">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              ตอบผิด
            </span>

            <span className="flex items-center gap-2 text-amber-700">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              ไม่ทำข้อสอบ
            </span>

            <span className="flex items-center gap-2 text-blue-700">
              <span className="h-3 w-3 rounded-full bg-blue-600" />
              ข้อที่กำลังดู
            </span>
          </div>
        </div>

        {/* Question Card */}
        {/* Question Card */}
        {!isUnanswered && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Question Number */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">

            <div>
              <p className="font-semibold text-blue-600">
                ข้อที่{" "}
                {currentQuestionIndex + 1}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                จากทั้งหมด{" "}
                {session.questionIds.length} ข้อ
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
              {currentQuestionIndex + 1}
              {" / "}
              {session.questionIds.length}
            </div>

          </div>

          {/* Question */}
          <h2 className="mt-7 text-lg font-bold leading-8 text-slate-900 sm:text-xl">
            {currentQuestion.question}
          </h2>

          {/* Choices */}
          <div className="mt-6 space-y-3">

            {currentQuestion.choices.map(
              (choice, index) => {
                const isSelected =
                  choice.id ===
                  selectedChoiceId;

                const isCorrectChoice =
                  choice.id ===
                  correctChoiceId;

                let choiceClassName =
                  "border-slate-200 bg-white";

                let badgeClassName =
                  "border-slate-300 bg-white text-slate-600";

                if (isCorrectChoice) {
                  choiceClassName =
                    "border-green-400 bg-green-50";

                  badgeClassName =
                    "border-green-500 bg-green-600 text-white";
                }

                if (
                  isSelected &&
                  !isCorrectChoice
                ) {
                  choiceClassName =
                    "border-red-400 bg-red-50";

                  badgeClassName =
                    "border-red-500 bg-red-600 text-white";
                }

                return (
                  <div
                    key={choice.id}
                    className={`rounded-xl border p-4 ${choiceClassName}`}
                  >
                    <div className="flex items-start gap-4">

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${badgeClassName}`}
                      >
                        {CHOICE_LABELS[index] ??
                          index + 1}
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-slate-800">
                          {choice.text}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2">

                          {isSelected && (
                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                              คำตอบของคุณ
                            </span>
                          )}

                          {isCorrectChoice && (
                            <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                              คำตอบที่ถูกต้อง
                            </span>
                          )}

                        </div>

                      </div>

                    </div>
                  </div>
                );
              },
            )}

          </div>

        </div>
        )}

        {/* Result */}
        <div
          className={`mt-5 rounded-2xl border p-6 ${
            isUnanswered
              ? "border-amber-300 bg-amber-50"
              : isCorrect
                ? "border-green-300 bg-green-50"
                : "border-red-300 bg-red-50"
          }`}
        >
          <div className="flex items-center gap-3">

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-xl font-bold ${
                isUnanswered
                  ? "bg-amber-100 text-amber-700"
                  : isCorrect
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              {isUnanswered ? "–" : isCorrect ? "✓" : "×"}
            </div>

            <div>
              <p
                className={`font-bold ${
                isUnanswered
                  ? "text-amber-800"
                  : isCorrect
                    ? "text-green-800"
                    : "text-red-800"
              }`}
            >
                {isUnanswered
                  ? "ไม่ทำข้อสอบ (หมดเวลา)"
                  : isCorrect
                    ? "ตอบถูก"
                    : "ตอบผิด"}
              </p>

              <p className="mt-1 text-sm text-slate-600">
                {isUnanswered
                  ? "ข้อนี้ไม่ได้ยืนยันคำตอบก่อนเวลาสอบหมด"
                  : "คำตอบนี้ถูกล็อกแล้วและไม่สามารถแก้ไขได้"}
              </p>
            </div>

          </div>
        </div>

        {/* Explanation */}
        {!isUnanswered && (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-900">
            เฉลย
          </h2>

          <div className="mt-4 rounded-xl bg-green-50 p-4">

            <p className="text-sm font-medium text-green-700">
              คำตอบที่ถูกต้อง
            </p>

            <p className="mt-1 font-medium text-green-900">
              {
                currentQuestion.choices.find(
                  (choice) =>
                    choice.id ===
                    correctChoiceId,
                )?.text
              }
            </p>

          </div>

          <div className="mt-5">

            <p className="text-sm font-medium text-slate-500">
              คำอธิบาย
            </p>

            <p className="mt-2 leading-7 text-slate-700">
              {
                currentQuestion.explanation
                  .text
              }
            </p>

          </div>

        </div>
        )}

        {/* Review Navigation */}
        <div className="mt-6">

          <div className="grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={
                handlePreviousQuestion
              }
              disabled={
                !hasPreviousQuestion
              }
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            >
              ← ข้อก่อนหน้า
            </button>

            <button
              type="button"
              onClick={
                handleNextQuestion
              }
              disabled={
                !hasNextQuestion
              }
              className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              ข้อถัดไป →
            </button>

          </div>

          <Link
            href="/result"
            className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ← กลับหน้าผลการทดสอบ
          </Link>

        </div>

        {/* Session */}
        <div className="mt-5 text-center text-xs text-slate-400">
          Session: {session.id}
        </div>

      </div>
    </Container>
  );
}
