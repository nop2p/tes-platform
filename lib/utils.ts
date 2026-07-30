import { EXAM_CONFIG } from "@/config";

/**
 * จำกัดค่าตัวเลขให้อยู่ภายในช่วงที่กำหนด
 */
export function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * คำนวณเปอร์เซ็นต์จากคะแนนที่ได้และคะแนนเต็ม
 *
 * ตัวอย่าง:
 * calculatePercentage(8, 10) -> 80
 */
export function calculatePercentage(
  correct: number,
  total: number
): number {
  if (total <= 0) {
    return 0;
  }

  const percentage = (correct / total) * 100;

  return clamp(Math.round(percentage), 0, 100);
}

/**
 * ตรวจสอบว่าคะแนนผ่านเกณฑ์หรือไม่
 *
 * หากไม่ส่ง passingScore เข้ามา
 * จะใช้ค่าจาก EXAM_CONFIG
 */
export function isPassingScore(
  percentage: number,
  passingScore: number = EXAM_CONFIG.passingScore
): boolean {
  return percentage >= passingScore;
}

/**
 * แปลงจำนวนวินาทีเป็นรูปแบบ MM:SS
 *
 * ตัวอย่าง:
 * formatTime(125) -> "02:05"
 */
export function formatTime(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));

  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}