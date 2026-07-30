import { ExamSession } from "@/types";

/**
 * สถานะของ Timer
 */
export interface ExamTimerState {
  /**
   * เวลาที่เหลือ (วินาที)
   */
  remainingSeconds: number;

  /**
   * เวลาหมดแล้วหรือยัง
   */
  isExpired: boolean;
}

/**
 * คำนวณเวลาคงเหลือของการสอบ
 *
 * ใช้ Absolute Time
 * ไม่เก็บ remainingSeconds ลง Session
 */
export function getExamTimerState(
  session: ExamSession,
): ExamTimerState {
  const startedAt =
    new Date(session.startedAt).getTime();

  const durationMs =
    session.durationMinutes *
    60 *
    1000;

  const expiresAt =
    startedAt + durationMs;

  const now = Date.now();

  const remainingMs =
    expiresAt - now;

  const remainingSeconds =
    Math.max(
      0,
      Math.ceil(
        remainingMs / 1000,
      ),
    );

  return {
    remainingSeconds,

    isExpired:
      remainingSeconds === 0,
  };
}

/**
 * แสดงเวลาในรูปแบบ
 *
 * HH:MM:SS
 */
export function formatRemainingTime(
  remainingSeconds: number,
): string {
  const hours =
    Math.floor(
      remainingSeconds / 3600,
    );

  const minutes =
    Math.floor(
      (remainingSeconds % 3600) /
        60,
    );

  const seconds =
    remainingSeconds % 60;

  return [
    hours,
    minutes,
    seconds,
  ]
    .map((value) =>
      value
        .toString()
        .padStart(2, "0"),
    )
    .join(":");
}