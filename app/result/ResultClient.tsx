"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { TopicResultCard } from "@/components/result";
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

import type { ExamSession } from "@/types";

export function ResultClient() {
  const [session, setSession] =
    useState<ExamSession | null>(null);

  const [isLoading, setIsLoading] =
    useState(true);

  /*
   * โหลด Exam Session จาก Session Storage
   */
  useEffect(() => {
    const storedSession =
      loadExamSession();

    setSession(storedSession);
    setIsLoading(false);
  }, []);

  /*
   * Loading State
   */
  if (isLoading) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-slate-600">
            กำลังโหลดผลการทดสอบ...
          </p>
        </div>
      </Container>
    );
  }

  /*
   * ไม่พบ Exam Session
   */
  if (!session) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบผลการทดสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            ไม่พบ Exam Session ใน Session Storage
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
   * Package 2.12 – Part 7.12.2
   *
   * Result Route Completion Guard
   *
   * หน้า Result ต้องแสดงผลได้เฉพาะ
   * Exam Session ที่จบแบบทดสอบแล้วเท่านั้น
   *
   * ต้อง guard ก่อนคำนวณคะแนน
   * และก่อนเรียก analyzeExamResult()
   */
  if (session.status !== "completed") {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            แบบทดสอบยังไม่เสร็จ
          </h1>

          <p className="mt-3 text-slate-600">
            กรุณาทำและยืนยันคำตอบให้ครบทุกข้อก่อนดูผลการทดสอบ
          </p>

          <Link
            href={`/exam?subject=${encodeURIComponent(
              session.subjectId,
            )}`}
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white"
          >
            กลับไปทำแบบทดสอบ
          </Link>
        </div>
      </Container>
    );
  }

  /*
   * Package 2.13 – Part 8.3C.4
   *
   * Result Contextual Integrity Boundary
   *
   * completed Session ต้องสัมพันธ์กับ
   * Question dataset ปัจจุบันจริงก่อน
   * จึงจะอนุญาตให้คำนวณคะแนนหรือวิเคราะห์ผล
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
            ข้อมูลผลการทดสอบไม่ถูกต้อง
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
   * Package 2.13 – Part 8.4C
   *
   * Result Analysis Single Source of Truth
   *
   * หลังผ่าน Completion + Contextual Integrity
   * ให้ Result Analyzer เป็นแหล่งคำนวณผล
   * เพียงแห่งเดียวสำหรับทั้ง Overall และ Topic
   */
  const analysis =
    analyzeExamResult(
      session,
      questions,
      topics,
    );

  return (
    <Container className="py-8 sm:py-10">
      <div className="mx-auto max-w-2xl">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          {/* Result Header */}
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700">
              ✓
            </div>

            <h1 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
              ผลการทดสอบ
            </h1>

            <p className="mt-2 text-slate-500">
              Result Route ทำงานเรียบร้อย
            </p>

          </div>

          {/* Score */}
          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-center">

            <p className="text-sm font-medium text-slate-500">
              คะแนน
            </p>

            <div className="mt-2">
              <span className="text-5xl font-bold text-blue-600">
                {analysis.correctAnswers}
              </span>

              <span className="ml-2 text-2xl font-semibold text-slate-400">
                / {analysis.totalQuestions}
              </span>
            </div>

            <p className="mt-3 text-xl font-semibold text-slate-700">
              {analysis.percentage}%
            </p>

          </div>

          {/* Result Summary */}
          <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200">

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                Subject ID
              </span>

              <span className="font-medium text-slate-900">
                {session.subjectId}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                จำนวนข้อ
              </span>

              <span className="font-medium text-slate-900">
                {analysis.totalQuestions}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                ยืนยันคำตอบแล้ว
              </span>

              <span className="font-medium text-slate-900">
                {analysis.confirmedAnswers}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                ตอบถูก
              </span>

              <span className="font-medium text-green-700">
                {analysis.correctAnswers}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                ตอบผิด
              </span>

              <span className="font-medium text-red-600">
                {analysis.incorrectAnswers}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                ไม่ทำข้อสอบ (หมดเวลา)
              </span>

              <span className="font-medium text-amber-600">
                {analysis.unansweredAnswers}
              </span>
            </div>

            <div className="flex items-center justify-between p-4">
              <span className="text-slate-500">
                สถานะ
              </span>

              <span className="font-medium text-slate-900">
                {session.status}
              </span>
            </div>

          </div>

          {/* Topic Analysis */}
          <div className="mt-8">

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                ผลการทดสอบตามหัวข้อ
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                วิเคราะห์จากคำตอบของแบบทดสอบชุดนี้
              </p>
            </div>

            <div className="mt-4 space-y-4">
              {analysis.topicResults.map(
                (topicResult) => (
                  <TopicResultCard
                    key={topicResult.topicId}
                    result={topicResult}
                  />
                ),
              )}
            </div>

          </div>

          {/* Result Actions */}
<div className="mt-8 space-y-3">
  <Link
    href="/review"
    className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
  >
    ตรวจคำตอบ
  </Link>

  <Link
    href="/"
    className="flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
  >
    กลับหน้าแรก
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
