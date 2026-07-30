import type {
  ExamSession,
  Question,
} from "@/types";

import {
  hasValidExamSessionContext,
} from "./session-context-validator";

/**
 * ตรวจว่า ExamSession ที่บันทึกไว้
 * สามารถ Resume กับข้อสอบปัจจุบันได้หรือไม่
 *
 * นอกจากตรวจโครงสร้างของ Session แล้ว
 * ฟังก์ชันนี้ยังตรวจ Contextual Integrity
 * โดยเปรียบเทียบข้อมูลใน Session
 * กับ Question จริงที่กำลังใช้งาน
 */
export function canResumeExamSession(
  session: ExamSession,
  subjectId: string,
  questions: Question[],
): boolean {
  /*
   * Resume ได้เฉพาะ Session
   * ที่ยังทำข้อสอบไม่เสร็จ
   */
  if (session.status !== "in-progress") {
    return false;
  }

  /*
   * Contextual Integrity
   *
   * ใช้ Shared Validator เดียวกับ
   * Result / Review boundary
   *
   * ตรวจ:
   * - Subject
   * - Question count / ID / order
   * - Question ownership
   * - selectedChoiceId
   * - confirmed isCorrect
   */
  if (
    !hasValidExamSessionContext(
      session,
      subjectId,
      questions,
    )
  ) {
    return false;
  }

  /*
   * Answer ต้องมีครบตาม Question ID
   *
   * Semantic Validator จะตรวจ
   * uniqueness / referential integrity
   * ของ Answer อยู่แล้ว
   *
   * แต่คง guard นี้ไว้ที่ Resume Layer
   * เพื่อป้องกัน regression
   */
  const hasAllAnswers =
    session.questionIds.every(
      (questionId) =>
        session.answers.some(
          (answer) =>
            answer.questionId === questionId,
        ),
    );

  if (!hasAllAnswers) {
    return false;
  }

  /*
   * currentQuestionIndex
   * ต้องอยู่ในช่วงที่ถูกต้อง
   */
  if (
    session.currentQuestionIndex < 0 ||
    session.currentQuestionIndex >=
      session.questionIds.length
  ) {
    return false;
  }

  return true;
}

