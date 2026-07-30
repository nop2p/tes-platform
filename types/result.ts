/**
 * ผลการวิเคราะห์ข้อสอบในแต่ละ Topic
 */
export interface TopicResult {
  /**
   * Topic ID
   */
  topicId: string;

  /**
   * รหัส Topic เช่น AL, PLC, CUR, PSY
   */
  topicCode: string;

  /**
   * ชื่อ Topic
   */
  topicName: string;

  /**
   * ลำดับการแสดงผล
   */
  order: number;

  /**
   * จำนวนข้อทั้งหมดใน Topic นี้
   */
  totalQuestions: number;

  /**
   * จำนวนข้อที่ตอบถูก
   */
  correctAnswers: number;

  /**
   * จำนวนข้อที่ตอบผิด
   */
  incorrectAnswers: number;

  /**
   * จำนวนข้อที่ยืนยันคำตอบแล้ว
   */
  confirmedAnswers: number;

  /**
   * คะแนนเป็นเปอร์เซ็นต์
   *
   * ช่วง 0 - 100
   */
  percentage: number;
}

/**
 * ผลการวิเคราะห์ Exam Session
 *
 * แยกจาก ExamResult เดิมใน types/exam.ts
 * เพื่อไม่ให้ Type ชนกัน และใช้สำหรับ
 * Result Analysis / Topic Analysis
 */
export interface ExamAnalysisResult {
  /**
   * Exam Session ID
   */
  sessionId: string;

  /**
   * Subject ID
   */
  subjectId: string;

  /**
   * จำนวนข้อทั้งหมด
   */
  totalQuestions: number;

  /**
   * จำนวนข้อที่ยืนยันคำตอบแล้ว
   */
  confirmedAnswers: number;

  /**
   * จำนวนข้อที่ตอบถูก
   */
  correctAnswers: number;

  /**
   * จำนวนข้อที่ตอบผิด
   */
  incorrectAnswers: number;

  /**
   * คะแนนรวมเป็นเปอร์เซ็นต์
   */
  percentage: number;

  /**
   * ผลวิเคราะห์แยกตาม Topic
   */
  topicResults: TopicResult[];
}