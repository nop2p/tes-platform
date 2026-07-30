export interface UserAnswer {
  questionId: string;

  selectedChoiceId: string | null;

  isCorrect: boolean;

  locked: boolean;
}

export interface ExamConfig {
  subjectId: string;

  totalQuestions: number;

  durationMinutes: number;
}

export interface ExamResult {
  total: number;

  correct: number;

  wrong: number;

  skipped: number;

  score: number;

  percentage: number;

  passed: boolean;
}
