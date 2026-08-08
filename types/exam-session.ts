/**
 * สถานะของการสอบหนึ่ง Session
 */
export type ExamSessionStatus =
  | "in-progress"
  | "completed";

/** เหตุผลที่ Session สิ้นสุดลง */
export type ExamSessionCompletionReason =
  | "completed"
  | "expired";

/**
 * คำตอบของผู้สอบในแต่ละข้อ
 */
export interface ExamAnswer {
  /**
   * Question ID
   */
  questionId: string;

  /**
   * Choice ID ที่ผู้สอบเลือก
   *
   * undefined หมายถึง
   * ยังไม่ได้เลือกคำตอบ
   */
  selectedChoiceId?: string;

  /**
   * ผู้สอบยืนยันคำตอบแล้วหรือยัง
   *
   * true = ล็อกคำตอบแล้ว
   * false = ยังเปลี่ยนคำตอบได้
   */
  isConfirmed: boolean;

  /**
   * คำตอบที่ยืนยันแล้วถูกหรือไม่
   *
   * undefined = ยังไม่ได้ยืนยัน
   */
  isCorrect?: boolean;

  /**
   * เวลาที่ยืนยันคำตอบ
   */
  confirmedAt?: string;
}

/**
 * Session ของการทำข้อสอบหนึ่งครั้ง
 */
export interface ExamSession {
  /**
   * Session ID
   *
   * Prototype:
   * สร้างใน Browser
   *
   * Production:
   * สามารถใช้ Firestore Document ID
   */
  id: string;

  /**
   * Subject ที่กำลังสอบ
   */
  subjectId: string;

  /**
   * Question ID ทั้งหมดของ Session นี้
   *
   * เก็บลำดับข้อไว้ด้วย
   */
  questionIds: string[];

  /**
   * คำตอบของผู้สอบ
   */
  answers: ExamAnswer[];

  /**
   * index ของข้อที่กำลังเปิดอยู่
   *
   * เริ่มจาก 0
   */
  currentQuestionIndex: number;

  /**
   * สถานะการสอบ
   */
  status: ExamSessionStatus;

  /**
   * เวลาเริ่มทำข้อสอบ
   */
  startedAt: string;

  /**
   * ระยะเวลาสอบ (นาที)
   *
   * ใช้ร่วมกับ startedAt
   * เพื่อคำนวณ Timer แบบ Absolute Time
   */
  durationMinutes: number;

  /**
   * เวลาส่งข้อสอบ
   */
  completedAt?: string;

  /**
   * completed = ผู้สอบยืนยันคำตอบครบและกดจบแบบทดสอบ
   * expired = เวลาสอบหมดก่อนจบแบบทดสอบ
   */
  completionReason?: ExamSessionCompletionReason;
}
