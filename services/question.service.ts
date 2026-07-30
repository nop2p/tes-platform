import { questions } from "@/data";
import { QUESTION_STATUS } from "@/lib";
import { Question } from "@/types";

/**
 * คืนข้อสอบทั้งหมด
 */
export function getQuestions(): Question[] {
  return questions;
}

/**
 * คืนเฉพาะข้อสอบที่เผยแพร่แล้ว
 */
export function getPublishedQuestions(): Question[] {
  return questions
    .filter(
      (question) =>
        question.status === QUESTION_STATUS.PUBLISHED
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * ค้นหาข้อสอบจาก Question ID
 */
export function getQuestionById(
  questionId: string
): Question | undefined {
  return questions.find(
    (question) => question.id === questionId
  );
}

/**
 * คืนข้อสอบที่เผยแพร่แล้วของรายวิชาที่กำหนด
 */
export function getQuestionsBySubjectId(
  subjectId: string
): Question[] {
  return questions
    .filter(
      (question) =>
        question.subjectId === subjectId &&
        question.status === QUESTION_STATUS.PUBLISHED
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * คืนข้อสอบที่เผยแพร่แล้วของหัวข้อที่กำหนด
 */
export function getQuestionsByTopicId(
  topicId: string
): Question[] {
  return questions
    .filter(
      (question) =>
        question.topicId === topicId &&
        question.status === QUESTION_STATUS.PUBLISHED
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * คืนจำนวนข้อสอบที่เผยแพร่แล้วของรายวิชา
 */
export function getQuestionCountBySubjectId(
  subjectId: string
): number {
  return getQuestionsBySubjectId(subjectId).length;
}

/**
 * คืนจำนวนข้อสอบที่เผยแพร่แล้วของหัวข้อ
 */
export function getQuestionCountByTopicId(
  topicId: string
): number {
  return getQuestionsByTopicId(topicId).length;
}