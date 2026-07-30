import { subjects } from "@/data";
import { Subject } from "@/types";

/**
 * คืนรายวิชาทั้งหมด
 */
export function getSubjects(): Subject[] {
  return subjects;
}

/**
 * คืนเฉพาะรายวิชาที่เปิดใช้งาน
 */
export function getActiveSubjects(): Subject[] {
  return subjects.filter((subject) => subject.isActive);
}

/**
 * ค้นหารายวิชาจาก Subject ID
 */
export function getSubjectById(
  subjectId: string
): Subject | undefined {
  return subjects.find((subject) => subject.id === subjectId);
}