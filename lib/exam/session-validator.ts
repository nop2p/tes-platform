import type {
  ExamAnswer,
  ExamSession,
  ExamSessionStatus,
} from "@/types";

function isRecord(
  value: unknown,
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function isOptionalString(
  value: unknown,
): value is string | undefined {
  return (
    value === undefined ||
    typeof value === "string"
  );
}

function isExamSessionStatus(
  value: unknown,
): value is ExamSessionStatus {
  return (
    value === "in-progress" ||
    value === "completed"
  );
}

/**
 * ตรวจสอบ ExamAnswer
 *
 * ตรวจทั้ง:
 * - Shape / Type
 * - Semantic Integrity
 *
 * Invariant:
 *
 * Unconfirmed Answer
 * - selectedChoiceId มีหรือไม่มีก็ได้
 * - isCorrect ต้องยังไม่มี
 * - confirmedAt ต้องยังไม่มี
 *
 * Confirmed Answer
 * - ต้องมี selectedChoiceId
 * - ต้องมี isCorrect
 * - ต้องมี confirmedAt
 */
export function isExamAnswer(
  value: unknown,
): value is ExamAnswer {
  if (!isRecord(value)) {
    return false;
  }

  /*
   * Shape Validation
   */
  if (typeof value.questionId !== "string") {
    return false;
  }

  if (
    !isOptionalString(value.selectedChoiceId)
  ) {
    return false;
  }

  if (typeof value.isConfirmed !== "boolean") {
    return false;
  }

  if (
    value.isCorrect !== undefined &&
    typeof value.isCorrect !== "boolean"
  ) {
    return false;
  }

  if (!isOptionalString(value.confirmedAt)) {
    return false;
  }

  /*
   * Semantic Validation
   *
   * Confirmed Answer ต้องมีข้อมูล
   * ที่เกิดจาก confirmAnswer() ครบ
   */
  if (value.isConfirmed) {
    if (
      typeof value.selectedChoiceId !==
      "string"
    ) {
      return false;
    }

    if (typeof value.isCorrect !== "boolean") {
      return false;
    }

    if (typeof value.confirmedAt !== "string") {
      return false;
    }

    return true;
  }

  /*
   * Unconfirmed Answer
   *
   * ยังไม่มีผลถูก/ผิด
   * และยังไม่มีเวลายืนยัน
   */
  if (value.isCorrect !== undefined) {
    return false;
  }

  if (value.confirmedAt !== undefined) {
    return false;
  }

  return true;
}

/**
 * ตรวจสอบ ExamSession
 *
 * ตรวจทั้ง:
 * - Shape / Type
 * - Internal Semantic Integrity
 *
 * หมายเหตุ:
 * การตรวจว่า Session ตรงกับข้อสอบชุด
 * ที่กำลังเปิดอยู่หรือไม่ เป็นหน้าที่ของ
 * canResumeExamSession()
 */
export function isExamSession(
  value: unknown,
): value is ExamSession {
  if (!isRecord(value)) {
    return false;
  }

  /*
   * -------------------------
   * Shape Validation
   * -------------------------
   */

  if (typeof value.id !== "string") {
    return false;
  }

  if (typeof value.subjectId !== "string") {
    return false;
  }

  if (!Array.isArray(value.questionIds)) {
    return false;
  }

  if (
    !value.questionIds.every(
      (questionId) =>
        typeof questionId === "string",
    )
  ) {
    return false;
  }

  if (!Array.isArray(value.answers)) {
    return false;
  }

  if (!value.answers.every(isExamAnswer)) {
    return false;
  }

  if (
    typeof value.currentQuestionIndex !==
      "number" ||
    !Number.isInteger(
      value.currentQuestionIndex,
    )
  ) {
    return false;
  }

  if (!isExamSessionStatus(value.status)) {
    return false;
  }

  if (typeof value.startedAt !== "string") {
    return false;
  }

  if (
    typeof value.durationMinutes !== "number" ||
    !Number.isFinite(value.durationMinutes) ||
    value.durationMinutes <= 0
  ) {
    return false;
  }

  if (!isOptionalString(value.completedAt)) {
    return false;
  }

  /*
   * -------------------------
   * Semantic Validation
   * -------------------------
   */

  /*
   * ต้องมี Question
   *
   * createExamSession() ถูกสร้างจาก
   * ชุดข้อสอบที่ใช้งานจริง
   */
  if (value.questionIds.length === 0) {
    return false;
  }

  /*
   * จำนวน Answer ต้องเท่ากับ
   * จำนวน Question
   */
  if (
    value.answers.length !==
    value.questionIds.length
  ) {
    return false;
  }

  /*
   * Question ID ห้ามซ้ำ
   */
  const uniqueQuestionIds =
    new Set(value.questionIds);

  if (
    uniqueQuestionIds.size !==
    value.questionIds.length
  ) {
    return false;
  }

  /*
   * Answer Question ID ห้ามซ้ำ
   */
  const answerQuestionIds =
    value.answers.map(
      (answer) => answer.questionId,
    );

  const uniqueAnswerQuestionIds =
    new Set(answerQuestionIds);

  if (
    uniqueAnswerQuestionIds.size !==
    answerQuestionIds.length
  ) {
    return false;
  }

  /*
   * ทุก Answer ต้องเป็นของ Question
   * ที่อยู่ใน Session
   */
  const allAnswersBelongToQuestions =
    value.answers.every(
      (answer) =>
        uniqueQuestionIds.has(
          answer.questionId,
        ),
    );

  if (!allAnswersBelongToQuestions) {
    return false;
  }

  /*
   * เมื่อจำนวนเท่ากัน
   * Question IDs ไม่ซ้ำ
   * Answer IDs ไม่ซ้ำ
   * และทุก Answer อยู่ใน questionIds
   *
   * จึงหมายความว่า Question ทุกข้อ
   * มี Answer ครบหนึ่งรายการพอดี
   */

  /*
   * currentQuestionIndex
   * ต้องอยู่ในช่วง Session
   */
  if (
    value.currentQuestionIndex < 0 ||
    value.currentQuestionIndex >=
      value.questionIds.length
  ) {
    return false;
  }

  if (value.durationMinutes <= 0) {
    return false;
  }

  /*
   * -------------------------
   * Session Status Integrity
   * -------------------------
   */

  if (value.status === "in-progress") {
    /*
     * Session ที่ยังไม่จบ
     * ต้องยังไม่มี completedAt
     */
    if (value.completedAt !== undefined) {
      return false;
    }

    return true;
  }

  /*
   * status === "completed"
   *
   * ต้องมี completedAt
   */
  if (typeof value.completedAt !== "string") {
    return false;
  }

  /*
   * Completed Session
   *
   * Auto Expire อาจยังมี Answer
   * ที่ไม่ได้ Confirm ได้
   *
   * การคำนวณคะแนนจะอาศัย
   * analyzeExamResult() ซึ่งนับเฉพาะ
   * Answer ที่ isConfirmed === true
   *
   * ดังนั้นเมื่อผ่าน Shape Validation
   * และ Semantic Validation ทั้งหมดแล้ว
   * completed Session ถือว่าใช้ได้
   */
  return true;
}