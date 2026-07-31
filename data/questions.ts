import { questions as question01 } from "./question01";
import { questions as question02 } from "./question02";
import type { Question } from "@/types";

/**
 * รายการข้อสอบรวมจากทุกไฟล์ questionXX.ts
 *
 * เมื่อต้องการเพิ่มวิชา ให้ import ไฟล์ชุดใหม่ด้านบน แล้วเพิ่มลงใน array นี้
 * ดูขั้นตอนและตัวอย่างใน README.md
 */
export const questions = [
  ...question01,
    ...question02,
] satisfies Question[];
