import { topics } from "@/data";
import { Topic } from "@/types";

/**
 * คืนหัวข้อทั้งหมด
 */
export function getTopics(): Topic[] {
  return topics;
}

/**
 * คืนเฉพาะหัวข้อที่เปิดใช้งาน
 */
export function getActiveTopics(): Topic[] {
  return topics.filter((topic) => topic.isActive);
}

/**
 * คืนหัวข้อทั้งหมดของรายวิชาที่กำหนด
 */
export function getTopicsBySubjectId(
  subjectId: string
): Topic[] {
  return topics
    .filter(
      (topic) =>
        topic.subjectId === subjectId &&
        topic.isActive
    )
    .sort((a, b) => a.order - b.order);
}

/**
 * ค้นหาหัวข้อจาก Topic ID
 */
export function getTopicById(
  topicId: string
): Topic | undefined {
  return topics.find((topic) => topic.id === topicId);
}