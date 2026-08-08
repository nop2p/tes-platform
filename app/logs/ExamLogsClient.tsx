"use client";

import { useEffect, useMemo, useState } from "react";

import { Container } from "@/components/ui";
import { getExamAttemptLogs } from "@/lib/exam";

import type { ExamAttemptLog } from "@/types";

interface SubjectLogSummary {
  subjectId: string;
  subjectCode: string;
  subjectName: string;
  completedCount: number;
  expiredCount: number;
}

function formatDateTime(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "ไม่ทราบเวลา";
  }

  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(date);
}

function formatElapsedTime(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours} ชม. ${minutes} นาที`;
  }

  return `${minutes} นาที ${seconds} วินาที`;
}

export function ExamLogsClient() {
  const [logs, setLogs] = useState<ExamAttemptLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLogsTimer = window.setTimeout(() => {
      setLogs(getExamAttemptLogs());
      setIsLoading(false);
    }, 0);

    return () => {
      window.clearTimeout(loadLogsTimer);
    };
  }, []);

  const summaries = useMemo<SubjectLogSummary[]>(() => {
    const summaryMap = new Map<string, SubjectLogSummary>();

    logs.forEach((log) => {
      const current = summaryMap.get(log.subjectId) ?? {
        subjectId: log.subjectId,
        subjectCode: log.subjectCode,
        subjectName: log.subjectName,
        completedCount: 0,
        expiredCount: 0,
      };

      if (log.outcome === "completed") {
        current.completedCount += 1;
      } else {
        current.expiredCount += 1;
      }

      summaryMap.set(log.subjectId, current);
    });

    return [...summaryMap.values()].sort((a, b) =>
      a.subjectCode.localeCompare(b.subjectCode, "th"),
    );
  }, [logs]);

  return (
    <Container className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            EXAM LOG
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            ประวัติการทำแบบทดสอบ
          </h1>

          <p className="mt-2 leading-7 text-slate-600">
            สรุปจำนวนครั้งที่จบแบบทดสอบและหมดเวลา พร้อมคะแนนและเวลาของแต่ละครั้ง
          </p>
        </div>

        {isLoading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            กำลังโหลดประวัติการสอบ...
          </div>
        ) : logs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              ยังไม่มีประวัติการสอบ
            </h2>

            <p className="mt-2 text-slate-600">
              ระบบจะบันทึก Log เมื่อผู้สอบจบแบบทดสอบ หรือเวลาสอบหมด
            </p>
          </div>
        ) : (
          <>
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                สรุปตามรายวิชา
              </h2>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {summaries.map((summary) => (
                  <div
                    key={summary.subjectId}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-blue-600">
                      {summary.subjectCode}
                    </p>

                    <h3 className="mt-1 font-bold text-slate-900">
                      {summary.subjectName}
                    </h3>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-green-50 p-3">
                        <p className="text-sm text-green-700">
                          จบแบบทดสอบ
                        </p>
                        <p className="mt-1 text-2xl font-bold text-green-700">
                          {summary.completedCount} ครั้ง
                        </p>
                      </div>

                      <div className="rounded-xl bg-amber-50 p-3">
                        <p className="text-sm text-amber-700">
                          หมดเวลาก่อนจบ
                        </p>
                        <p className="mt-1 text-2xl font-bold text-amber-700">
                          {summary.expiredCount} ครั้ง
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-slate-900">
                รายละเอียดแต่ละครั้ง
              </h2>

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="hidden grid-cols-[minmax(12rem,1.6fr)_minmax(10rem,1fr)_minmax(7rem,.7fr)_minmax(8rem,.8fr)] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600 md:grid">
                  <span>รายวิชา / เวลาสิ้นสุด</span>
                  <span>สถานะ</span>
                  <span>คะแนน</span>
                  <span>เวลาใช้งาน</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {logs.map((log) => (
                    <article
                      key={log.id}
                      className="grid gap-3 px-5 py-5 md:grid-cols-[minmax(12rem,1.6fr)_minmax(10rem,1fr)_minmax(7rem,.7fr)_minmax(8rem,.8fr)] md:gap-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-blue-600">
                          {log.subjectCode}
                        </p>
                        <h3 className="font-semibold text-slate-900">
                          {log.subjectName}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          เริ่ม: {formatDateTime(log.startedAt)}
                        </p>
                        <p className="text-sm text-slate-500">
                          สิ้นสุด: {formatDateTime(log.endedAt)}
                        </p>
                      </div>

                      <div>
                        <span
                          className={
                            log.outcome === "completed"
                              ? "inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
                              : "inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700"
                          }
                        >
                          {log.outcome === "completed"
                            ? "จบแบบทดสอบ"
                            : "หมดเวลา"}
                        </span>
                        <p className="mt-2 text-sm text-slate-600">
                          ยืนยันแล้ว {log.confirmedAnswers}/{log.totalQuestions} ข้อ
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-bold text-blue-600">
                          {log.correctAnswers}/{log.totalQuestions}
                        </p>
                        <p className="text-sm text-slate-500">
                          {log.percentage}% · ถูก {log.correctAnswers} · ผิด {log.incorrectAnswers}
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {formatElapsedTime(log.elapsedSeconds)}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          กำหนด {log.durationMinutes} นาที
                        </p>
                        {log.unansweredAnswers > 0 && (
                          <p className="mt-1 text-sm text-amber-700">
                            ไม่ทำ {log.unansweredAnswers} ข้อ
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <p className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-800">
          Log นี้เก็บใน Browser และอุปกรณ์ปัจจุบันเท่านั้น จึงไม่แสดงผลรวมจากผู้เข้าสอบคนอื่น หรือจากอุปกรณ์อื่น
        </p>
      </div>
    </Container>
  );
}
