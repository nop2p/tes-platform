export type Difficulty = "easy" | "medium" | "hard";

export type QuestionStatus = "draft" | "published" | "archived";

/**
 * ข้อมูลรูปภาพที่ใช้ในข้อสอบ
 *
 * สามารถใช้ร่วมกันได้ทั้ง
 * - รูปประกอบโจทย์
 * - รูปในตัวเลือก
 * - รูปประกอบคำอธิบายเฉลย
 */
export interface QuestionImage {
  id: string;

  /**
   * URL หรือ path ของรูปภาพ
   *
   * Prototype:
   * /images/questions/example.png
   *
   * Production:
   * Firebase Storage URL
   */
  url: string;

  /**
   * ข้อความอธิบายรูปสำหรับ Accessibility
   */
  alt?: string;
}

/**
 * ตัวเลือกคำตอบ
 */
export interface Choice {
  id: string;

  text: string;

  /**
   * รูปภาพของตัวเลือก (ถ้ามี)
   */
  image?: QuestionImage;
}

/**
 * คำอธิบายเฉลย
 */
export interface Explanation {
  /**
   * คำอธิบายเฉลยแบบข้อความ
   */
  text: string;

  /**
   * รูปประกอบคำอธิบาย
   *
   * รองรับมากกว่า 1 รูป
   */
  images?: QuestionImage[];
}

/**
 * ข้อมูลข้อสอบ
 */
export interface Question {
  /**
   * Firestore Document ID
   */
  id: string;

  /**
   * รหัสข้อสอบ เช่น TES-000001
   */
  code: string;

  /**
   * วิชา
   */
  subjectId: string;

  /**
   * หมวด / หัวข้อ
   */
  topicId: string;

  /**
   * ลำดับข้อ
   */
  order: number;

  /**
   * ข้อความคำถาม
   */
  question: string;

  /**
   * รูปประกอบโจทย์
   *
   * รองรับมากกว่า 1 รูป
   */
  images?: QuestionImage[];

  /**
   * ตัวเลือก
   */
  choices: Choice[];

  /**
   * Choice.id ของคำตอบที่ถูกต้อง
   */
  answer: string;

  /**
   * คำอธิบายเฉลย
   */
  explanation: Explanation;

  /**
   * ระดับความยาก
   */
  difficulty: Difficulty;

  /**
   * Tag สำหรับจัดหมวดและวิเคราะห์ผล
   */
  tags: string[];

  /**
   * สถานะข้อสอบ
   */
  status: QuestionStatus;

  createdAt?: string;

  updatedAt?: string;
}