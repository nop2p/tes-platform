import type {
  ExamSession,
  Question,
} from "@/types";

/**
 * ตรวจ Contextual Integrity ของ ExamSession
 * กับ Question dataset ที่ใช้งานจริง
 *
 * ฟังก์ชันนี้ไม่ตัดสิน lifecycle policy ว่า
 * Session ต้องเป็น in-progress หรือ completed
 *
 * หน้าที่ของมันคือพิสูจน์ว่า Session
 * สัมพันธ์กับ Question context ที่ได้รับจริง
 */
export function hasValidExamSessionContext(
  session: ExamSession,
  subjectId: string,
  questions: Question[],
): boolean {
  /*
   * Subject ต้องตรงกัน
   */
  if (session.subjectId !== subjectId) {
    return false;
  }

  /*
   * ต้องมี Question
   */
  if (questions.length === 0) {
    return false;
  }

  /*
   * จำนวน Question ต้องตรงกัน
   */
  if (
    session.questionIds.length !==
    questions.length
  ) {
    return false;
  }

  /*
   * Question ID และลำดับ
   * ต้องตรงกับ dataset ปัจจุบัน
   */
  const hasSameQuestions =
    session.questionIds.every(
      (questionId, index) =>
        questionId === questions[index]?.id,
    );

  if (!hasSameQuestions) {
    return false;
  }

  /*
   * Question ทุกข้อต้องเป็น Subject
   * ที่ Session ระบุจริง
   */
  const allQuestionsBelongToSubject =
    questions.every(
      (question) =>
        question.subjectId === subjectId,
    );

  if (!allQuestionsBelongToSubject) {
    return false;
  }

  /*
   * Answer ทุกตัวต้องสัมพันธ์กับ
   * Question จริงใน dataset
   */
  const hasValidAnswerContext =
    session.answers.every((answer) => {
      const question =
        questions.find(
          (item) =>
            item.id === answer.questionId,
        );

      if (!question) {
        return false;
      }

      /*
       * ยังไม่ได้เลือกคำตอบ
       * ไม่มี Choice Context ให้ตรวจเพิ่ม
       *
       * Internal semantic validator
       * รับผิดชอบ lifecycle ของ Answer
       */
      if (
        answer.selectedChoiceId ===
        undefined
      ) {
        return true;
      }

      /*
       * Choice ที่เลือกต้องมีอยู่จริง
       */
      const choiceExists =
        question.choices.some(
          (choice) =>
            choice.id ===
            answer.selectedChoiceId,
        );

      if (!choiceExists) {
        return false;
      }

      /*
       * Answer ที่ยังไม่ Confirm
       * ยังไม่มี result context ให้ตรวจ
       */
      if (!answer.isConfirmed) {
        return true;
      }

      /*
       * Confirmed Answer:
       * isCorrect ต้องคำนวณได้ตรงกับ
       * selectedChoiceId และ answer จริง
       */
      const expectedIsCorrect =
        answer.selectedChoiceId ===
        question.answer;

      if (
        answer.isCorrect !==
        expectedIsCorrect
      ) {
        return false;
      }

      return true;
    });

  return hasValidAnswerContext;
}
