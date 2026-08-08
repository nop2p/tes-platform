import {
  ExamAnswer,
  ExamConfig,
  ExamSession,
  Question,
} from "@/types";

/**
 * สร้าง Exam Session ใหม่
 */
export function createExamSession(
  subjectId: string,
  questions: Question[],
  examConfig: ExamConfig,
): ExamSession {
  const now = new Date().toISOString();

  
  return {
    id: createSessionId(),

    subjectId,

    questionIds: questions.map(
      (question) => question.id,
    ),

    answers: questions.map((question) => ({
      questionId: question.id,
      isConfirmed: false,
    })),

    currentQuestionIndex: 0,

    status: "in-progress",

    startedAt: now,

    durationMinutes:
      examConfig.durationMinutes,
  };
}


/**
 * สร้าง Session ID สำหรับ Prototype
 */
function createSessionId(): string {
  return `session-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 9)}`;
}


/**
 * ดึง Answer ของ Question ที่กำหนด
 */
export function getAnswerByQuestionId(
  session: ExamSession,
  questionId: string,
): ExamAnswer | undefined {
  return session.answers.find(
    (answer) => answer.questionId === questionId,
  );
}


/**
 * เลือกคำตอบ
 *
 * สำคัญ:
 * ถ้าข้อนี้ยืนยันแล้ว จะไม่อนุญาตให้เปลี่ยนคำตอบ
 */
export function selectAnswer(
  session: ExamSession,
  question: Question,
  choiceId: string,
): ExamSession {
  /*
   * Completed Session
   * ห้ามแก้คำตอบอีก
   */
  if (session.status === "completed") {
    return session;
  }

  /*
   * Question ต้องเป็น Question
   * ที่อยู่ใน Session นี้จริง
   */
  if (!session.questionIds.includes(question.id)) {
    return session;
  }

  /*
   * Choice ต้องเป็น Choice
   * ที่มีอยู่จริงใน Question
   */
  const choiceExists = question.choices.some(
    (choice) => choice.id === choiceId,
  );

  if (!choiceExists) {
    return session;
  }

  const answer = getAnswerByQuestionId(
    session,
    question.id,
  );

  if (!answer) {
    return session;
  }

  /*
   * Answer Lock
   *
   * เมื่อยืนยันแล้ว ห้ามแก้ selectedChoiceId
   */
  if (answer.isConfirmed) {
    return session;
  }

  return {
    ...session,

    answers: session.answers.map((item) =>
      item.questionId === question.id
        ? {
            ...item,
            selectedChoiceId: choiceId,
          }
        : item,
    ),
  };
}


/**
 * ยืนยันคำตอบ
 *
 * หลังจากฟังก์ชันนี้ทำงาน
 * คำตอบจะถูกล็อกถาวร
 */
export function confirmAnswer(
  session: ExamSession,
  question: Question,
): ExamSession {
  /*
   * Completed Session
   * ห้ามยืนยันหรือแก้ผลคำตอบอีก
   */
  if (session.status === "completed") {
    return session;
  }

  /*
   * Question ต้องเป็น Question
   * ที่อยู่ใน Session นี้จริง
   */
  if (!session.questionIds.includes(question.id)) {
    return session;
  }

  /*
   * Question.answer ต้องอ้างถึง Choice
   * ที่มีอยู่จริงใน Question
   */
  const correctChoiceExists =
    question.choices.some(
      (choice) =>
        choice.id === question.answer,
    );

  if (!correctChoiceExists) {
    return session;
  }

  const answer = getAnswerByQuestionId(
    session,
    question.id,
  );

  if (!answer) {
    return session;
  }

  /*
   * ยังไม่ได้เลือกคำตอบ
   * จึงยังยืนยันไม่ได้
   */
  if (!answer.selectedChoiceId) {
    return session;
  }

  /*
   * selectedChoiceId ต้องเป็น Choice
   * ที่มีอยู่จริงใน Question
   *
   * ป้องกัน Engine จากการสร้างผล
   * บน Answer state ที่ไม่สัมพันธ์
   * กับ Question context
   */
  const selectedChoiceExists =
    question.choices.some(
      (choice) =>
        choice.id ===
        answer.selectedChoiceId,
    );

  if (!selectedChoiceExists) {
    return session;
  }

  /*
   * ยืนยันไปแล้ว
   * ห้ามยืนยันซ้ำหรือแก้ผล
   */
  if (answer.isConfirmed) {
    return session;
  }

  const isCorrect =
    answer.selectedChoiceId ===
    question.answer;

  return {
    ...session,

    answers: session.answers.map((item) =>
      item.questionId === question.id
        ? {
            ...item,

            isConfirmed: true,

            isCorrect,

            confirmedAt:
              new Date().toISOString(),
          }
        : item,
    ),
  };
}


/**
 * ไปข้อก่อนหน้า
 */
export function goToPreviousQuestion(
  session: ExamSession,
): ExamSession {
  if (session.currentQuestionIndex <= 0) {
    return session;
  }

  return {
    ...session,

    currentQuestionIndex:
      session.currentQuestionIndex - 1,
  };
}


/**
 * ไปข้อถัดไป
 */
export function goToNextQuestion(
  session: ExamSession,
): ExamSession {
  const lastIndex =
    session.questionIds.length - 1;

  /*
   * ต้องมีข้อปัจจุบันที่ถูกต้อง
   */
  if (
    session.currentQuestionIndex < 0 ||
    session.currentQuestionIndex >=
      session.questionIds.length
  ) {
    return session;
  }

  /*
   * อยู่ข้อสุดท้ายแล้ว
   * ไม่สามารถไปข้างหน้าได้
   */
  if (
    session.currentQuestionIndex >= lastIndex
  ) {
    return session;
  }

  const currentQuestionId =
    session.questionIds[
      session.currentQuestionIndex
    ];

  const currentAnswer =
    getAnswerByQuestionId(
      session,
      currentQuestionId,
    );

  /*
   * ต้องยืนยันคำตอบข้อปัจจุบันก่อน
   * จึงสามารถไปข้อถัดไปได้
   */
  if (currentAnswer?.isConfirmed !== true) {
    return session;
  }

  return {
    ...session,

    currentQuestionIndex:
      session.currentQuestionIndex + 1,
  };
}


/**
 * ไปยังข้อที่ระบุโดยตรง
 *
 * ใช้กับ Question Navigator ในอนาคต
 */
export function goToQuestion(
  session: ExamSession,
  questionIndex: number,
): ExamSession {
  const lastIndex =
    session.questionIds.length - 1;

  if (
    questionIndex < 0 ||
    questionIndex > lastIndex
  ) {
    return session;
  }

  return {
    ...session,
    currentQuestionIndex: questionIndex,
  };
}


/**
 * ตรวจว่าทุกข้อถูกยืนยันแล้วหรือยัง
 */
export function areAllAnswersConfirmed(
  session: ExamSession,
): boolean {
  /*
   * ต้องมี Question อย่างน้อย 1 ข้อ
   */
  if (session.questionIds.length === 0) {
    return false;
  }

  /*
   * Completion Cardinality
   *
   * ต้องมี Answer เท่ากับจำนวน Question พอดี
   * ป้องกัน missing / extra / duplicate Answer
   * บางรูปแบบไม่ให้ผ่าน Completion Boundary
   */
  if (
    session.answers.length !==
    session.questionIds.length
  ) {
    return false;
  }

  /*
   * Question ID ต้องไม่ซ้ำกัน
   */
  const uniqueQuestionIds =
    new Set(session.questionIds);

  if (
    uniqueQuestionIds.size !==
    session.questionIds.length
  ) {
    return false;
  }

  /*
   * Answer.questionId ต้องไม่ซ้ำกัน
   */
  const answerQuestionIds =
    session.answers.map(
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
   * Answer ทุกตัวต้องอ้างถึง Question
   * ที่อยู่ใน Session นี้จริง
   */
  const allAnswersBelongToSession =
    answerQuestionIds.every(
      (questionId) =>
        uniqueQuestionIds.has(questionId),
    );

  if (!allAnswersBelongToSession) {
    return false;
  }

  /*
   * Question ทุกข้อต้องมี Answer
   * และ Answer นั้นต้อง Confirm แล้ว
   */
  return session.questionIds.every(
    (questionId) => {
      const answer = getAnswerByQuestionId(
        session,
        questionId,
      );

      return answer?.isConfirmed === true;
    },
  );
}


/**
 * จบ Exam Session
 *
 * จะจบได้ก็ต่อเมื่อทุกข้อถูกยืนยันแล้ว
 */
export function completeExamSession(
  session: ExamSession,
): ExamSession {
  if (session.status === "completed") {
    return session;
  }

  if (!areAllAnswersConfirmed(session)) {
    return session;
  }

  return {
    ...session,

    status: "completed",

    completedAt: new Date().toISOString(),

    completionReason: "completed",
  };
}
/**
 * หมดเวลาสอบ
 *
 * ใช้เมื่อ Timer หมดเวลา
 * ไม่จำเป็นต้องยืนยันคำตอบครบทุกข้อ
 */
export function expireExamSession(
  session: ExamSession,
): ExamSession {
  if (session.status === "completed") {
    return session;
  }

  return {
    ...session,

    status: "completed",

    completedAt: new Date().toISOString(),

    completionReason: "expired",
  };
}
