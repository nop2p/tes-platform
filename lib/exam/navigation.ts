import type { ExamSession } from "@/types";

/**
 * ตรวจว่าสามารถย้อนกลับไปข้อก่อนหน้าได้หรือไม่
 */
export function canGoPrevious(
  session: ExamSession,
): boolean {
  return session.currentQuestionIndex > 0;
}

/**
 * ตรวจว่าสามารถไปข้อถัดไปได้หรือไม่
 *
 * เงื่อนไข:
 * 1. ต้องยังมีข้อถัดไป
 * 2. ข้อปัจจุบันต้องยืนยันคำตอบแล้ว
 */
export function canGoNext(
  session: ExamSession,
): boolean {
  const currentQuestionId =
    session.questionIds[
      session.currentQuestionIndex
    ];

  /*
   * answers เป็น Array
   * จึงต้องค้นหาด้วย questionId
   */
  const currentAnswer =
    session.answers.find(
      (answer) =>
        answer.questionId === currentQuestionId,
    );

  const isConfirmed =
    currentAnswer?.isConfirmed === true;

  const hasNextQuestion =
    session.currentQuestionIndex <
    session.questionIds.length - 1;

  return isConfirmed && hasNextQuestion;
}