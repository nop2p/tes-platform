import {
  CHOICE_IDS,
  DIFFICULTY,
  QUESTION_STATUS,
  SUBJECT_IDS,
  TOPIC_IDS,
} from "@/lib";

import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: "education-quality-assurance-q001",
    code: "EQA-08-000001",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 1,

    question: "การประกันคุณภาพการศึกษา เกี่ยวข้องกับกฎหมายในข้อใดมากที่สุด",

    choices: [
      { id: CHOICE_IDS.A, text: "พ.ร.บ. การศึกษาแห่งชาติ" },
      { id: CHOICE_IDS.B, text: "พ.ร.บ. ระเบียบบริหารราชการกระทรวงศึกษาธิการ" },
      { id: CHOICE_IDS.C, text: "พ.ร.บ. สภาครูและบุคลากรทางการศึกษา" },
      { id: CHOICE_IDS.D, text: "พ.ร.บ. ระเบียบข้าราชการครูและบุคลากรทางการศึกษา" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 หมวด 6 ได้บัญญัติเรื่อง \"มาตรฐานและการประกันคุณภาพการศึกษา\" ไว้โดยตรง (มาตรา 47–51) โดยกำหนดให้มีระบบการประกันคุณภาพการศึกษาเพื่อพัฒนาคุณภาพและมาตรฐานการศึกษาทุกระดับ ประกอบด้วย ระบบการประกันคุณภาพภายใน และระบบการประกันคุณภาพภายนอก",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q002",
    code: "EQA-08-000002",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 2,

    question: "การประกันคุณภาพการศึกษามีประโยชน์อย่างไร (สพฐ. รอบทั่วไป ปี 2564/2565 ม.สวนดุสิต)",

    choices: [
      { id: CHOICE_IDS.A, text: "เป็นหลักประกันให้ผู้บริหารสถานศึกษามั่นใจในคุณภาพ" },
      { id: CHOICE_IDS.B, text: "เป็นหลักประกันให้กับผู้ปกครองและนักเรียนให้มั่นใจในคุณภาพ" },
      { id: CHOICE_IDS.C, text: "เป็นหลักประกันให้กับประชาชนเข้าใจในเจตนารมณ์ของคุณภาพการศึกษา" },
      { id: CHOICE_IDS.D, text: "เป็นหลักประกันให้คณะกรรมการสถานศึกษาขั้นพื้นฐานมั่นใจในคุณภาพ" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "เจตนารมณ์สำคัญของการประกันคุณภาพการศึกษาตาม พ.ร.บ. การศึกษาแห่งชาติ คือ การสร้างความมั่นใจแก่ผู้รับบริการทางการศึกษา ได้แก่ ผู้เรียน ผู้ปกครอง และชุมชน/สังคม ว่าสถานศึกษาจะจัดการศึกษาอย่างมีคุณภาพตามมาตรฐานที่กำหนด",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q003",
    code: "EQA-08-000003",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 3,

    question: "ระบบการประกันคุณภาพการศึกษา มีกี่ระบบ",

    choices: [
      { id: CHOICE_IDS.A, text: "1 ระบบ" },
      { id: CHOICE_IDS.B, text: "2 ระบบ" },
      { id: CHOICE_IDS.C, text: "3 ระบบ" },
      { id: CHOICE_IDS.D, text: "5 ระบบ" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 มาตรา 47 กำหนดให้มีระบบการประกันคุณภาพการศึกษา 2 ระบบ ได้แก่ ระบบการประกันคุณภาพภายใน ระบบการประกันคุณภาพภายนอก",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q004",
    code: "EQA-08-000004",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 4,

    question: "การประกันคุณภาพการศึกษาภายใน หมายความว่าอย่างไร (ครูผู้ช่วยสพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "การประเมินผล และการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาจากภายใน โดยบุคลากรของสถานศึกษานั้นเองหรือโดยหน่วยงานต้นสังกัด" },
      { id: CHOICE_IDS.B, text: "การประเมินผล และการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาจากภายใน โดยหน่วยงานภายนอก" },
      { id: CHOICE_IDS.C, text: "การประเมินผลและการติดตามตรวจสอบคุณภาพและมาตรฐานการศึกษาของสถาบันการศึกษาจากภายนอก" },
      { id: CHOICE_IDS.D, text: "การประเมินผล และการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาจากภายใน โดยกระทรวงศึกษาธิการ" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "ตาม พ.ร.บ. การศึกษาแห่งชาติ มาตรา 48 การประกันคุณภาพภายใน เป็นการประเมินผลและการติดตามตรวจสอบคุณภาพและมาตรฐานการศึกษาของสถานศึกษาจากภายใน โดยบุคลากรของสถานศึกษานั้นเอง หรือโดยหน่วยงานต้นสังกัดที่มีหน้าที่กำกับดูแลสถานศึกษานั้น",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q005",
    code: "EQA-08-000005",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 5,

    question: "“การประกันคุณภาพภายใน” มีหลักการสำคัญตามข้อใด (ครูผู้ช่วย สพฐ. รอบทั่วไป 2568)",

    choices: [
      { id: CHOICE_IDS.A, text: "การประเมินคุณภาพการศึกษาโดยหน่วยงานภายนอก เพื่อรับรองมาตรฐานของสถานศึกษา" },
      { id: CHOICE_IDS.B, text: "การพัฒนาคุณภาพการศึกษาให้เกิดขึ้นกับผู้เรียนอย่างต่อเนื่องและเป็นระบบ" },
      { id: CHOICE_IDS.C, text: "การดำเนินการประกันคุณภาพเพื่อยกระดับมาตรฐานการศึกษาให้เป็นไปตามเกณฑ์" },
      { id: CHOICE_IDS.D, text: "การติดตามและตรวจสอบคุณภาพโดยบุคคลหรือหน่วยงานภายนอกที่ได้รับการรับรอง" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "หลักการสำคัญที่สุดของการประกันคุณภาพภายในตาม กฎกระทรวงการประกันคุณภาพการศึกษา พ.ศ. 2561 คือ ให้สถานศึกษาจัดทำระบบประกันคุณภาพภายในให้เป็นส่วนหนึ่งของกระบวนการบริหารและการปฏิบัติงานตามปกติ โดยมุ่งเป้าหมายหลักไปที่การพัฒนาคุณภาพการจัดการเรียนรู้เพื่อผู้เรียนอย่างต่อเนื่องและยั่งยืน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q006",
    code: "EQA-08-000006",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 6,

    question: "ข้อใดไม่ใช่หน้าที่ของสถานศึกษาในการประเมินคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2563 ม.สวนดุสิต)",

    choices: [
      { id: CHOICE_IDS.A, text: "รายงานการประเมินตนเอง (SAR : Self - Assessment Report)" },
      { id: CHOICE_IDS.B, text: "ส่งรายงานการประเมินคุณภาพภายในให้สำนักงานเขตพื้นที่การศึกษาพิจารณา" },
      { id: CHOICE_IDS.C, text: "ส่งรายงานการประเมินคุณภาพภายใน ให้ สมศ. รับรองคุณภาพ" },
      { id: CHOICE_IDS.D, text: "ระบบประกันคุณภาพภายในใช้แนวคิดหลักการจากวงจรคุณภาพ (PDCA)" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "ตามกฎกระทรวงการประกันคุณภาพการศึกษา พ.ศ. 2561 สถานศึกษามีหน้าที่จัดทำรายงานการประเมินตนเอง (SAR) ส่งให้ \"หน่วยงานต้นสังกัด\" (เช่น สำนักงานเขตพื้นที่การศึกษา) เป็นประจำทุกปี เพื่อให้ต้นสังกัดนำไปใช้และส่งต่อให้ สมศ. ต่อไป สถานศึกษาไม่ได้ส่งรายงาน SAR ตรงให้ สมศ. เพื่อขอรับรองคุณภาพด้วยตนเอง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q007",
    code: "EQA-08-000007",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 7,

    question: "หัวใจของการประเมินคุณภาพภายใน คือข้อใด (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "หลักประกันให้ผู้บริหารสถานศึกษามั่นใจในคุณภาพ" },
      { id: CHOICE_IDS.B, text: "การนำผลประเมินไปใช้อ้างอิงในปีต่อไป" },
      { id: CHOICE_IDS.C, text: "การพัฒนาคุณภาพให้เกิดขึ้นกับผู้สถานศึกษา" },
      { id: CHOICE_IDS.D, text: "การพัฒนาคุณภาพให้เกิดขึ้นกับผู้เรียน" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "จุดมุ่งหมายสูงสุดและหัวใจของการประกันคุณภาพการศึกษาภายใน คือ การยกระดับและส่งเสริมให้เกิดคุณภาพการพัฒนาที่ตัว \"ผู้เรียน\" เป็นสำคัญ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q008",
    code: "EQA-08-000008",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 8,

    question: "ข้อใดเป็นขั้นตอนแรกเกี่ยวกับการดำเนินการประกันคุณภาพทางการศึกษา (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "กำหนดมาตรฐานสถานศึกษา" },
      { id: CHOICE_IDS.B, text: "จัดระบบบริหารและสารสนเทศ" },
      { id: CHOICE_IDS.C, text: "จัดทำแผนพัฒนาการจัดการศึกษา" },
      { id: CHOICE_IDS.D, text: "แต่งตั้งคณะกรรมการติดตาม ตรวจสอบ" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "การจัดทำระบบประกันคุณภาพภายในของสถานศึกษา ตามแนวปฏิบัติประกอบด้วยขั้นตอนหลัก โดยเริ่มจากการ \"กำหนดมาตรฐานการศึกษาของสถานศึกษา\" ให้สอดคล้องกับมาตรฐานการศึกษาที่กระทรวงประกาศใช้ เพื่อเป็นเป้าหมายและเกณฑ์วัดคุณภาพในการดำเนินงานต่อไป",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q009",
    code: "EQA-08-000009",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 9,

    question: "ใครเห็นชอบมาตรฐานการศึกษาของสถานศึกษาขั้นพื้นฐาน (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "สภาการศึกษา" },
      { id: CHOICE_IDS.B, text: "คณะกรรมการเขตพื้นที่การศึกษา" },
      { id: CHOICE_IDS.C, text: "ผู้อำนวยการโรงเรียน" },
      { id: CHOICE_IDS.D, text: "คณะกรรมการสถานศึกษาขั้นพื้นฐาน" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "การกำหนดมาตรฐานการศึกษาและการประกาศใช้มาตรฐานของสถานศึกษานั้น จะต้องได้รับความเห็นชอบจาก คณะกรรมการสถานศึกษาขั้นพื้นฐาน ก่อนประกาศใช้และแจ้งให้ผู้เกี่ยวข้องทราบ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q010",
    code: "EQA-08-000010",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 10,

    question: "รายงานการประเมินตนเองของสถานศึกษา (SAR) มีชื่อเต็มว่าอย่างไร (สอศ.รอบทั่วไป 2564/2565 ม.ธรรมศาสตร์, ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "Self - Appraisal Report" },
      { id: CHOICE_IDS.B, text: "Self - Action Report" },
      { id: CHOICE_IDS.C, text: "Self - Assessment Report" },
      { id: CHOICE_IDS.D, text: "SELF - ASSIST REPORT" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "SAR ย่อมาจาก Self-Assessment Report หมายถึง รายงานการประเมินตนเองของสถานศึกษาที่จัดทำขึ้นตามระบบการประกันคุณภาพภายในเป็นประจำทุกปีการศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q011",
    code: "EQA-08-000011",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 11,

    question: "การประกันคุณภาพภายใน และรายงานประเมินตนเอง (SAR) ต้องจัดทำตามข้อใด (สพฐ. รอบทั่วไป ปี 2564/2565 ม.สวนดุสิต)",

    choices: [
      { id: CHOICE_IDS.A, text: "จัดทำทุก 3 เดือน" },
      { id: CHOICE_IDS.B, text: "จัดทำทุกภาคเรียน" },
      { id: CHOICE_IDS.C, text: "จัดทำทุก 1 ปีการศึกษา" },
      { id: CHOICE_IDS.D, text: "จัดทำทุก 1 ปีงบประมาณ" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "กฎกระทรวงการประกันคุณภาพการศึกษา พ.ศ. 2561 กำหนดให้สถานศึกษาจัดทำรายงานการประเมินตนเอง (SAR) เป็นประจำ ทุกปีการศึกษา และจัดส่งให้หน่วยงานต้นสังกัดเป็นประจำทุกปี",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q012",
    code: "EQA-08-000012",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 12,

    question: "ใครดำเนินการประกันคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2566)",

    choices: [
      { id: CHOICE_IDS.A, text: "สมศ." },
      { id: CHOICE_IDS.B, text: "บุคลากรภายในสถานศึกษา" },
      { id: CHOICE_IDS.C, text: "คุรุสภา" },
      { id: CHOICE_IDS.D, text: "กระทรวงศึกษาธิการ" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "การประกันคุณภาพภายใน ดำเนินการโดย บุคลากรภายในสถานศึกษา (หรือร่วมกับหน่วยงานต้นสังกัด) โดยให้จัดทำเป็นระบบงานตามปกติของสถานศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q013",
    code: "EQA-08-000013",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 13,

    question: "ข้อใดไม่ใช่มาตรฐานของงานประกันคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2566)",

    choices: [
      { id: CHOICE_IDS.A, text: "คุณภาพผู้เรียน" },
      { id: CHOICE_IDS.B, text: "ประสิทธิภาพของครู" },
      { id: CHOICE_IDS.C, text: "คุณลักษณะที่พึงประสงค์ของผู้เรียน" },
      { id: CHOICE_IDS.D, text: "กระบวนการบริหารและการจัดการ" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "ตามประกาศกระทรวงศึกษาธิการ เรื่อง มาตรฐานการศึกษาขั้นพื้นฐาน พ.ศ. 2561 กำหนดมาตรฐานไว้ 3 มาตรฐาน ได้แก่ มาตรฐานที่ 1 คุณภาพของผู้เรียน (แบ่งเป็น ผลสัมฤทธิ์ทางวิชาการ และ คุณลักษณะที่พึงประสงค์) มาตรฐานที่ 2 กระบวนการบริหารและการจัดการ มาตรฐานที่ 3 กระบวนการจัดการเรียนการสอนที่เน้นผู้เรียนเป็นสำคัญ ดังนั้น \"ประสิทธิภาพของครู\" จึงไม่ได้แยกออกมาเป็นชื่อมาตรฐานโดยตรง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q014",
    code: "EQA-08-000014",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 14,

    question: "ตัวชี้วัดการวิเคราะห์ SAR ใช้แนวคิดหลักการจากวงจรคุณภาพใด",

    choices: [
      { id: CHOICE_IDS.A, text: "PDCA" },
      { id: CHOICE_IDS.B, text: "IQA paper based" },
      { id: CHOICE_IDS.C, text: "IQA IT-based" },
      { id: CHOICE_IDS.D, text: "EQA IT-based" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "วงจรบริหารงานคุณภาพ PDCA (Plan-Do-Check-Act) หรือวงจรเดมมิ่ง เป็นแนวคิดหลักที่นำมาใช้ในการบริหารจัดระบบการประกันคุณภาพภายในและการวิเคราะห์ประเมินตนเอง (SAR) ของสถานศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q015",
    code: "EQA-08-000015",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 15,

    question: "ข้อใดไม่ใช่กระบวนการการประกันคุณภาพภายใน PDCA (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "การร่วมกันวางแผน" },
      { id: CHOICE_IDS.B, text: "การร่วมกันวิเคราะห์" },
      { id: CHOICE_IDS.C, text: "การร่วมกันตรวจสอบ" },
      { id: CHOICE_IDS.D, text: "การร่วมกันปรับปรุง" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "กระบวนการ PDCA ประกอบด้วย 4 ขั้นตอน: P (Plan) = การร่วมกันวางแผน D (Do) = การร่วมกันปฏิบัติ/ดำเนินงานตามแผน C (Check) = การร่วมกันตรวจสอบ/ประเมินผล A (Act) = การร่วมกันปรับปรุง/แก้ไข ดังนั้น \"การร่วมกันวิเคราะห์\" ไม่ใช่ชื่อขั้นตอนหลักใน PDCA",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q016",
    code: "EQA-08-000016",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 16,

    question: "ข้อใดเป็นขั้นตอนแรกของหลักการบริหารที่เป็นกระบวนการครบวงจร (PDCA) (ครูผู้ช่วย สพฐ. รอบทั่วไป 2568)",

    choices: [
      { id: CHOICE_IDS.A, text: "การร่วมกันปฏิบัติตามแผน (Doing)" },
      { id: CHOICE_IDS.B, text: "การร่วมกันตรวจสอบ (Checking)" },
      { id: CHOICE_IDS.C, text: "การร่วมกันปรับปรุง (Action)" },
      { id: CHOICE_IDS.D, text: "การร่วมกันวางแผน (Planning)" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "ขั้นตอนแรกของ PDCA คือตัว P - Planning หมายถึง การวางแผนงานและการตั้งเป้าหมาย",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q017",
    code: "EQA-08-000017",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 17,

    question: "แนวคิดหลักวงจรคุณภาพ PDCA ขั้นตอน “การร่วมกันวางแผน” ตรงกับข้อใด (ครูผู้ช่วยสพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "Planning" },
      { id: CHOICE_IDS.B, text: "Doing" },
      { id: CHOICE_IDS.C, text: "Checking" },
      { id: CHOICE_IDS.D, text: "Action" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "\"การร่วมกันวางแผน\" ภาษาอังกฤษตรงกับคำว่า Planning (P)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q018",
    code: "EQA-08-000018",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 18,

    question: "แนวคิดหลักวงจรคุณภาพ PDCA ขั้นตอน “การร่วมกันตรวจสอบ กำกับติดตาม” ตรงกับข้อใด (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "Planning" },
      { id: CHOICE_IDS.B, text: "Doing" },
      { id: CHOICE_IDS.C, text: "Checking" },
      { id: CHOICE_IDS.D, text: "Action" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "\"การตรวจสอบ กำกับติดตาม และประเมินผล\" ภาษาอังกฤษตรงกับคำว่า Checking (C)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q019",
    code: "EQA-08-000019",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 19,

    question: "ข้อใดกล่าวไม่ถูกต้องตามหลักการบริหารที่เป็นกระบวนการครบวงจร (PDCA) (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "P – Plan วางแผน" },
      { id: CHOICE_IDS.B, text: "D – Director การกำกับ" },
      { id: CHOICE_IDS.C, text: "C – Check ตรวจสอบ" },
      { id: CHOICE_IDS.D, text: "A – Act ปรับปรุงแก้ไข" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "ตัว D ในวงจร PDCA ย่อมาจาก Do / Doing ซึ่งหมายถึง การปฏิบัติตามแผน ไม่ใช่ Director (ผู้อำนวยการ/การกำกับ)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q020",
    code: "EQA-08-000020",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 20,

    question: "หน่วยงานตามข้อใดไม่เกี่ยวข้องกับการประกันคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพทางการศึกษา" },
      { id: CHOICE_IDS.B, text: "วิทยาลัย" },
      { id: CHOICE_IDS.C, text: "ศูนย์พัฒนาเด็กเล็ก" },
      { id: CHOICE_IDS.D, text: "โรงเรียน" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพทางการศึกษา (สมศ.) มีหน้าที่หลักเกี่ยวกับการประเมิน \"คุณภาพภายนอก\" ส่วนวิทยาลัย ศูนย์พัฒนาเด็กเล็ก และโรงเรียน เป็นสถานศึกษาที่มีหน้าที่ทำประกันคุณภาพภายใน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q021",
    code: "EQA-08-000021",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 21,

    question: "การประเมินคุณภาพภายใน มีเป้าหมายสูงสุดเพื่อใคร (สพฐ. รอบทั่วไป ปี 2563, สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "ครู" },
      { id: CHOICE_IDS.B, text: "ผู้เรียน" },
      { id: CHOICE_IDS.C, text: "โรงเรียน" },
      { id: CHOICE_IDS.D, text: "ผู้ปกครอง" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "เป้าหมายสูงสุดของการจัดการศึกษาและการประเมินคุณภาพการศึกษาทุกระดับ คือ ผู้เรียน เพื่อให้ผู้เรียนมีความรู้ ทักษะ คุณลักษณะอันพึงประสงค์ และเติบโตอย่างมีคุณภาพ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q022",
    code: "EQA-08-000022",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 22,

    question: "ใครควบคุมเกี่ยวกับการประกันคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2566)",

    choices: [
      { id: CHOICE_IDS.A, text: "หน่วยงานต้นสังกัด" },
      { id: CHOICE_IDS.B, text: "สมศ." },
      { id: CHOICE_IDS.C, text: "คุรุสภา" },
      { id: CHOICE_IDS.D, text: "สำนักงานทดสอบการศึกษา" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "ตามกฎกระทรวงฯ พ.ศ. 2561 กำหนดให้ หน่วยงานต้นสังกัด มีหน้าที่ให้คำแนะนำ ช่วยเหลือ ติดตาม ตรวจสอบ และกำกับดูแล การจัดระบบประกันคุณภาพภายในของสถานศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q023",
    code: "EQA-08-000023",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 23,

    question: "ข้อใดไม่เกี่ยวข้องกับการประกันคุณภาพภายใน (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2561)",

    choices: [
      { id: CHOICE_IDS.A, text: "คุณภาพผู้เรียน" },
      { id: CHOICE_IDS.B, text: "ประเมินตนเอง (SAR)" },
      { id: CHOICE_IDS.C, text: "ครูผู้สอน" },
      { id: CHOICE_IDS.D, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา (สมศ.)" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "สมศ. เป็นองค์การมหาชนที่ทำหน้าที่ประเมินคุณภาพ \"ภายนอก\" จึงไม่เกี่ยวกับระบบกระบวนการประกันคุณภาพภายในของสถานศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q024",
    code: "EQA-08-000024",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 24,

    question: "ข้อใดเป็นปัจจัยที่ส่งผลต่อความสำเร็จของการประกันคุณภาพภายใน (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "การสร้างความเข้าใจและความร่วมมือของบุคลากรในสถานศึกษา" },
      { id: CHOICE_IDS.B, text: "การประเมินผลตรวจสอบคุณภาพและมาตรฐานการศึกษา" },
      { id: CHOICE_IDS.C, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา (สมศ.)" },
      { id: CHOICE_IDS.D, text: "การติดตามตรวจสอบคุณภาพและมาตรฐานการศึกษา" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "หัวใจและปัจจัยปฐมภูมิที่จะทำให้การประกันคุณภาพภายในประสบผลสำเร็จอย่างเป็นระบบและยั่งยืน คือ บุคลากรภายในสถานศึกษาทุกคนมีความรู้ ความเข้าใจ ตระหนักในคุณค่า และให้ความร่วมมือในการทำงาน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q025",
    code: "EQA-08-000025",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 25,

    question: "“การพัฒนาการอ่าน การคิด การเขียน” เป็นการพัฒนาด้านใด (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "พัฒนามาตรฐานการประเมิน" },
      { id: CHOICE_IDS.B, text: "พัฒนาสถานศึกษา" },
      { id: CHOICE_IDS.C, text: "พัฒนาหลักสูตร" },
      { id: CHOICE_IDS.D, text: "พัฒนาคุณภาพผู้เรียน" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "การอ่าน การคิดวิเคราะห์ และการเขียน เป็นความสามารถทางปัญญาและผลสัมฤทธิ์ทางวิชาการ ซึ่งจัดอยู่ในมาตรฐานที่ 1 คุณภาพของผู้เรียน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q026",
    code: "EQA-08-000026",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 26,

    question: "หน่วยงานใดมีบทสำคัญในการผลักดันการประกันคุณภาพการศึกษาเพื่อให้การประกันคุณภาพภายในเป็นส่วนหนึ่งของกระบวนการบริหารการศึกษาที่ต้องดำเนินการอย่างต่อเนื่อง (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพทางการศึกษา" },
      { id: CHOICE_IDS.B, text: "อ.ก.ค.ศ. เขตพื้นที่การศึกษา" },
      { id: CHOICE_IDS.C, text: "สำนักงานเขตพื้นที่การศึกษา" },
      { id: CHOICE_IDS.D, text: "คณะกรรมการศึกษาธิการจังหวัด" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "สำนักงานเขตพื้นที่การศึกษา เป็นหน่วยงานต้นสังกัดสายตรงที่มีหน้าที่ส่งเสริม ช่วยเหลือ นิเทศ กำกับติดตามการประกันคุณภาพภายในของสถานศึกษาในสังกัดอย่างใกล้ชิดและต่อเนื่อง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q027",
    code: "EQA-08-000027",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 27,

    question: "สำนักงานเขตพื้นที่การศึกษามีบทบาทอย่างไรในการประกันคุณภาพ (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "วิเคราะห์การจัดตั้งงบประมาณเงินอุดหนุนทั่วไปเกี่ยวกับระบบการประกันคุณภาพภายใน" },
      { id: CHOICE_IDS.B, text: "พัฒนาสาระของหลักสูตรการศึกษาให้สอดคล้องกับหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน" },
      { id: CHOICE_IDS.C, text: "ขับเคลื่อนการพัฒนาระบบการประกันคุณภาพภายในสถานศึกษาให้เป็นระบบ" },
      { id: CHOICE_IDS.D, text: "ขับเคลื่อนระบบการประกันคุณภาพให้สอดคล้องกับความต้องการของเขตพื้นที่การศึกษา" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "บทบาทหลักของสำนักงานเขตพื้นที่การศึกษาตามกฎกระทรวง พ.ศ. 2561 คือการส่งเสริม และขับเคลื่อนการพัฒนาระบบการประกันคุณภาพภายในของสถานศึกษาในกำกับดูแลให้เข้มแข็งและเป็นระบบ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q028",
    code: "EQA-08-000028",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 28,

    question: "ข้อใดเป็นการประเมินมาตรฐานการศึกษาเพื่อประกันคุณภาพภายในมาตรฐานที่ 1 คุณภาพของผู้เรียน (ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "ผลสัมฤทธิ์ทางการเรียน และคุณภาพของผู้เรียน" },
      { id: CHOICE_IDS.B, text: "ผลสัมฤทธิ์ทางวิชาการของผู้เรียน และคุณลักษณะที่พึงประสงค์ของผู้เรียน" },
      { id: CHOICE_IDS.C, text: "คุณภาพทางวิชาการของผู้เรียน และคุณลักษณะที่พึงประสงค์ของผู้เรียน" },
      { id: CHOICE_IDS.D, text: "ผลสัมฤทธิ์ทางการเรียนรู้ และคุณภาพของผู้เรียน" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "ตามประกาศกระทรวงศึกษาธิการ เรื่อง มาตรฐานการศึกษาขั้นพื้นฐาน พ.ศ. 2561 มาตรฐานที่ 1 คุณภาพของผู้เรียน ประกอบด้วย 2 ประเด็นพิจารณาหลัก ได้แก่: 1.1 ผลสัมฤทธิ์ทางวิชาการของผู้เรียน 1.2 คุณลักษณะที่พึงประสงค์ของผู้เรียน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q029",
    code: "EQA-08-000029",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 29,

    question: "ข้อใดสะท้อนบทบาทของครูในการประกันคุณภาพการศึกษาได้เหมาะสมที่สุด (ครูผู้ช่วย สพฐ. รอบทั่วไป 2568)",

    choices: [
      { id: CHOICE_IDS.A, text: "ครูจัดทำข้อมูลและรายงานผล และมีส่วนร่วมในการติดตามคุณภาพของสถานศึกษาอย่างต่อเนื่อง" },
      { id: CHOICE_IDS.B, text: "ครูจัดการเรียนการสอนตามแผน และมีส่วนร่วมในการจัดกิจกรรมของสถานศึกษาอย่างต่อเนื่อง" },
      { id: CHOICE_IDS.C, text: "ครูเข้าร่วมการประชุมและการอบรม และมีส่วนร่วมในการพัฒนาระบบของสถานศึกษาอย่างต่อเนื่อง" },
      { id: CHOICE_IDS.D, text: "ครูปฏิบัติตามระเบียบและแนวปฏิบัติ และมีส่วนร่วมในการดำเนินงานของสถานศึกษาอย่างต่อเนื่อง" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "บทบาทโดยตรงของครูในระบบประกันคุณภาพ คือ การเก็บรวบรวมข้อมูล รวบรวมหลักฐานร่องรอย จัดทำรายงานผลการประเมินตนเอง (SAR) ในระดับชั้นเรียน/กลุ่มสาระ และมีส่วนร่วมในการติดตามประเมินผลคุณภาพงานประกันคุณภาพอย่างต่อเนื่อง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q030",
    code: "EQA-08-000030",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 30,

    question: "ข้อใดสะท้อนการพัฒนาผลสัมฤทธิ์ด้านการประเมินผลในการประกันคุณภาพการศึกษาได้เหมาะสมที่สุด (ครูผู้ช่วย สพฐ. รอบทั่วไป 2568)",

    choices: [
      { id: CHOICE_IDS.A, text: "ครูใช้การตรวจเอกสารและการรายงานผล เพื่อสะท้อนผลการเรียนรู้ของผู้เรียนอย่างเป็นระบบ" },
      { id: CHOICE_IDS.B, text: "ครูใช้การสังเกตและการสัมภาษณ์ เพื่อสะท้อนผลการเรียนรู้ของผู้เรียนอย่างเป็นระบบ" },
      { id: CHOICE_IDS.C, text: "ครูใช้แบบทดสอบและการประเมินชิ้นงาน เพื่อสะท้อนผลการเรียนรู้ของผู้เรียนอย่างเป็นระบบ" },
      { id: CHOICE_IDS.D, text: "ครูใช้การเข้าร่วมกิจกรรมและการบันทึกข้อมูล เพื่อสะท้อนผลการเรียนรู้ของผู้เรียนอย่างเป็นระบบ" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "การวัดและประเมินผลสัมฤทธิ์ทางการเรียนของผู้เรียนที่เป็นรูปธรรม ตรงเป้าหมายมาตรฐานมากที่สุด คือการใช้วิธีการประเมินตามสภาพจริงผ่าน แบบทดสอบ และการประเมินชิ้นงาน/ภาระงาน ของผู้เรียน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q031",
    code: "EQA-08-000031",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 31,

    question: "“การประกันคุณภาพภายนอก” หมายความว่าอย่างไร",

    choices: [
      { id: CHOICE_IDS.A, text: "การประเมินผลและการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาจากภายนอก โดยสำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา (สมศ.)" },
      { id: CHOICE_IDS.B, text: "การประเมินผล และการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาจากภายใน โดยบุคลากรของสถานศึกษานั้นเองหรือโดยหน่วยงานต้นสังกัด" },
      { id: CHOICE_IDS.C, text: "ข้อกำหนดเกี่ยวกับคุณลักษณะ คุณภาพที่พึงประสงค์และมาตรฐานที่ต้องการให้เกิดขึ้นในสถานศึกษาทุกแห่ง" },
      { id: CHOICE_IDS.D, text: "การประเมินผลและการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถาบันการศึกษาจากภายนอก โดยหน่วยงานต้นสังกัด" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "ตาม พ.ร.บ. การศึกษาแห่งชาติ มาตรา 49 การประกันคุณภาพภายนอก คือ การประเมินผลและการติดตามตรวจสอบคุณภาพและมาตรฐานการศึกษาของสถานศึกษาจากภายนอก โดย สมศ. หรือบุคคล/หน่วยงานภายนอกที่ สมศ. รับรอง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q032",
    code: "EQA-08-000032",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 32,

    question: "“การประกันคุณภาพภายนอก” มีความหมายสอดคล้องกับข้อใด (ครูผู้ช่วย สพฐ. รอบทั่วไป 2568)",

    choices: [
      { id: CHOICE_IDS.A, text: "กระบวนการประกันคุณภาพตามแนวคิดของหลักการบริหารที่เป็นกระบวนการครบวงจร(PDCA) จากวงจรเดมมิ่ง" },
      { id: CHOICE_IDS.B, text: "ระบบการประเมินผล และการติดตามตรวจสอบคุณภาพ และมาตรฐานการศึกษาของสถานศึกษาโดยบุคลากรของสถานศึกษานั้นเอง" },
      { id: CHOICE_IDS.C, text: "การประเมินผลและการติดตามตรวจสอบคุณภาพและมาตรฐานการศึกษาของสถาบันการศึกษาจากภายนอก โดยสำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา" },
      { id: CHOICE_IDS.D, text: "สถานศึกษาต้องพัฒนาระบบการประกันคุณภาพให้เป็นส่วนหนึ่งของกระบวนการบริหารและการปฏิบัติงาน" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "นิยามตรงตาม พ.ร.บ. การศึกษาแห่งชาติ ซึ่งระบุชัดเจนว่าดำเนินงานโดย \"สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา\" (สมศ.)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q033",
    code: "EQA-08-000033",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 33,

    question: "การประกันคุณภาพภายนอกโดยใคร (สพฐ. รอบทั่วไป ปี 2566, สอศ.รอบทั่วไป 2564/2565 ม.ธรรมศาสตร์)",

    choices: [
      { id: CHOICE_IDS.A, text: "ครูผู้สอน" },
      { id: CHOICE_IDS.B, text: "สพฐ." },
      { id: CHOICE_IDS.C, text: "สมศ." },
      { id: CHOICE_IDS.D, text: "คุรุสภา" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "สมศ. (สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา) เป็นหน่วยงานหลักตามกฎหมายที่มีหน้าที่ประเมินคุณภาพภายนอก",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q034",
    code: "EQA-08-000034",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 34,

    question: "การประเมินคุณภาพภายนอกของสถานศึกษาทุกแห่ง ให้ดำเนินการตามระยะเวลาตามข้อใด (ครูผู้ช่วย กรณีพิเศษ ปี 2562,ครูผู้ช่วย สถาบันการพลศึกษา ปี 2560,ครูผู้ช่วย สพฐ. รอบทั่วไป ปี 2567)",

    choices: [
      { id: CHOICE_IDS.A, text: "อย่างน้อย 1 ครั้ง ในทุก 3 ปีนับตั้งแต่การประเมินครั้งสุดท้าย" },
      { id: CHOICE_IDS.B, text: "อย่างน้อย 1 ครั้ง ในทุก 5 ปีนับตั้งแต่การประเมินครั้งสุดท้าย" },
      { id: CHOICE_IDS.C, text: "อย่างน้อย 1 ครั้ง ในทุก 3 ปีนับตั้งแต่การประเมินครั้งแรก" },
      { id: CHOICE_IDS.D, text: "อย่างน้อย 1 ครั้ง ในทุก 5 ปีนับตั้งแต่การประเมินครั้งแรก" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "ตาม พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 มาตรา 49 วรรคหนึ่ง บัญญัติให้มีการประเมินคุณภาพภายนอกของสถานศึกษาทุกแห่ง \"อย่างน้อยหนึ่งครั้งในทุกห้าปี นับตั้งแต่การประเมินครั้งสุดท้าย\"",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q035",
    code: "EQA-08-000035",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 35,

    question: "การประกันคุณภาพการศึกษาภายนอกแนวทางใหม่ พิจารณาจากอะไร (สพฐ. รอบทั่วไป ปี 2566)",

    choices: [
      { id: CHOICE_IDS.A, text: "ผลงานของสถานศึกษาที่เป็นรางวัลระดับประเทศ" },
      { id: CHOICE_IDS.B, text: "ผลงานที่สะท้อนถึงระบบการประกันคุณภาพการศึกษา" },
      { id: CHOICE_IDS.C, text: "พิจารณาผลการดำเนินงานตามระบบการประกันคุณภาพภายใน" },
      { id: CHOICE_IDS.D, text: "พิจารณาจากรายงานการประเมินความพร้อมของสถานศึกษา" },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text: "แนวทางการประเมินคุณภาพภายนอกยุคใหม่ (ตั้งแต่กฎกระทรวง 2561 และรอบการประเมินของ สมศ. ยุคใหม่) จะเน้นการประเมินตามบริบทจริง โดยพิจารณาจาก ผลการดำเนินงานตามระบบการประกันคุณภาพภายในของสถานศึกษา (ประเมินบนพื้นฐานรายงาน SAR) เป็นหลัก เพื่อลดภาระการจัดทำเอกสารเพิ่มเติมของสถานศึกษา",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q036",
    code: "EQA-08-000036",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 36,

    question: "ข้อใดกล่าวถึงการประเมินคุณภาพภายนอกได้ถูกต้อง (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "ใช้หลักการประเมินที่สอดคล้องกับระบบการประกันคุณภาพภายใน" },
      { id: CHOICE_IDS.B, text: "การติดตามตรวจสอบคุณภาพการศึกษาจากหน่วยงานต้นสังกัดอย่างน้อย 1 ครั้ง ภายใน 3 ปี" },
      { id: CHOICE_IDS.C, text: "ระบบประกันคุณภาพโดยใช้แนวคิดหลักการจากวงจรคุณภาพ (PDCA)" },
      { id: CHOICE_IDS.D, text: "สถานศึกษาต้องมีการจัดทำรายงานประเมินตนเองเป็นประจำทุกปี" },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text: "การประเมินคุณภาพภายนอกในปัจจุบันยึดหลักการสะท้อนผลและประเมินเพื่อส่งเสริม โดยพิจารณาจากเกณฑ์และบริบทที่สอดคล้องเชื่อมโยงกับระบบการประกันคุณภาพภายในของสถานศึกษานั้นๆ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q037",
    code: "EQA-08-000037",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 37,

    question: "ผู้ใดมีหน้าที่นำผลการประเมินคุณภาพไปใช้มากที่สุด (สพฐ. รอบทั่วไป ปี 2564/2565)",

    choices: [
      { id: CHOICE_IDS.A, text: "สำนักงานเขตพื้นที่การศึกษา" },
      { id: CHOICE_IDS.B, text: "สถานศึกษา" },
      { id: CHOICE_IDS.C, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา (สมศ.)" },
      { id: CHOICE_IDS.D, text: "สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "เมื่อได้รับการประเมินทั้งภายในและภายนอกแล้ว \"สถานศึกษา\" คือผู้รับผลประเมินโดยตรงที่จะต้องนำข้อเสนอแนะ ผลการประเมิน จุดควรพัฒนา ไปวางแผนและดำเนินการปรับปรุงพัฒนาการจัดการเรียนการสอนและบริหารจัดการโรงเรียนต่อไป",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q038",
    code: "EQA-08-000038",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 38,

    question: "“การประเมินคุณภาพภายนอก” ข้อใดกล่าวถูกต้อง (สพฐ. รอบทั่วไป 2560)",

    choices: [
      { id: CHOICE_IDS.A, text: "การประเมินผล การติดตามตรวจสอบคุณภาพจากสำนักงานพื้นที่การศึกษา" },
      { id: CHOICE_IDS.B, text: "รายงานการประเมินตนเอง (SAR) Self-Assessment Report" },
      { id: CHOICE_IDS.C, text: "หน่วยงานต้นสังกัดตรวจสอบทบทวน อย่างน้อย 3 ปี 1 ครั้ง" },
      { id: CHOICE_IDS.D, text: "สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "ตัวเลือก ง. สอดคล้องที่สุด เนื่องจาก สมศ. เป็นหน่วยงานที่รับผิดชอบการประเมินคุณภาพภายนอกโดยตรง (ข้อ ก, ข, ค เกี่ยวข้องกับการประกันคุณภาพภายในและการกำกับของต้นสังกัด)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q039",
    code: "EQA-08-000039",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 39,

    question: "การประเมินคุณภาพภายใน มีเป้าหมายสูงสุดเพื่ออะไร (สพฐ. 63)",

    choices: [
      { id: CHOICE_IDS.A, text: "เพื่อพัฒนาสถานศึกษา" },
      { id: CHOICE_IDS.B, text: "เพื่อพัฒนาผู้เรียน" },
      { id: CHOICE_IDS.C, text: "เพื่อกำหนดเป้าหมาย วิสัยทัศน์ และพันธกิจ ที่สถานศึกษากำหนดชัดเจน" },
      { id: CHOICE_IDS.D, text: "เพื่อพัฒนาครูผู้สอนให้บริหารจัดการชั้นเรียนได้มีประสิทธิภาพ" },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text: "เป้าหมายสูงสุดของการประเมินคุณภาพภายในและการประกันคุณภาพการศึกษาทั้งหมด คือการพัฒนาคุณภาพและประโยชน์สูงสุดที่จะเกิดกับ \"ผู้เรียน\"",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q040",
    code: "EQA-08-000040",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 40,

    question: "การประกันคุณภาพภายในสถานศึกษาไม่สอดคล้องกับข้อใดต่อไปนี้ (ผอ. 68)",

    choices: [
      { id: CHOICE_IDS.A, text: "การประเมินผล การติดตามตรวจสอบคุณภาพจากสำนักงานเขตพื้นที่การศึกษา" },
      { id: CHOICE_IDS.B, text: "รายงานการประเมินตนเอง (SAR) Self-Assessment Report" },
      { id: CHOICE_IDS.C, text: "หน่วยงานต้นสังกัดตรวจสอบทบทวน อย่างน้อย 3 ปี 1 ครั้ง" },
      { id: CHOICE_IDS.D, text: "สถานศึกษาดำเนินการอย่างต่อเนื่อง และจัดทำรายงานการประเมินตนเองเสนอต่อสมศ." },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "ตามกฎกระทรวง พ.ศ. 2561 สถานศึกษาจะต้องจัดทำรายงานการประเมินตนเองเสนอต่อ \"หน่วยงานต้นสังกัด\" ไม่ใช่เสนอต่อ \"สมศ.\" โดยตรง (หน่วยงานต้นสังกัดจะเป็นผู้ส่งต่อให้ สมศ. เอง)",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q041",
    code: "EQA-08-000041",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 41,

    question: "รายงานการประเมินตนเองประจำปีของสถานศึกษา ต้องเสนอต่อผู้ใด (ผอ. 68)",

    choices: [
      { id: CHOICE_IDS.A, text: "หน่วยงานต้นสังกัด" },
      { id: CHOICE_IDS.B, text: "หน่วยงานที่เกี่ยวข้อง" },
      { id: CHOICE_IDS.C, text: "สาธารณชน" },
      { id: CHOICE_IDS.D, text: "ถูกทุกข้อ" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "ตามกฎกระทรวงการประกันคุณภาพการศึกษา พ.ศ. 2561 กำหนดว่า ให้สถานศึกษาจัดทำรายงานการประเมินตนเองเสนอต่อ คณะกรรมการสถานศึกษาขั้นพื้นฐาน, หน่วยงานต้นสังกัด, หน่วยงานที่เกี่ยวข้อง และ เผยแพร่ต่อสาธารณชน",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

  {
    id: "education-quality-assurance-q042",
    code: "EQA-08-000042",

    // TODO: เปลี่ยนเป็น SUBJECT_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Subject สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    subjectId: SUBJECT_IDS.EDUQUALITY01,

    // TODO: เปลี่ยนเป็น TOPIC_IDS.EDUCATION_QUALITY_ASSURANCE
    // หลังเพิ่ม Topic สำหรับชุดการประกันคุณภาพการศึกษาในระบบ
    topicId: TOPIC_IDS.ASSSURANCE01,

    order: 42,

    question: "ให้มีการประเมินคุณภาพภายนอกของสถานศึกษาทุกแห่งอย่างน้อยหนึ่งครั้งในทุกกี่ปีนับตั้งแต่การประเมินครั้งสุดท้าย (สพฐ. กรณีพิเศษ 62, สถาบันการพลศึกษา 60, ผอ. 68, อปท. 68)",

    choices: [
      { id: CHOICE_IDS.A, text: "ทุกปี" },
      { id: CHOICE_IDS.B, text: "ทุก 3 ปี นับจากการประเมินครั้งสุดท้าย" },
      { id: CHOICE_IDS.C, text: "ทุก 4 ปี นับจากการประเมินครั้งสุดท้าย" },
      { id: CHOICE_IDS.D, text: "ทุก 5 ปี นับจากการประเมินครั้งสุดท้าย" },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text: "ตาม พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 มาตรา 49 บัญญัติไว้อย่างชัดเจนว่า ให้มีการประเมินคุณภาพภายนอกของสถานศึกษาทุกแห่งอย่างน้อยหนึ่งครั้งใน ทุก 5 ปี นับตั้งแต่การประเมินครั้งสุดท้าย",
    },

    difficulty: DIFFICULTY.EASY,

    tags: ["การประกันคุณภาพการศึกษา", "temporary"],

    status: QUESTION_STATUS.PUBLISHED,
  },

];
