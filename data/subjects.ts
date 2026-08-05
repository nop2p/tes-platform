import { SUBJECT_IDS } from "@/lib";
import { Subject } from "@/types";

export const subjects: Subject[] = [
  {
    id: SUBJECT_IDS.TEACHER_LICENSE,
    code: "001",
    name: "ระเบียบบริหารสถานศึกษา 2569 #1",
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
  
    {
    id: SUBJECT_IDS.EDUCTIONS01,
    code: "005",
    name: "ภาค ข การศึกษา ว16/2569 #1",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.EDUCTIONS01,
      totalQuestions: 0,
      durationMinutes: 90,
    },
    isActive: true,
  },
  
      {
    id: SUBJECT_IDS.VOCATIONNAL01,
    code: "006",
    name: "ระเบียบบริหารสถานศึกษา 2569 #2",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.VOCATIONNAL01,
      totalQuestions: 0,
      durationMinutes: 20,
    },
    isActive: true,
  },
  
       {
    id: SUBJECT_IDS.DigitalElec01,
    code: "006",
    name: "วิชาเอกไฟฟ้า ดิจิทัล อิเล็กทรอนิกส #1",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.DigitalElec01,
      totalQuestions: 0,
      durationMinutes: 60,
    },
    isActive: true,
  }, 
  
        {
    id: SUBJECT_IDS.EDUQUALITY01,
    code: "007",
    name: "การประกันคุณภาพการศึกษา #1",
    description: "ข้อสอบครูผู้ช่วย",

    examConfig: {
      subjectId: SUBJECT_IDS.EDUQUALITY01,
      totalQuestions: 0,
      durationMinutes: 60,
    },
    isActive: true,
  },
  
  
];
