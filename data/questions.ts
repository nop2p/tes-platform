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
    id: "q001",
    code: "TES-000001",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 1,

    question:
      "นายปัญญา พ้นจากการเรียนชั้น ม.3 มาแล้ว 2 ปี แต่ไม่ได้เข้าศึกษาต่อที่ใด ต่อมาต้องการสมัครเข้าเรียนในหลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) ของวิทยาลัยเทคนิคแห่งหนึ่ง ตามระเบียบบริหารสถานศึกษา พ.ศ. 2569 นายปัญญาจะมีสถานภาพตามข้อใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สถานะเป็นนักเรียน เนื่องจากสำเร็จการศึกษาระดับมัธยมศึกษาตอนต้นและได้ขึ้นทะเบียนเรียน",
      },
      {
        id: CHOICE_IDS.B,
        text: "สถานะเป็นผู้เรียน เนื่องจากเป็นผู้เข้ารับการฝึกอบรมและศึกษาต่อในระดับอาชีวศึกษาทุกรูปแบบ",
      },
      {
        id: CHOICE_IDS.C,
        text: "สถานะเป็นผู้เข้าเรียน เนื่องจากพ้นเกณฑ์การศึกษาภาคบังคับแต่ยังไม่ได้สำเร็จการศึกษาในระดับ ปวช.",
      },
      {
        id: CHOICE_IDS.D,
        text: "สถานะคณาจารย์ เนื่องจากเข้ารับการศึกษาในสถาบันอาชีวศึกษาที่จัดการศึกษาในระดับวิชาชีพ",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        'ตามข้อ 5 ของระเบียบฯ "นักเรียน" หมายความว่า ผู้ที่สำเร็จการศึกษาระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า และได้ขึ้นทะเบียนเป็นนักเรียนตามหลักสูตรประกาศนียบัตรวิชาชีพ ส่วน "ผู้เข้าเรียน" หมายถึงผู้ที่ยังไม่สำเร็จการศึกษาระดับมัธยมศึกษาตอนต้นหรือเทียบเท่า',
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "นิยาม",
      "นักเรียน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q002",
    code: "TES-000002",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 2,

    question:
      "หากวิทยาลัยการอาชีพแห่งหนึ่งต้องการยุบเลิกแผนกวิชาช่างทองโบราณ เนื่องจากไม่มีผู้สมัครเรียนและไม่สอดคล้องกับตลาดแรงงาน กระบวนการอนุมัติการยุบเลิกต้องดำเนินการอย่างไรจึงจะถูกต้องตามระเบียบบริหารสถานศึกษา พ.ศ. 2569",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "เป็นอำนาจตัดสินใจของผู้อำนวยการสถานศึกษาแต่เพียงผู้เดียว โดยอนุมัติผ่านความเห็นชอบของ อกศ.",
      },
      {
        id: CHOICE_IDS.B,
        text: "เป็นอำนาจของผู้อำนวยการสถานศึกษา โดยอาศัยคำแนะนำจากคณะกรรมการสถานศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "ต้องได้รับความเห็นชอบจากสภาสถาบันการอาชีวศึกษาก่อนเสนอเลขาธิการ กอศ. ลงนามอนุมัติ",
      },
      {
        id: CHOICE_IDS.D,
        text: "ต้องจัดทำประชาพิจารณ์ร่วมกับชุมชน แล้วเสนอสำนักงานคณะกรรมการการอาชีวศึกษาอนุมัติ",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        'ตามข้อ 12 วรรคสาม ระบุว่า "การเปิดสอนแผนกวิชาชีพใหม่ และการยุบเลิกแผนกวิชาชีพ ให้อยู่ในดุลพินิจของผู้อำนวยการสถานศึกษา ตามคำแนะนำของคณะกรรมการสถานศึกษา"',
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "แผนกวิชา",
      "คณะกรรมการสถานศึกษา",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q003",
    code: "TES-000003",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 3,

    question:
      'ผู้อำนวยการวิทยาลัยอาชีวศึกษาแห่งหนึ่ง ต้องการแต่งตั้ง "พนักงานราชการ" ให้ดำรงตำแหน่ง "หัวหน้างานบริหารงานทั่วไป" สามารถดำเนินการได้หรือไม่ เพราะเหตุใด',

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่สามารถแต่งตั้งได้ เนื่องจากตำแหน่งหัวหน้างานต้องแต่งตั้งจากข้าราชการครูระดับชำนาญการขึ้นไป",
      },
      {
        id: CHOICE_IDS.B,
        text: "สามารถแต่งตั้งได้ เนื่องจากระเบียบเปิดช่องให้มอบหมายพนักงานราชการปฏิบัติหน้าที่หัวหน้างานได้",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่สามารถแต่งตั้งได้ เนื่องจากพนักงานราชการมีสัญญาจ้างเฉพาะตำแหน่งสอนเท่านั้น ไม่ใช่งานบริหาร",
      },
      {
        id: CHOICE_IDS.D,
        text: "สามารถแต่งตั้งได้ แต่ต้องได้รับความเห็นชอบจากคณะกรรมการสถานศึกษาเป็นลายลักษณ์อักษรก่อน",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 13 วรรคสอง ผู้อำนวยการสถานศึกษามีอำนาจมอบหมายข้าราชการครูและบุคลากรทางการศึกษา พนักงานราชการ ลูกจ้างประจำ ลูกจ้างชั่วคราว หรือจ้างเหมาบริการบุคคลภายนอก ให้ปฏิบัติหน้าที่หัวหน้างานได้",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "ผู้อำนวยการสถานศึกษา",
      "พนักงานราชการ",
      "หัวหน้างาน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q004",
    code: "TES-000004",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 4,

    question:
      "ข้อใดต่อไปนี้ระบุโครงสร้างการบริหารงาน 4 ฝ่ายของสถานศึกษาตามระเบียบบริหารสถานศึกษา พ.ศ. 2569 ได้ถูกต้องครบถ้วน",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ฝ่ายบริหารทรัพยากร, ฝ่ายแผนงานและความร่วมมือ, ฝ่ายพัฒนากิจการนักเรียนนักศึกษา, ฝ่ายวิชาการ",
      },
      {
        id: CHOICE_IDS.B,
        text: "ฝ่ายบริหารทรัพยากร, ฝ่ายยุทธศาสตร์และแผนงาน, ฝ่ายกิจการนักเรียน นักศึกษา, ฝ่ายวิชาการ",
      },
      {
        id: CHOICE_IDS.C,
        text: "ฝ่ายอำนวยการ, ฝ่ายยุทธศาสตร์และนวัตกรรม, ฝ่ายพัฒนากิจการนักเรียนนักศึกษา, ฝ่ายวิชาการ",
      },
      {
        id: CHOICE_IDS.D,
        text: "ฝ่ายบริหารงานทั่วไป, ฝ่ายยุทธศาสตร์และแผนงาน, ฝ่ายกิจการนักเรียน นักศึกษา, ฝ่ายพัฒนากิจการพิเศษ",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 8 ของระเบียบฯ กำหนดการแบ่งการบริหารงานของสถานศึกษาออกเป็น 4 ฝ่าย ได้แก่ (1) ฝ่ายบริหารทรัพยากร (2) ฝ่ายยุทธศาสตร์และแผนงาน (3) ฝ่ายกิจการนักเรียน นักศึกษา และ (4) ฝ่ายวิชาการ",
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "โครงสร้างองค์กร",
      "4 ฝ่าย",
      "การบริหารสถานศึกษา",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q005",
    code: "TES-000005",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 5,

    question:
      "การรับงานการค้า รับจัดทำ รับบริการ และรับจ้างผลิตเพื่อจำหน่ายของสถานศึกษาอาชีวศึกษา จัดเป็นหน้าที่ของสถานศึกษาตามข้อใดในระเบียบบริหารสถานศึกษา พ.ศ. 2569",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "การส่งเสริมการจัดการศึกษาเชิงธุรกิจที่สอดคล้องกับการจัดการเรียนการสอนของสถานศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "การจัดตั้งสหกรณ์เพื่อสร้างรายได้ระหว่างเรียนให้แก่ผู้เรียนตามหลักปรัชญาของเศรษฐกิจพอเพียง",
      },
      {
        id: CHOICE_IDS.C,
        text: "การหารายได้นวัตกรรมเชิงพาณิชย์เพื่อนำเงินเข้ากองทุนสวัสดิการของข้าราชการครูและบุคลากร",
      },
      {
        id: CHOICE_IDS.D,
        text: "การระดมทุนและทรัพย์สินจากสถานประกอบการเพื่อนำมาจัดซื้อครุภัณฑ์ประจำห้องปฏิบัติการ",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        'ตามข้อ 7 (8) ของระเบียบฯ กำหนดให้สถานศึกษามีหน้าที่ "ส่งเสริมการจัดการศึกษาเชิงธุรกิจ การรับงานการค้า การรับจัดทำ รับบริการ และรับจ้างผลิตเพื่อจำหน่าย ที่สอดคล้องกับการเรียนการสอน"',
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "หน้าที่สถานศึกษา",
      "การจัดการศึกษาเชิงธุรกิจ",
      "รับงานการค้า",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q006",
    code: "TES-000006",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 6,

    question:
      'ผู้อำนวยการสถานศึกษาสามารถแต่งตั้งครูให้ทำหน้าที่ "หัวหน้างานการเงิน" พร้อมกับ "หัวหน้างานพัสดุ" ในเวลาเดียวกันได้หรือไม่',

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ได้ เพราะเป็นอำนาจของผู้อำนวยการสถานศึกษาในการมอบหมายให้รับผิดชอบหลายหน้าที่ได้",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่ได้ เพราะงานการเงินและงานพัสดุมีการถ่วงดุลของระบบควบคุมภายในที่สุ่มเสี่ยงต่อการทุจริต",
      },
      {
        id: CHOICE_IDS.C,
        text: "ได้ แต่ต้องได้รับความเห็นชอบจากรองผู้อำนวยการฝ่ายบริหารทรัพยากรและเลขาธิการ กอศ. ก่อน",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่ได้ เพราะระเบียบห้ามข้าราชการครูคนเดียวกันควบตำแหน่งหัวหน้างานเกินหนึ่งงานในฝ่ายเดียวกัน",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        'ตามข้อ 13 วรรคสาม ระบุว่า "การแต่งตั้งหรือมอบหมายให้บุคคลทำหน้าที่หัวหน้างาน... อาจแต่งตั้งหรือมอบหมายให้บุคคลคนหนึ่งทำหน้าที่หัวหน้างานหรือหัวหน้าแผนกวิชามากกว่าหนึ่งหน้าที่ก็ได้"',
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "หัวหน้างาน",
      "การมอบหมายงาน",
      "ผู้อำนวยการสถานศึกษา",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q007",
    code: "TES-000007",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 7,

    question:
      'คำว่า "ผู้เข้าเรียน" ในระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) ตามนิยามของระเบียบบริหารสถานศึกษา พ.ศ. 2569 หมายถึงข้อใด',

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ผู้ที่จบ ม.6 แล้วขึ้นทะเบียนเป็นนักเรียน ปวส.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ผู้ที่จบ ปวช. แล้วขึ้นทะเบียนเข้าเรียน ปวส.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ผู้ที่ยังไม่สำเร็จการศึกษา ปวช. หรือ ม.6",
      },
      {
        id: CHOICE_IDS.D,
        text: "ผู้ที่จบการศึกษาระดับปริญญาตรีสมัครเรียน ปวส.",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        'ตามข้อ 5 ของระเบียบฯ "ผู้เข้าเรียน" ในระดับ ปวส. หมายความว่า ผู้ที่ยังไม่สำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพหรือเทียบเท่า หรือมัธยมศึกษาตอนปลายหรือเทียบเท่า และได้ขึ้นทะเบียนเป็นผู้เข้าเรียน',
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "นิยาม",
      "ผู้เข้าเรียน",
      "ปวส.",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q008",
    code: "TES-000008",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 8,

    question:
      'ข้อใด "ไม่ใช่" งานที่สังกัดอยู่ในฝ่ายบริหารทรัพยากร ตามระเบียบบริหารสถานศึกษา พ.ศ. 2569',

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานบริหารและพัฒนาทรัพยากรบุคคล",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานทะเบียน",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานอาคารสถานที่",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานศูนย์ดิจิทัลและสื่อสารองค์กร",
      },
    ],

    answer: CHOICE_IDS.D,

    explanation: {
      text:
        'ตามข้อ 10 (3) งานศูนย์ดิจิทัลและสื่อสารองค์กร สังกัดฝ่ายยุทธศาสตร์และแผนงาน ส่วนงานบริหารและพัฒนาทรัพยากรบุคคล งานทะเบียน และงานอาคารสถานที่ สังกัดฝ่ายบริหารทรัพยากรตามข้อ 9',
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "ฝ่ายบริหารทรัพยากร",
      "ศูนย์ดิจิทัลและสื่อสารองค์กร",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q009",
    code: "TES-000009",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 9,

    question:
      "ผู้รักษาการตามระเบียบสำนักงานคณะกรรมการการอาชีวศึกษา ว่าด้วยการบริหารสถานศึกษา พ.ศ. 2569 คือผู้ใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "รัฐมนตรีว่าการกระทรวงศึกษาธิการ",
      },
      {
        id: CHOICE_IDS.B,
        text: "ประธานกรรมการการอาชีวศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "เลขาธิการคณะกรรมการการอาชีวศึกษา",
      },
      {
        id: CHOICE_IDS.D,
        text: "ปลัดกระทรวงศึกษาธิการ",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        'ตามข้อ 6 ของระเบียบฯ กำหนดให้ "เลขาธิการคณะกรรมการการอาชีวศึกษา" เป็นผู้รักษาการให้เป็นไปตามระเบียบนี้',
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "ผู้รักษาการ",
      "เลขาธิการคณะกรรมการการอาชีวศึกษา",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q010",
    code: "TES-000010",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 10,

    question:
      "ระเบียบสำนักงานคณะกรรมการการอาชีวศึกษา ว่าด้วยการบริหารสถานศึกษา พ.ศ. 2569 เริ่มมีผลบังคับใช้เมื่อใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ตั้งแต่วันถัดจากวันประกาศในราชกิจจานุเบกษาเป็นต้นไป",
      },
      {
        id: CHOICE_IDS.B,
        text: "ตั้งแต่วันที่ 24 มีนาคม พ.ศ. 2569 เป็นต้นไป",
      },
      {
        id: CHOICE_IDS.C,
        text: "ตั้งแต่ปีการศึกษา 2569 เป็นต้นไป",
      },
      {
        id: CHOICE_IDS.D,
        text: "ตั้งแต่วันที่ 1 ตุลาคม พ.ศ. 2569 เป็นต้นไป",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        'ตามข้อ 2 ของระเบียบฯ ระบุว่า "ระเบียบนี้ให้ใช้บังคับตั้งแต่ปีการศึกษา 2569 เป็นต้นไป"',
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "วันมีผลบังคับใช้",
      "ข้อ 2",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q011",
    code: "TES-000011",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 11,

    question:
      "หากครูต้องการเสนอขอปรับปรุงแก้ไขทะเบียนประวัติ ขอเลื่อนวิทยฐานะ และขอออกหนังสือรับรองตนเอง ครูจะต้องติดต่อหน่วยงานใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานบริหารงานทั่วไป",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานบริหารและพัฒนาทรัพยากรบุคคล",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานทะเบียน",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานติดตามและประเมินผลการอาชีวศึกษา",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 15 (6) งานบริหารและพัฒนาทรัพยากรบุคคล มีหน้าที่ให้คำแนะนำและอำนวยความสะดวกเกี่ยวกับการขอแก้ไขทะเบียนประวัติ การขอมีวิทยฐานะ การออกหนังสือรับรอง และงานที่เกี่ยวข้อง",
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "ทรัพยากรบุคคล",
      "วิทยฐานะ",
      "ทะเบียนประวัติ",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q012",
    code: "TES-000012",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 12,

    question:
      "การเปิดเผยข้อมูลข่าวสารเกี่ยวกับงบประมาณรายจ่ายประจำปีตามพระราชกฤษฎีกาว่าด้วยหลักเกณฑ์และวิธีการบริหารกิจการบ้านเมืองที่ดี เป็นหน้าที่ของงานใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานการบัญชี",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานพัสดุ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 17 (6) งานการบัญชี มีหน้าที่เปิดเผยข้อมูลข่าวสารเกี่ยวกับงบประมาณรายจ่ายประจำปีตามพระราชกฤษฎีกาว่าด้วยหลักเกณฑ์และวิธีการบริหารกิจการบ้านเมืองที่ดี พ.ศ. 2546",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานการบัญชี",
      "งบประมาณ",
      "การเปิดเผยข้อมูลข่าวสาร",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q013",
    code: "TES-000013",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 13,

    question:
      "การรับสมัครนักเรียน การออกเอกสารแสดงผลการเรียน (GPA) และการดำเนินการขอพักการเรียน เป็นบทบาทภารกิจของงานใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานวัดผลและประเมินผล",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานครูที่ปรึกษาและการแนะแนว",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานทะเบียน",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานพัฒนาหลักสูตรและการจัดการเรียนรู้",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 20 งานทะเบียนมีหน้าที่รับสมัครนักเรียน (ข้อ 20 (2)) ดำเนินการขอพักการเรียน (ข้อ 20 (4)) และออกระเบียนแสดงผลการเรียน (ข้อ 20 (9))",
    },

    difficulty: DIFFICULTY.EASY,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานทะเบียน",
      "GPA",
      "พักการเรียน",
      "รับสมัครนักเรียน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q014",
    code: "TES-000014",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 14,

    question:
      "งานใดมีหน้าที่รับผิดชอบจัดทำรายงานการประเมินผลการควบคุมภายใน และการประเมินคุณธรรมและความโปร่งใส (ITA) ของสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานมาตรฐานและการประกันคุณภาพการศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานติดตามและประเมินผลการอาชีวศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานบริหารงานทั่วไป",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 26 (7) และ (8) งานติดตามและประเมินผลการอาชีวศึกษา มีหน้าที่จัดทำรายงานการประเมินผลการควบคุมภายใน และรายงานผลเพื่อการประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงานภาครัฐ (ITA)",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานติดตามและประเมินผลการอาชีวศึกษา",
      "ITA",
      "การควบคุมภายใน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q015",
    code: "TES-000015",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 15,

    question:
      "งานใดในฝ่ายยุทธศาสตร์และแผนงาน มีหน้าที่กำกับ ควบคุม บริหารจัดการความเสี่ยงด้านดิจิทัล และรักษาความปลอดภัยทางไซเบอร์",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานศูนย์ดิจิทัลและสื่อสารองค์กร",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานมาตรฐานและการประกันคุณภาพการศึกษา",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานส่งเสริมการวิจัย นวัตกรรม และสิ่งประดิษฐ์",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 23 (8) งานศูนย์ดิจิทัลและสื่อสารองค์กร มีหน้าที่กำกับ ควบคุม บริหารจัดการความเสี่ยงด้านดิจิทัล และรับมือภัยคุกคามทางไซเบอร์ เพื่อสนับสนุนการดำเนินงานของสถานศึกษา",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "ศูนย์ดิจิทัลและสื่อสารองค์กร",
      "Cyber Security",
      "Digital Risk",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q016",
    code: "TES-000016",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 16,

    question:
      "หากวิทยาลัยต้องการส่งเสริมกิจกรรมศูนย์ซ่อมสร้างเพื่อชุมชน (Fix Center) และโครงการอาชีวะร่วมด้วยช่วยประชาชน งานใดเป็นผู้รับผิดชอบหลัก",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานส่งเสริมธุรกิจและการเป็นผู้ประกอบการ",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานสวัสดิการนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานโครงการพิเศษและการบริการสังคม",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานกิจกรรมนักเรียน นักศึกษา",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 31 (5) งานโครงการพิเศษและการบริการสังคม มีหน้าที่ดำเนินการโครงการศูนย์ซ่อมสร้างเพื่อชุมชน (Fix Center) และโครงการอาชีวะร่วมด้วยช่วยประชาชน",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "โครงการพิเศษและการบริการสังคม",
      "Fix Center",
      "อาชีวะร่วมด้วยช่วยประชาชน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
  {
    id: "q017",
    code: "TES-000017",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 17,

    question:
      "งานใดรับผิดชอบดูแลสวัสดิการด้านการทำบัตรประกันสุขภาพ ประกันอุบัติเหตุ และการตรวจหาสารเสพติดของนักเรียน นักศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานปกครองและความปลอดภัยนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานสวัสดิการนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานครูที่ปรึกษาและการแนะแนว",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานกิจกรรมนักเรียน นักศึกษา",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 30 (1) งานสวัสดิการนักเรียน นักศึกษา มีหน้าที่จัดระบบและควบคุมดูแลสวัสดิการ การทำประกันสุขภาพ ประกันอุบัติเหตุ และการตรวจหาสารเสพติดของนักเรียน นักศึกษา",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานสวัสดิการนักเรียน นักศึกษา",
      "ประกันสุขภาพ",
      "ประกันอุบัติเหตุ",
      "สารเสพติด",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
  {
    id: "q018",
    code: "TES-000018",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 18,

    question:
      "การดำเนินการโอนผลการเรียน การเทียบโอนประสบการณ์ และการจัดประเมินมาตรฐานวิชาชีพ เป็นหน้าที่โดยตรงของงานใด",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานทะเบียน",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานพัฒนาหลักสูตรและการจัดการเรียนรู้",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานวัดผลและประเมินผล",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานอาชีวศึกษาระบบทวิภาคีและความร่วมมือ",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 34 (3) และ (6) งานวัดผลและประเมินผล มีหน้าที่เกี่ยวกับการเทียบโอนผลการเรียนรู้หรือประสบการณ์ และจัดให้ผู้เรียนได้รับการประเมินมาตรฐานวิชาชีพ",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานวัดผลและประเมินผล",
      "เทียบโอนผลการเรียน",
      "ประเมินมาตรฐานวิชาชีพ",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q019",
    code: "TES-000019",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 19,

    question:
      "งานใดมีหน้าที่รับผิดชอบดำเนินงานระบบดูแลช่วยเหลือผู้เรียน และการกู้ยืมเงินเพื่อการศึกษา (กยศ.)",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานสวัสดิการนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานครูที่ปรึกษาและการแนะแนว",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานปกครองและความปลอดภัยนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานกิจกรรมนักเรียน นักศึกษา",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 35 (2) และ (6) งานครูที่ปรึกษาและการแนะแนว มีหน้าที่ดำเนินงานระบบดูแลช่วยเหลือผู้เรียน และดำเนินงานเกี่ยวกับกองทุนเงินให้กู้ยืมเพื่อการศึกษา (กยศ.)",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานครูที่ปรึกษาและการแนะแนว",
      "ระบบดูแลช่วยเหลือผู้เรียน",
      "กยศ.",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q020",
    code: "TES-000020",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 20,

    question:
      "งานใดมีหน้าที่รับผิดชอบการดำเนินงานองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.) และกิจกรรมลูกเสือวิสามัญ",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานกิจกรรมนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานครูที่ปรึกษาและการแนะแนว",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานสวัสดิการนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานปกครองและความปลอดภัยนักเรียน นักศึกษา",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        "ตามข้อ 36 (1) และ (2) งานกิจกรรมนักเรียน นักศึกษา มีหน้าที่ดำเนินงานเกี่ยวกับองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.) และกิจกรรมลูกเสือวิสามัญของสถานศึกษา",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานกิจกรรมนักเรียน นักศึกษา",
      "อวท.",
      "ลูกเสือวิสามัญ",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q021",
    code: "TES-000021",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 21,

    question:
      "งานใดมีหน้าที่รับผิดชอบการกำหนดมาตรการป้องกันและรักษาความปลอดภัย รวมทั้งการป้องกันและแก้ไขปัญหายาเสพติดในสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานสวัสดิการนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานกิจกรรมนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานปกครองและความปลอดภัยนักเรียน นักศึกษา",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานครูที่ปรึกษาและการแนะแนว",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 37 (1) และ (2) งานปกครองและความปลอดภัยนักเรียน นักศึกษา มีหน้าที่กำหนดมาตรการด้านการปกครอง การรักษาความปลอดภัย และการป้องกันและแก้ไขปัญหายาเสพติดในสถานศึกษา",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานปกครองและความปลอดภัยนักเรียน นักศึกษา",
      "ความปลอดภัย",
      "ยาเสพติด",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q022",
    code: "TES-000022",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 22,

    question:
      "งานใดมีหน้าที่ประสานความร่วมมือกับสถานประกอบการในการจัดการอาชีวศึกษาระบบทวิภาคี และติดตามการฝึกอาชีพของผู้เรียน",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานพัฒนาหลักสูตรและการจัดการเรียนรู้",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานอาชีวศึกษาระบบทวิภาคีและความร่วมมือ",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานส่งเสริมธุรกิจและการเป็นผู้ประกอบการ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานโครงการพิเศษและการบริการสังคม",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 38 งานอาชีวศึกษาระบบทวิภาคีและความร่วมมือ มีหน้าที่ประสานความร่วมมือกับสถานประกอบการในการจัดการอาชีวศึกษาระบบทวิภาคี รวมทั้งกำกับ ติดตาม และประเมินผลการฝึกอาชีพของผู้เรียน",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "อาชีวศึกษาระบบทวิภาคี",
      "สถานประกอบการ",
      "ความร่วมมือ",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q023",
    code: "TES-000023",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 23,

    question:
      "งานใดมีหน้าที่ส่งเสริม สนับสนุน และพัฒนาการดำเนินธุรกิจของสถานศึกษา รวมทั้งส่งเสริมการเป็นผู้ประกอบการของผู้เรียน",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานโครงการพิเศษและการบริการสังคม",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานพัฒนาหลักสูตรและการจัดการเรียนรู้",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานส่งเสริมธุรกิจและการเป็นผู้ประกอบการ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานอาชีวศึกษาระบบทวิภาคีและความร่วมมือ",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 39 งานส่งเสริมธุรกิจและการเป็นผู้ประกอบการ มีหน้าที่ส่งเสริม สนับสนุน และพัฒนาการดำเนินธุรกิจของสถานศึกษา รวมทั้งส่งเสริมและพัฒนาการเป็นผู้ประกอบการของผู้เรียน",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานส่งเสริมธุรกิจและการเป็นผู้ประกอบการ",
      "ผู้ประกอบการ",
      "ธุรกิจสถานศึกษา",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q024",
    code: "TES-000024",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 24,

    question:
      "งานใดมีหน้าที่พัฒนาและให้บริการห้องสมุด ศูนย์การเรียนรู้ และสื่อการเรียนรู้ เพื่อสนับสนุนการจัดการเรียนการสอนของสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานวิทยบริการและห้องสมุด",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานศูนย์ดิจิทัลและสื่อสารองค์กร",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานพัฒนาหลักสูตรและการจัดการเรียนรู้",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานส่งเสริมการวิจัย นวัตกรรม และสิ่งประดิษฐ์",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        "ตามข้อ 40 งานวิทยบริการและห้องสมุด มีหน้าที่พัฒนาและให้บริการห้องสมุด ศูนย์การเรียนรู้ และสื่อการเรียนรู้ เพื่อสนับสนุนการจัดการเรียนการสอนและการศึกษาค้นคว้าของผู้เรียนและบุคลากร",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานวิทยบริการและห้องสมุด",
      "ห้องสมุด",
      "ศูนย์การเรียนรู้",
      "สื่อการเรียนรู้",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q025",
    code: "TES-000025",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 25,

    question:
      "งานใดมีหน้าที่ควบคุม ดูแล บำรุงรักษาอาคารสถานที่ ระบบสาธารณูปโภค และสภาพแวดล้อมของสถานศึกษาให้พร้อมใช้งาน",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานอาคารสถานที่",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานบริหารงานทั่วไป",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานศูนย์ดิจิทัลและสื่อสารองค์กร",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานโครงการพิเศษและการบริการสังคม",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        "ตามข้อ 41 งานอาคารสถานที่ มีหน้าที่ควบคุม ดูแล บำรุงรักษาอาคารสถานที่ ระบบสาธารณูปโภค และสภาพแวดล้อมของสถานศึกษาให้มีความพร้อมและปลอดภัยต่อการใช้งาน",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานอาคารสถานที่",
      "อาคารสถานที่",
      "สาธารณูปโภค",
      "สิ่งแวดล้อม",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q026",
    code: "TES-000026",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 26,

    question:
      "งานใดมีหน้าที่ควบคุม ดูแล การจัดหา การใช้ การเก็บรักษา และการจำหน่ายพัสดุ รวมทั้งการบริหารสินทรัพย์ของสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานพัสดุ",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานบริหารสินทรัพย์",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานอาคารสถานที่",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 42 งานบริหารสินทรัพย์ มีหน้าที่ควบคุม ดูแล การจัดหา การใช้ การเก็บรักษา การจำหน่ายพัสดุ ตลอดจนการบริหารสินทรัพย์ของสถานศึกษาให้เป็นไปตามระเบียบที่เกี่ยวข้อง",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานบริหารสินทรัพย์",
      "พัสดุ",
      "สินทรัพย์",
      "ครุภัณฑ์",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q027",
    code: "TES-000027",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 27,

    question:
      "งานใดมีหน้าที่รับผิดชอบการรับเงิน การเบิกจ่ายเงิน การเก็บรักษาเงิน และการจัดทำบัญชีการเงินของสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานบริหารสินทรัพย์",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานพัสดุ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        "ตามข้อ 43 งานการเงิน มีหน้าที่รับผิดชอบการรับเงิน การเบิกจ่ายเงิน การเก็บรักษาเงิน การจัดทำบัญชี และการดำเนินงานด้านการเงินของสถานศึกษาให้เป็นไปตามระเบียบของทางราชการ",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานการเงิน",
      "การรับเงิน",
      "การเบิกจ่ายเงิน",
      "บัญชีการเงิน",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q028",
    code: "TES-000028",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 28,

    question:
      "งานใดมีหน้าที่จัดทำบัญชี รายงานการเงิน และงบการเงินของสถานศึกษาให้เป็นไปตามระเบียบของทางราชการ",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานบัญชี",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานบริหารสินทรัพย์",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
    ],

    answer: CHOICE_IDS.B,

    explanation: {
      text:
        "ตามข้อ 44 งานบัญชี มีหน้าที่จัดทำบัญชี รายงานการเงิน และงบการเงินของสถานศึกษา รวมทั้งควบคุมการบันทึกบัญชีให้เป็นไปตามระเบียบที่เกี่ยวข้อง",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานบัญชี",
      "รายงานการเงิน",
      "งบการเงิน",
      "บัญชี",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q029",
    code: "TES-000029",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 29,

    question:
      "งานใดมีหน้าที่ดำเนินการจัดซื้อจัดจ้าง การควบคุมพัสดุ และการจำหน่ายพัสดุของสถานศึกษาให้เป็นไปตามระเบียบของทางราชการ",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานบริหารสินทรัพย์",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานพัสดุ",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานบัญชี",
      },
    ],

    answer: CHOICE_IDS.C,

    explanation: {
      text:
        "ตามข้อ 45 งานพัสดุ มีหน้าที่ดำเนินการจัดซื้อจัดจ้าง การควบคุมพัสดุ การเก็บรักษา และการจำหน่ายพัสดุของสถานศึกษาให้เป็นไปตามระเบียบของทางราชการ",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานพัสดุ",
      "จัดซื้อจัดจ้าง",
      "การควบคุมพัสดุ",
      "การจำหน่ายพัสดุ",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
  
    {
    id: "q030",
    code: "TES-000030",

    subjectId: SUBJECT_IDS.TEACHER_LICENSE,

    // TODO:
    // เปลี่ยนเป็น TOPIC_IDS.SCHOOL_ADMINISTRATION_2569
    // หลังเพิ่ม Topic ใหม่ในระบบ
    topicId: TOPIC_IDS.CURRICULUM,

    order: 30,

    question:
      "งานใดมีหน้าที่ดำเนินการเกี่ยวกับการบริหารงานบุคคล การพัฒนาบุคลากร และการจัดทำทะเบียนประวัติของบุคลากรในสถานศึกษา",

    choices: [
      {
        id: CHOICE_IDS.A,
        text: "งานบุคลากร",
      },
      {
        id: CHOICE_IDS.B,
        text: "งานบริหารงานทั่วไป",
      },
      {
        id: CHOICE_IDS.C,
        text: "งานการเงิน",
      },
      {
        id: CHOICE_IDS.D,
        text: "งานพัฒนายุทธศาสตร์ แผนงานและงบประมาณ",
      },
    ],

    answer: CHOICE_IDS.A,

    explanation: {
      text:
        "ตามข้อ 46 งานบุคลากร มีหน้าที่ดำเนินการเกี่ยวกับการบริหารงานบุคคล การพัฒนาบุคลากร การจัดทำทะเบียนประวัติ และงานด้านบุคลากรของสถานศึกษาให้เป็นไปตามระเบียบที่เกี่ยวข้อง",
    },

    difficulty: DIFFICULTY.MEDIUM,

    tags: [
      "ระเบียบบริหารสถานศึกษา",
      "พ.ศ.2569",
      "OVEC",
      "งานบุคลากร",
      "บริหารงานบุคคล",
      "ทะเบียนประวัติ",
      "พัฒนาบุคลากร",
    ],

    status: QUESTION_STATUS.PUBLISHED,
  },
 ]; 
  
   
  
  