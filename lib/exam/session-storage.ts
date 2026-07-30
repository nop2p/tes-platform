import type { ExamSession } from "@/types";

import { isExamSession } from "./session-validator";

const EXAM_SESSION_STORAGE_KEY =
  "tes-current-exam-session";

/**
 * ตรวจสอบว่าสามารถใช้งาน sessionStorage ได้หรือไม่
 *
 * Next.js มีทั้ง Server และ Client
 * จึงต้องป้องกันการเรียก window ฝั่ง Server
 */
function canUseSessionStorage(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.sessionStorage !== "undefined"
  );
}

/**
 * บันทึก ExamSession ปัจจุบัน
 */
export function saveExamSession(
  session: ExamSession,
): void {
  if (!canUseSessionStorage()) {
    return;
  }

  try {
    window.sessionStorage.setItem(
      EXAM_SESSION_STORAGE_KEY,
      JSON.stringify(session),
    );
  } catch (error) {
    console.error(
      "Failed to save exam session:",
      error,
    );
  }
}

/**
 * โหลด ExamSession ที่บันทึกไว้
 *
 * แยก Failure ออกเป็น 3 กรณี:
 *
 * 1. Storage Read Failure
 *    - อ่าน sessionStorage ไม่ได้
 *    - return null
 *    - ห้ามลบข้อมูล เพราะยังไม่ทราบว่า
 *      Session ที่เก็บอยู่เสียหรือไม่
 *
 * 2. JSON Parse Failure
 *    - อ่านข้อมูลได้ แต่ JSON เสีย
 *    - ลบข้อมูลที่ใช้ไม่ได้
 *    - return null
 *
 * 3. Schema Validation Failure
 *    - JSON ถูกต้อง
 *    - แต่โครงสร้างไม่ใช่ ExamSession
 *    - ลบข้อมูลที่ใช้ไม่ได้
 *    - return null
 */
export function loadExamSession():
  | ExamSession
  | null {
  if (!canUseSessionStorage()) {
    return null;
  }

  /*
   * -------------------------
   * Step 1
   * Read from sessionStorage
   * -------------------------
   *
   * ถ้า Storage API ใช้งานไม่ได้
   * ห้ามลบ Session
   */
  let storedSession: string | null;

  try {
    storedSession =
      window.sessionStorage.getItem(
        EXAM_SESSION_STORAGE_KEY,
      );
  } catch (error) {
    console.error(
      "Failed to read exam session:",
      error,
    );

    return null;
  }

  /*
   * ไม่มี Session ที่บันทึกไว้
   */
  if (!storedSession) {
    return null;
  }

  /*
   * -------------------------
   * Step 2
   * Parse JSON
   * -------------------------
   *
   * ถ้าอ่านข้อมูลได้แล้ว
   * แต่ JSON เสีย
   * จึงถือว่า Session ใช้งานไม่ได้
   */
  let parsedSession: unknown;

  try {
    parsedSession =
      JSON.parse(storedSession);
  } catch (error) {
    console.error(
      "Failed to parse exam session:",
      error,
    );

    try {
      window.sessionStorage.removeItem(
        EXAM_SESSION_STORAGE_KEY,
      );
    } catch (clearError) {
      console.error(
        "Failed to clear invalid exam session:",
        clearError,
      );
    }

    return null;
  }

  /*
   * -------------------------
   * Step 3
   * Validate ExamSession Schema
   * -------------------------
   *
   * JSON Parse สำเร็จ
   * แต่โครงสร้างข้อมูลไม่ถูกต้อง
   */
  if (!isExamSession(parsedSession)) {
    console.error(
      "Invalid exam session found in sessionStorage.",
    );

    try {
      window.sessionStorage.removeItem(
        EXAM_SESSION_STORAGE_KEY,
      );
    } catch (clearError) {
      console.error(
        "Failed to clear invalid exam session:",
        clearError,
      );
    }

    return null;
  }

  /*
   * Session ถูกต้อง
   */
  return parsedSession;
}

/**
 * ลบ ExamSession
 *
 * จะใช้เมื่อเริ่มข้อสอบชุดใหม่
 * หรือเมื่อเราต้องการ reset session
 */
export function clearExamSession(): void {
  if (!canUseSessionStorage()) {
    return;
  }

  try {
    window.sessionStorage.removeItem(
      EXAM_SESSION_STORAGE_KEY,
    );
  } catch (error) {
    console.error(
      "Failed to clear exam session:",
      error,
    );
  }
}

/**
 * ตรวจสอบว่ามี ExamSession
 * ถูกบันทึกไว้หรือไม่
 */
export function hasSavedExamSession(): boolean {
  if (!canUseSessionStorage()) {
    return false;
  }

  try {
    return (
      window.sessionStorage.getItem(
        EXAM_SESSION_STORAGE_KEY,
      ) !== null
    );
  } catch (error) {
    console.error(
      "Failed to check exam session:",
      error,
    );

    return false;
  }
}