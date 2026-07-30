import type { ExamConfig } from "./exam";

export interface Subject {
  id: string;

  code: string;

  name: string;

  description: string;

  examConfig: ExamConfig;

  isActive: boolean;
}