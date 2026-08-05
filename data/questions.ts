import { questions as question01 } from "./question01";
import { questions as question02 } from "./question02";
import { questions as question03 } from "./question03";
import { questions as question04 } from "./question04";
import { questions as question05 } from "./question05";
import { questions as question06 } from "./question06";
import { questions as question07 } from "./question07";
import { questions as question08 } from "./question08";
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
...question03,
...question04,
...question05,
...question06,
...question07,
...question08,
] satisfies Question[];
