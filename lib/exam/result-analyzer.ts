import type {
  ExamAnalysisResult,
  ExamSession,
  Question,
  Topic,
  TopicResult,
} from "@/types";

/**
 * วิเคราะห์ผลการสอบ
 *
 * ใช้ข้อมูลจาก:
 * - ExamSession
 * - Questions ที่อยู่ใน Session
 * - Topics
 *
 * คืนผลรวมและผลแยกตาม Topic
 */
export function analyzeExamResult(
  session: ExamSession,
  questions: Question[],
  topics: Topic[],
): ExamAnalysisResult {
  /*
   * ใช้เฉพาะ Question ที่อยู่ใน Session นี้
   *
   * ป้องกันกรณีในอนาคต questions
   * มีข้อสอบมากกว่าชุดที่ผู้ใช้กำลังทำ
   */
  const sessionQuestionIds =
    new Set(session.questionIds);

  const sessionQuestions =
    questions.filter((question) =>
      sessionQuestionIds.has(question.id),
    );

  /*
   * สร้าง Map เพื่อค้นหา Answer
   * ด้วย Question ID ได้ง่าย
   */
  const answerMap = new Map(
    session.answers.map((answer) => [
      answer.questionId,
      answer,
    ]),
  );

  /*
   * -------------------------
   * Overall Result
   * -------------------------
   */

  const totalQuestions =
    sessionQuestions.length;

  const confirmedAnswers =
    sessionQuestions.filter((question) => {
      const answer =
        answerMap.get(question.id);

      return answer?.isConfirmed === true;
    }).length;

  const correctAnswers =
    sessionQuestions.filter((question) => {
      const answer =
        answerMap.get(question.id);

      return (
        answer?.isConfirmed === true &&
        answer.isCorrect === true
      );
    }).length;

  const incorrectAnswers =
    sessionQuestions.filter((question) => {
      const answer =
        answerMap.get(question.id);

      return (
        answer?.isConfirmed === true &&
        answer.isCorrect === false
      );
    }).length;

  const percentage =
    totalQuestions > 0
      ? Math.round(
          (correctAnswers /
            totalQuestions) *
            100,
        )
      : 0;

  /*
   * -------------------------
   * Topic Analysis
   * -------------------------
   */

  const topicResults: TopicResult[] =
    topics
      /*
       * วิเคราะห์เฉพาะ Topic
       * ของ Subject ที่กำลังสอบ
       */
      .filter(
        (topic) =>
          topic.subjectId ===
          session.subjectId,
      )

      /*
       * เรียงตาม order
       */
      .sort(
        (a, b) =>
          a.order - b.order,
      )

      .map((topic) => {
        const topicQuestions =
          sessionQuestions.filter(
            (question) =>
              question.topicId ===
              topic.id,
          );

        const topicTotalQuestions =
          topicQuestions.length;

        const topicConfirmedAnswers =
          topicQuestions.filter(
            (question) => {
              const answer =
                answerMap.get(
                  question.id,
                );

              return (
                answer?.isConfirmed ===
                true
              );
            },
          ).length;

        const topicCorrectAnswers =
          topicQuestions.filter(
            (question) => {
              const answer =
                answerMap.get(
                  question.id,
                );

              return (
                answer?.isConfirmed ===
                  true &&
                answer.isCorrect ===
                  true
              );
            },
          ).length;

        const topicIncorrectAnswers =
          topicQuestions.filter(
            (question) => {
              const answer =
                answerMap.get(
                  question.id,
                );

              return (
                answer?.isConfirmed ===
                  true &&
                answer.isCorrect ===
                  false
              );
            },
          ).length;

        const topicPercentage =
          topicTotalQuestions > 0
            ? Math.round(
                (topicCorrectAnswers /
                  topicTotalQuestions) *
                  100,
              )
            : 0;

        return {
          topicId: topic.id,

          topicCode: topic.code,

          topicName: topic.name,

          order: topic.order,

          totalQuestions:
            topicTotalQuestions,

          correctAnswers:
            topicCorrectAnswers,

          incorrectAnswers:
            topicIncorrectAnswers,

          confirmedAnswers:
            topicConfirmedAnswers,

          percentage:
            topicPercentage,
        };
      })

      /*
       * ไม่แสดง Topic ที่ไม่มีข้อสอบ
       * ใน Session นี้
       */
      .filter(
        (result) =>
          result.totalQuestions > 0,
      );

  return {
    sessionId: session.id,

    subjectId: session.subjectId,

    totalQuestions,

    confirmedAnswers,

    correctAnswers,

    incorrectAnswers,

    percentage,

    topicResults,
  };
}