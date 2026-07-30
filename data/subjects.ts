import { SUBJECT_IDS } from "@/lib";
import { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: SUBJECT_IDS.TEACHER_LICENSE,
    code: "TL",
    name: "ครูผู้ช่วย",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.TEACHER_LICENSE,
      totalQuestions: 0,
      durationMinutes: 180,
    },

    isActive: true,
  },
];
