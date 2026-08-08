export type ExamAttemptOutcome =
  | "completed"
  | "expired";

/**
 * ประวัติการสอบที่จบแล้วหนึ่งครั้ง
 *
 * Prototype นี้จัดเก็บใน localStorage ของ Browser
 * จึงแยกตามอุปกรณ์และ Browser ของผู้เข้าสอบแต่ละคน
 */
export interface ExamAttemptLog {
  id: string;

  sessionId: string;

  subjectId: string;

  subjectCode: string;

  subjectName: string;

  outcome: ExamAttemptOutcome;

  startedAt: string;

  endedAt: string;

  durationMinutes: number;

  elapsedSeconds: number;

  totalQuestions: number;

  confirmedAnswers: number;

  correctAnswers: number;

  incorrectAnswers: number;

  unansweredAnswers: number;

  percentage: number;
}
