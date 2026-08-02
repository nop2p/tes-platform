import { SUBJECT_IDS } from "@/lib";
import { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: SUBJECT_IDS.TEACHER_LICENSE,
    code: "001",
    name: "ระเบียบบริหารสถานศึกษา 2569",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.TEACHER_LICENSE,
      totalQuestions: 0,
      durationMinutes: 30,
    },
    isActive: true,
  },
  
    {
    id: SUBJECT_IDS.RESEARCH01,
    code: "002",
    name: "วิจัยทางการศึกษา#1",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.RESEARCH01,
      totalQuestions: 0,
      durationMinutes: 60,
    },
    isActive: true,
  },
  
    {
    id: SUBJECT_IDS.EducationDisabilities001,
    code: "003",
    name: "พรบ. การจัดการศึกษาสำหรับคนพิการ พ.ศ. 2551 , 2556",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.EducationDisabilities001,
      totalQuestions: 0,
      durationMinutes: 45,
    },
    isActive: true,
  },
  
  {
    id: SUBJECT_IDS.ETHICS001,
    code: "004",
    name: "ข้าราชการที่ดี ประมวลจริยธรรม 2562",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.ETHICS001,
      totalQuestions: 0,
      durationMinutes: 45,
    },
    isActive: true,
  },
];
