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
    id: "EITStandard01-q001",
    code: "EIT01-000001",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 1,
    question: "โรงไฟฟ้าแบบใดสามารถเดินเครื่องผลิตไฟฟ้าได้เร็วที่สุด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "โรงไฟฟ้าพลังงานน้ำ",
      },
      {
        id: CHOICE_IDS.B,
        text: "โรงไฟฟ้าพลังไอน้ำ",
      },
      {
        id: CHOICE_IDS.C,
        text: "โรงไฟฟ้ากังหันก๊าซและดีเซล",
      },
      {
        id: CHOICE_IDS.D,
        text: "โรงไฟฟ้าพลังความร้อนร่วม",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "โรงไฟฟ้าพลังงานน้ำ (Hydroelectric Power Plant) เป็นโรงไฟฟ้าประเภท Black Start ที่มีความพร้อมในการเดินเครื่องสูงที่สุด สามารถจ่ายน้ำเข้ากังหันและเดินเครื่องจ่ายกระแสไฟฟ้าเข้าระบบได้ภายในเวลาไม่กี่นาที (Fast Start-up) ซึ่งเร็วกว่าโรงไฟฟ้ากังหันก๊าซ/ดีเซล และเร็วกว่าโรงไฟฟ้าพลังไอน้ำที่ต้องใช้เวลาอุ่นโบเลอร์ (Boiler) นานหลายชั่วโมง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q002",
    code: "EIT01-000002",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 2,
    question: "หม้อแปลงฉนวนของเหลวติดไฟยาก บรรจุฉนวนของเหลวที่มีจุดติดไฟ (fire point) ไม่ต่ำกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่ต่ำกว่า 200 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่ต่ำกว่า 250 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่ต่ำกว่า 300 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่ต่ำกว่า 350 องศาเซลเซียส",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐานการติดตั้งทางไฟฟ้าสำหรับประเทศไทย พ.ศ. 2564 (วสท.) บทที่ 8 ข้อกำหนดสำหรับหม้อแปลงไฟฟ้า ได้ระบุไว้ว่า หม้อแปลงไฟฟ้าชนิดฉนวนของเหลวติดไฟยาก (Less-Flammable Liquid-Insulated Transformers) ต้องบรรจุด้วยของเหลวที่มีจุดติดไฟ (Fire Point) ไม่ต่ำกว่า 300 องศาเซลเซียส เพื่อความปลอดภัยด้านอัคคีภัยเมื่อติดตั้งภายในอาคาร",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q003",
    code: "EIT01-000003",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 3,
    question: "ขนาดต่ำสุดของสายต่อหลักดินที่ใช้สายประธานตัวนำทองแดงขนาดไม่เกิน 35 ตร.มม. คือข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ขนาดไม่เล็กกว่า 10 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ขนาดไม่เล็กกว่า 16 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ขนาดไม่เล็กกว่า 25 ตร.มม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "ขนาดไม่เล็กกว่า 35 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 ตารางที่ 4-1 ขนาดต่ำสุดของสายต่อหลักดินของระบบไฟฟ้ากระแสสลับ:\nหากตัวนำประธาน (ทองแดง) มีขนาด ไม่เกิน 35 ตร.มม.\nกำหนดให้ใช้ สายต่อหลักดินขนาดต่ำสุดไม่เล็กกว่า 10 ตร.มม. (ทองแดง)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q004",
    code: "EIT01-000004",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 4,
    question: "การติดตั้งหลักดินต้องฝังหลักดินให้มีความลึกจากผิวดินไม่น้อยกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่น้อยกว่า 15 เซนติเมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่น้อยกว่า 30 เซนติเมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่น้อยกว่า 60 เซนติเมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่น้อยกว่า 90 เซนติเมตร",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 บทที่ 4 ระบบการต่อลงดิน (ข้อ 4.8.1) ระบุไว้ว่า การติดตั้งหลักดินชนิดแท่ง (Ground Rod) จะต้องตอกลงไปในดินให้ได้ความยาวตามมาตรฐาน (2.4 เมตร) โดยให้ ส่วนบนสุดของหลักดิน (หัวต่อสายดิน) อยู่ใต้ระดับผิวดินไม่น้อยกว่า 30 เซนติเมตร (หรือประมาณ 300 มม.) เพื่อป้องกันความเสียหายจากแรงกระแทกและกิจกรรมบนผิวดิน",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q005",
    code: "EIT01-000005",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 5,
    question: "ตามมาตรฐานกำหนดให้หลักดินสำหรับแท่งเหล็กอาบสังกะสี ที่จะนำมาติดตั้งกับระบบไฟฟ้า มีขนาดเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีขนาดเส้นผ่าศูนย์กลาง 16 มม. และมีความยาว 2.4 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "มีขนาดเส้นผ่าศูนย์กลาง (5/8 นิ้ว) และมีความยาว 2.0 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "มีขนาดเส้นผ่าศูนย์กลาง 14 มม. และมีความยาว 2.4 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "มีขนาดเส้นผ่าศูนย์กลาง (5/8 นิ้ว) และมีความยาว 1.8 เมตร",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (ข้อ 4.8.1) กำหนดคุณลักษณะของหลักดินชนิดแท่งเหล็กอาบสังกะสี (Galvanized Iron Rod) หรือแท่งเหล็กหุ้มด้วยทองแดง (Copper-bonded Rod) ไว้ว่า:\nต้องมี เส้นผ่านศูนย์กลางไม่น้อยกว่า 16 มม. (5/8 นิ้ว)\nและมีความยาวมาตรฐาน ไม่น้อยกว่า 2.4 เมตร ตอกลงดินเต็มความยาว",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q006",
    code: "EIT01-000006",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 6,
    question: "ค่าแรงดันระบุที่ใช้ในการออกแบบระบบไฟฟ้าสำหรับประเทศไทยคือข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "220 V / 380 V",
      },
      {
        id: CHOICE_IDS.B,
        text: "240 V / 415 V",
      },
      {
        id: CHOICE_IDS.C,
        text: "230 V / 400 V",
      },
      {
        id: CHOICE_IDS.D,
        text: "230 V / 415 V",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 นิยามและข้อกำหนดทั่วไป) และประกาศปรับเปลี่ยนแรงดันไฟฟ้ามาตรฐานประเทศไทย (ปรับจาก 220/380V) กำหนดให้ แรงดันระบุ (Nominal Voltage) สำหรับระบบไฟฟ้าแรงดันต่ำ 3 เฟส 4 สาย ในประเทศไทย คือ 230/400 โวลต์ (1 เฟส 2 Line-to-Neutral = 230V, 3 เฟส Line-to-Line = 400V)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q007",
    code: "EIT01-000007",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 7,
    question: "ระบบการจำหน่ายแรงดันต่ำของการไฟฟ้าส่วนภูมิภาคระบบ 1 เฟส 3 สายมีค่าแรงดันตรงกับข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "230 V",
      },
      {
        id: CHOICE_IDS.B,
        text: "230 / 460 V",
      },
      {
        id: CHOICE_IDS.C,
        text: "230 / 400 V",
      },
      {
        id: CHOICE_IDS.D,
        text: "240 / 416 V",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ระบบไฟฟ้าแรงดันต่ำ 1 เฟส 3 สาย (Single-phase 3-wire system) ของ กฟภ. (PEA) ที่ใช้ตามพื้นที่ห่างไกล จะมีสายไฟ Line 2 เส้น และ Neutral 1 เส้น โดยแรงดันเทียบระหว่าง Line กับ Neutral จะได้ 230 โวลต์ และแรงดันระหว่าง Line กับ Line (พาดข้ามปลายคอยล์หม้อแปลง center-tap) จะได้ 460 โวลต์ (230 V / 460 V)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q008",
    code: "EIT01-000008",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 8,
    question: "พิกัดอุณหภูมิของสายไฟที่ใช้ฉนวน XLPE คือข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "40 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.B,
        text: "70 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.C,
        text: "80 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.D,
        text: "90 องศาเซลเซียส",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 บทที่ 2 (สายไฟฟ้า) กำหนดให้สายไฟฟ้าที่ใช้ฉนวน XLPE (Cross-linked Polyethylene) เช่น สายประเภท CV หรือ IEC 60502-1 มี พิกัดอุณหภูมิใช้งานปกติของตัวนำสูงสุดที่ 90 องศาเซลเซียส (เทียบกับ PVC ที่มีพิกัดอุณหภูมิ 70 องศาเซลเซียส)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q009",
    code: "EIT01-000009",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 9,
    question: "ข้อใดไม่ใช่สายไฟฟ้าแรงดันสูงแบบเปลือย",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สาย SAC (Space Aerial Cable)",
      },
      {
        id: CHOICE_IDS.B,
        text: "สาย AAC (All Aluminium Conductor)",
      },
      {
        id: CHOICE_IDS.C,
        text: "สาย AAAC (All Aluminium Alloy Conductor)",
      },
      {
        id: CHOICE_IDS.D,
        text: "สาย ACSR (Aluminium Conductor Steel Reinforced)",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "AAC, AAAC, ACSR: เป็นสายอลูมิเนียมเปลือย (Bare Conductor) ไม่ติดฉนวน\nSAC (Space Aerial Cable): เป็นสาย กึ่งหุ้มฉนวน (Partially Insulated) หุ้มด้วยเปลือก XLPE เพื่อป้องกันการลัดวงจรชั่วคราวจากการสัมผัสกิ่งไม้ จึง ไม่ใช่สายเปลือย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q010",
    code: "EIT01-000010",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 10,
    question: "สายไฟฟ้าแรงดันต่ำเป็นสายที่ระบุใช้กับแรงดันไฟฟ้าสูงสุดเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่เกิน 50 V",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่เกิน 750 V",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่เกิน 1000 V",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่เกิน 600 V",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 และบทที่ 2) ได้ปรับเปลี่ยนการนิยามแรงดันไฟฟ้าแรงดันต่ำ (Low Voltage) ตามมาตรฐานสากล IEC ให้หมายถึงแรงดันไฟฟ้ากระแสสลับ (AC) ไม่เกิน 1,000 โวลต์ (หรือแรงดันกระแสตรง DC ไม่เกิน 1,500 โวลต์)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q011",
    code: "EIT01-000011",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 11,
    question: "ระบบแรงสูง (High Voltage System) มีค่าแรงดันเฟสเทียบกับดินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "เกิน 600 V",
      },
      {
        id: CHOICE_IDS.B,
        text: "เกิน 750 V",
      },
      {
        id: CHOICE_IDS.C,
        text: "เกิน 850 V",
      },
      {
        id: CHOICE_IDS.D,
        text: "เกิน 1000 V",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 นิยาม) ได้อ้างอิงระดับแรงดันตามมาตรฐานสากล IEC โดยระบุว่า แรงต่ำ (Low Voltage) หมายถึงแรงดันไฟฟ้ากระแสสลับ ไม่เกิน 1000 V (U_0 le 600 V / U le 1000 V) ดังนั้น ระบบแรงสูง (High Voltage) สำหรับระบบไฟฟ้ากระแสสลับ จึงหมายถึงระบบที่มีค่าแรงดันเฟสเทียบกับดินหรือแรงดันระหว่างสาย เกิน 1,000 โวลต์ขึ้นไป",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q012",
    code: "EIT01-000012",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 12,
    question: "อาคารขนาดใหญ่ หมายถึง อาคารที่สร้างขึ้นเพื่อใช้อาคารหรือส่วนใดส่วนหนึ่งของอาคารเป็นที่ประกอบกิจการ ประเภทเดียวหรือหลายประเภท โดยมีความสูงจากระดับถนนเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "10 เมตรขึ้นไป",
      },
      {
        id: CHOICE_IDS.B,
        text: "12 เมตรขึ้นไป",
      },
      {
        id: CHOICE_IDS.C,
        text: "15 เมตรขึ้นไป",
      },
      {
        id: CHOICE_IDS.D,
        text: "23 เมตรขึ้นไป",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามกฎกระทรวงควบคุมอาคาร และนิยามในมาตรฐาน วสท. 2564 (บทที่ 1 และ บทที่ 13 อาคารสูงและอาคารขนาดใหญ่พิเศษ):\nอาคารขนาดใหญ่: หมายถึง อาคารที่มีความสูงจากระดับถนนตั้งแต่ 15 เมตรขึ้นไป หรือมีพื้นที่รวมกันทุกชั้นในหลังเดียวกันเกิน 2,000 ตารางเมตร\nอาคารสูง: หมายถึง อาคารที่มีความสูงตั้งแต่ 23 เมตรขึ้นไป",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q013",
    code: "EIT01-000013",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 13,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 การต่อตัวนำเข้ากับสาย สายไฟขนาดเท่าไรที่อนุญาตให้ใช้สายพันรอบหมุดเกลียว หรือเดือยเกลียว (stud) แล้วขันให้แน่นได้",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สายขนาดไม่ใหญ่กว่า 4 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "สายขนาดไม่ใหญ่กว่า 6 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "สายขนาดไม่ใหญ่กว่า 10 ตร.มม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "สายขนาดไม่ใหญ่กว่า 16 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 ข้อกำหนดการต่อสายไฟฟ้า):\nสายไฟฟ้าที่มี ขนาดไม่เกิน 6 ตร.มม. (ไม่ใหญ่กว่า 6 ตร.มม.) อนุญาตให้ดัดสายเข้าพันรอบหมุดเกลียว (Stud) หรือสกรูแล้วขันยึดได้ทันที\nหากสายไฟฟ้ามี ขนาดใหญ่กว่า 6 ตร.มม. ขึ้นไป จะต้องเข้าหัวสายด้วยหางปลา (Terminal Lug) หรือตัวต่อสายแบบยึดด้วยแรงกลก่อนขันยึดเสมอเพื่อป้องกันสายบานหรือเกลียวรัดไม่แน่น",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q014",
    code: "EIT01-000014",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 14,
    question: "บัสบาร์ที่ทำจากโลหะทองแดงกับบัสบาร์ที่ทำจากอลูมิเนียมต้องมีความบริสุทธิ์ของโลหะไม่น้อยกว่าร้อยละเท่าใดตามลำดับ",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีความบริสุทธิ์ของทองแดงไม่น้อยกว่า 96 % มีความบริสุทธิ์ของอลูมิเนียมไม่น้อยกว่า 98 %",
      },
      {
        id: CHOICE_IDS.B,
        text: "มีความบริสุทธิ์ของทองแดงไม่น้อยกว่า 98 % มีความบริสุทธิ์ของอลูมิเนียมไม่น้อยกว่า 99 %",
      },
      {
        id: CHOICE_IDS.C,
        text: "มีความบริสุทธิ์ของทองแดงไม่น้อยกว่า 98 % มีความบริสุทธิ์ของอลูมิเนียมไม่น้อยกว่า 98 %",
      },
      {
        id: CHOICE_IDS.D,
        text: "มีความบริสุทธิ์ของทองแดงไม่น้อยกว่า 99 % มีความบริสุทธิ์ของอลูมิเนียมไม่น้อยกว่า 99 %",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามข้อกำหนดมาตรฐานทางไฟฟ้า (วสท. และมาตรฐานอุปกรณ์แผงสวิตช์):\nบัสบาร์ทองแดง (Copper Busbar): ต้องมีความบริสุทธิ์ไม่น้อยกว่า ร้อยละ 98 (98%)\nบัสบาร์อลูมิเนียม (Aluminum Busbar): ต้องมีความบริสุทธิ์ไม่น้อยกว่า ร้อยละ 98 (98%)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q015",
    code: "EIT01-000015",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 15,
    question: "เครื่องตัดไฟรั่วสำหรับบ้านพักอาศัยตามมาตรฐาน วสท. 2564 มีค่ากระแสไฟฟ้ารั่วและช่วงระยะเวลาในการตัดไม่เกินเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "30 mA , 0.01 วินาที",
      },
      {
        id: CHOICE_IDS.B,
        text: "30 mA , 0.04 วินาที",
      },
      {
        id: CHOICE_IDS.C,
        text: "30 mA , 0.1 วินาที",
      },
      {
        id: CHOICE_IDS.D,
        text: "15 mA , 0.1 วินาที",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 2 และบทที่ 3) กำหนดให้เครื่องตัดไฟรั่ว (RCD) ที่ใช้เพื่อการคุ้มครองและป้องกันบุคคลจากไฟฟ้าดูด (Individual Protection) สำหรับบ้านพักอาศัย ต้องมี:\nพิกัดกระแสไฟฟ้ารั่วทำงานกำหนด (I_Delta n) ไม่เกิน 30 mA\nระยะเวลาในการตัดวงจรอัตโนมัติ ไม่เกิน 0.04 วินาที (40 ms) เมื่อเกิดกระแสไฟฟ้ารั่วที่ 5 เท่าของพิกัด (150 mA)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q016",
    code: "EIT01-000016",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 16,
    question: "โหลดของวงจรเต้ารับทั่วไปชนิดเต้าเดี่ยวให้คำนวณโหลดจุดละเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "100 VA",
      },
      {
        id: CHOICE_IDS.B,
        text: "400 VA",
      },
      {
        id: CHOICE_IDS.C,
        text: "360 VA",
      },
      {
        id: CHOICE_IDS.D,
        text: "180 VA",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 การคำนวณโหลด):\nเต้ารับไฟฟ้าใช้งานทั่วไปชนิดเต้าเดี่ยว (Single Receptacle) หรือชนิดเต้าคู่ (Duplex Receptacle) ที่อยู่บนแป้นเดียวกัน ให้คำนวณโหลดไว้ไม่น้อยกว่า 180 VA ต่อจุด",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q017",
    code: "EIT01-000017",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 17,
    question: "โหลดของวงจรเต้ารับทั่วไปชนิดสี่เต้าให้คำนวณโหลดจุดละเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "100 VA",
      },
      {
        id: CHOICE_IDS.B,
        text: "400 VA",
      },
      {
        id: CHOICE_IDS.C,
        text: "360 VA",
      },
      {
        id: CHOICE_IDS.D,
        text: "180 VA",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 การคำนวณโหลด):\nเต้ารับใช้งานทั่วไปชนิดเต้าเดี่ยว/เต้าคู่ = 180 VA\nเต้ารับชนิดสามเต้า (Triplex) หรือ ชนิดสี่เต้า (Quadruplex) ที่อยู่บนแป้นเดียวกัน ให้คำนวณโหลดจุดละ 360 VA (คิดจาก 180 VA times 2)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q018",
    code: "EIT01-000018",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 18,
    question: "ขนาดตัวนำของสายป้อนต้องมีขนาดไม่เล็กกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่เล็กกว่า 4 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่เล็กกว่า 6 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่เล็กกว่า 10 ตร.มม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่เล็กกว่า 16 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 ข้อกำหนดสายป้อน - Feeder Conductor):\nสายป้อนแรงต่ำ (Feeder) ที่จ่ายไฟให้กับวงจรย่อยหลาย ๆ วงจร ต้องมีขนาดพิกัดกระแสเพียงพอต่อโหลด และ ต้องมีขนาดสายตัวนำไม่เล็กกว่า 4 ตร.มม.",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q019",
    code: "EIT01-000019",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 19,
    question: "ในกรณีพื้นที่ยากต่อการปฏิบัติและการไฟฟ้าเห็นชอบยอมให้ความต้านทานของหลักการต่อลงดินกับดินต้องไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "5 โอห์ม",
      },
      {
        id: CHOICE_IDS.B,
        text: "15 โอห์ม",
      },
      {
        id: CHOICE_IDS.C,
        text: "25 โอห์ม",
      },
      {
        id: CHOICE_IDS.D,
        text: "30 โอห์ม",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 4 ระบบการต่อลงดิน ข้อ 4.8.2):\nความต้านทานของการต่อลงดิน (Earth Resistance) ของหลักดิน มาตรฐานกำหนดไว้ ต้องไม่เกิน 5 โอห์ม\nข้อยกเว้น: ในกรณีพื้นที่ที่ดินมีความต้านทานสูงมาก ยากต่อการปรับปรุง และการไฟฟ้าฯ เห็นชอบแล้ว อนุโลมให้มีค่าความต้านทานของหลักดิน ไม่เกิน 25 โอห์ม ได้",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q020",
    code: "EIT01-000020",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 20,
    question: "สายนิวทรัลชนิดแกนเดียวขนาด 25 ตร.มม. ระบบไฟฟ้า 3 เฟสการกำหนดสีของสายไฟคือข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ฉนวนหรือเปลือกนอกเป็นสีดำตลอดความยาวสายพร้อมทำเครื่องหมายสีฟ้าหรืออักษร N ทุกบริเวณที่มีจุดต่อหรือปลายสายทุกปลาย",
      },
      {
        id: CHOICE_IDS.B,
        text: "ฉนวนหรือเปลือกนอกเป็นสีดำตลอดความยาวสายพร้อมทำเครื่องหมายอักษร N ทุกบริเวณที่มีจุดต่อหรือปลายสายทุกปลาย",
      },
      {
        id: CHOICE_IDS.C,
        text: "ฉนวนหรือเปลือกนอกเป็นสีฟ้าตลอดความยาวสาย",
      },
      {
        id: CHOICE_IDS.D,
        text: "ฉนวนหรือเปลือกนอกเป็นสีฟ้าตลอดความยาวสายพร้อมทำเครื่องหมายอักษร N ทุกบริเวณที่มีจุดต่อหรือปลายสายทุกปลาย",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 2 เรื่องรหัสสีสายไฟฟ้า):\nสายนิวทรัล (Neutral Line): โดยปกติกำหนดให้ใช้ สีฟ้า\nข้อยกเว้นสำหรับสายแกนเดียวขนาดตั้งแต่ 16 ตร.มม. ขึ้นไป: อนุญาตให้ใช้สายที่มีฉนวนหรือเปลือกนอกเป็น สีดำตลอดความยาวสาย ได้ แต่ ต้องทำเครื่องหมายด้วยเทปสีฟ้า หรือทำเครื่องหมายอักษร N ให้เห็นชัดเจนที่บริเวณจุดต่อปลายสายทุกปลาย ดังนั้น สายขนาด 25 ตร.มม. (ซึ่งเกิน 16 ตร.มม.) จึงปฏิบัติตามข้อยกเว้นในข้อ ก. ได้",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q021",
    code: "EIT01-000021",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 21,
    question: "สายไฟชนิดหลายแกน ระบบไฟฟ้า 3 เฟส สีฉนวนของสายไฟเฟสที่ 3 คือสีอะไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สีดำ",
      },
      {
        id: CHOICE_IDS.B,
        text: "สีเทา",
      },
      {
        id: CHOICE_IDS.C,
        text: "สีน้ำตาล",
      },
      {
        id: CHOICE_IDS.D,
        text: "สีฟ้า",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 2 เรื่องการกำหนดรหัสสีฉนวนสายไฟฟ้า):\nนิวทรัล (N): สีฟ้า\nเฟสที่ 1 (L1): สีน้ำตาล\nเฟสที่ 2 (L2): สีดำ\nเฟสที่ 3 (L3): สีเทา\nสายดิน (PE): สีเขียว หรือ สีเขียวแถบเหลือง ดังนั้น สีฉนวนของสายไฟฟ้าเฟสที่ 3 (L3) คือ สีเทา",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q022",
    code: "EIT01-000022",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 22,
    question: "การไฟฟ้านครหลวงรับผิดชอบดูแลจังหวัดใดบ้าง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "กรุงเทพมหานคร สมุทรสาคร นนทบุรี",
      },
      {
        id: CHOICE_IDS.B,
        text: "กรุงเทพมหานคร สมุทรปราการ นนทบุรี",
      },
      {
        id: CHOICE_IDS.C,
        text: "กรุงเทพมหานคร สมุทรสงคราม นนทบุรี",
      },
      {
        id: CHOICE_IDS.D,
        text: "กรุงเทพมหานคร ปทุมธานี นนทบุรี",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "การไฟฟ้านครหลวง (กฟน. / MEA) มีเขตพื้นที่รับผิดชอบและให้บริการจำหน่ายพลังงานไฟฟ้าครอบคลุม 3 จังหวัด ได้แก่ กรุงเทพมหานคร, สมุทรปราการ และนนทบุรี ส่วนจังหวัดอื่นๆ ในประเทศไทยอยู่ภายใต้ความรับผิดชอบของการไฟฟ้าส่วนภูมิภาค (กฟภ. / PEA)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q023",
    code: "EIT01-000023",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 23,
    question: "สายตัวนำที่ต่อระหว่างเครื่องวัดหน่วยไฟฟ้าของการไฟฟ้าฯ กับบริภัณฑ์ประธาน หมายถึงข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สายประธาน",
      },
      {
        id: CHOICE_IDS.B,
        text: "สายป้อนย่อย",
      },
      {
        id: CHOICE_IDS.C,
        text: "สายป้อน",
      },
      {
        id: CHOICE_IDS.D,
        text: "สายเส้นไฟ",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 นิยาม):\nสายประธาน (Service Conductor): หมายถึง ตัวนำหรือสายไฟที่ต่อระหว่างเครื่องวัดหน่วยไฟฟ้า (มิเตอร์) ของการไฟฟ้าฯ หรือจุดส่งมอบการไฟฟ้า ไปยังบริภัณฑ์ประธาน (Main Disconnect / Main Circuit Breaker) ของอาคาร\nสายป้อน (Feeder): ตัวนำที่ต่อจากบริภัณฑ์ประธานไปยังแผงย่อย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q024",
    code: "EIT01-000024",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 24,
    question: "โดยปกติขนาดพิกัดกระแสสายไฟฟ้าจะกำหนดให้ใช้งานที่อุณหภูมิโดยรอบกี่องศาเซลเซียส เมื่อเดินในอากาศ",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "70 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.B,
        text: "30 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.C,
        text: "35 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.D,
        text: "40 องศาเซลเซียส",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสาย) ตารางขนาดกระแสของสายไฟฟ้า (ตารางที่ 5-20 ถึง 5-27) ได้กำหนด อุณหภูมิโดยรอบอ้างอิง (Ambient Temperature) สำหรับการเดินสายในอากาศไว้ที่ 40 องศาเซลเซียส (หากอุณหภูมิโดยรอบแตกต่างจาก 40°C จะต้องใช้ตัวคูณปรับแก้พิกัดกระแส)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q025",
    code: "EIT01-000025",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 25,
    question: "โดยปกติขนาดพิกัดกระแสสายไฟฟ้าตัวนำทองแดง จะกำหนดให้ใช้งานที่อุณหภูมิโดยรอบกี่องศาเซลเซียส เมื่อเดินร้อยท่อฝังดินหรือฝังดินโดยตรง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "30 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.B,
        text: "35 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.C,
        text: "40 องศาเซลเซียส",
      },
      {
        id: CHOICE_IDS.D,
        text: "55 องศาเซลเซียส",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายใต้ดิน) กำหนดค่าอุณหภูมิอ้างอิงของดิน (Ground Temperature) สำหรับการคำนวณขนาดพิกัดกระแสของสายไฟฟ้าที่ฝังในดิน หรือร้อยท่อฝังใต้ดินไว้ที่ 30 องศาเซลเซียส",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q026",
    code: "EIT01-000026",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 26,
    question: "กระแสเกินลักษณะใดที่อุปกรณ์ป้องกันต้องทำงานทันที",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "โอเวอร์โหลด",
      },
      {
        id: CHOICE_IDS.B,
        text: "กระแสรั่วลงดิน",
      },
      {
        id: CHOICE_IDS.C,
        text: "ลัดวงจร",
      },
      {
        id: CHOICE_IDS.D,
        text: "ถูกทุกข้อ",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "กระแสโหลดเกิน (Overload Current): เกิดจากอุปกรณ์ใช้ไฟฟ้ามากเกินไป กระแสจะสูงกว่าพิกัดเล็กน้อยถึงปานกลาง อุปกรณ์ป้องกันจะทำงานแบบหน่วงเวลา (Time-delay) เพื่อยอมให้กระแสชั่วขณะ (เช่น กระแสเริ่มเดินมอเตอร์) ผ่านไปได้\nกระแสลัดวงจร (Short Circuit Current): เกิดจากการสัมผัสกันโดยตรงระหว่างสายที่มีไฟกับสายนิวทรัล/ดิน กระแสจะสูงมากถึงหลักพัน-หลักหมื่นแอมป์ อุปกรณ์ป้องกัน (เช่น Circuit Breaker หรือ Fuse) ต้องทำงานตัดวงจรในทันที (Instantaneous) เพื่อป้องกันการระเบิดและอัคคีภัย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q027",
    code: "EIT01-000027",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 27,
    question: "ท่อโลหะหนาปานกลาง (IMC) ขนาดเส้นผ่านศูนย์กลาง 4 นิ้ว ถ้าต้องการร้อยสายตั้งแต่ 3 เส้นขึ้นไป พื้นที่หน้าตัดรวมของสายรวมฉนวนต้องไม่เกินเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "2,542 Sq.mm.",
      },
      {
        id: CHOICE_IDS.B,
        text: "2,842 Sq.mm.",
      },
      {
        id: CHOICE_IDS.C,
        text: "3,242 Sq.mm.",
      },
      {
        id: CHOICE_IDS.D,
        text: "3,442 Sq.mm.",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ตารางที่ 5-3 ข้อกำหนดการร้อยสายในท่อ):\nร้อยสายตั้งแต่ 3 เส้นขึ้นไป กำหนดให้ใช้พื้นที่หน้าตัดรวมของสายทุกเส้นรวมฉนวนได้ ไม่เกิน 40% ของพื้นที่หน้าตัดภายในท่อ\nท่อ IMC ขนาด 4 นิ้ว (100 มม.) มีพื้นที่หน้าตัดภายในเท่ากับ 8,107 Sq.mm.\nดังนั้น พื้นที่หน้าตัดสายรวมสูงสุด 40\\% = 8,107 times 0.40 = mathbf3,242.8 Sq.mm. (หรือประมาณ 3,242 Sq.mm.)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q028",
    code: "EIT01-000028",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 28,
    question: "ท่อโลหะบาง (EMT) ขนาดเส้นผ่านศูนย์กลาง 2 นิ้ว ถ้าต้องการร้อยสาย 2 เส้น พื้นที่หน้าตัดรวมของสายรวมฉนวนต้องไม่เกินเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "509 Sq.mm.",
      },
      {
        id: CHOICE_IDS.B,
        text: "628 Sq.mm.",
      },
      {
        id: CHOICE_IDS.C,
        text: "785 Sq.mm.",
      },
      {
        id: CHOICE_IDS.D,
        text: "1,001 Sq.mm.",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ตารางข้อกำหนดการร้อยสายในท่อ):\nกรณีร้อยสาย 2 เส้น กำหนดให้ใช้พื้นที่หน้าตัดรวมของสายรวมฉนวนได้ ไม่เกิน 31% ของพื้นที่หน้าตัดภายในท่อ\nท่อ EMT ขนาด 2 นิ้ว (50 มม.) มีพื้นที่หน้าตัดภายในประมาณ 2,027 Sq.mm.\nดังนั้น พื้นที่หน้าตัดสายรวมสูงสุด 31\\% = 2,027 times 0.31 = mathbf628.37 Sq.mm. (หรือประมาณ 628 Sq.mm.)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q029",
    code: "EIT01-000029",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 29,
    question: "ระบบไฟฟ้ามีกำลังไฟฟ้าจริง 100 kW และกำลังไฟฟ้ารีแอกทิฟ 50 kvar จงคำนวณหากำลังไฟฟ้าปรากฏ",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "100 kVA",
      },
      {
        id: CHOICE_IDS.B,
        text: "112 kVA",
      },
      {
        id: CHOICE_IDS.C,
        text: "135 kVA",
      },
      {
        id: CHOICE_IDS.D,
        text: "150 kVA",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "สูตรความสัมพันธ์ของสามเหลี่ยมกำลังไฟฟ้า (Power Triangle):\nS = sqrtP^2 + Q^2\nโดยที่:\nP คือ กำลังไฟฟ้าจริง (Real Power) = 100 kW\nQ คือ กำลังไฟฟ้ารีแอกทิฟ (Reactive Power) = 50 kvar\nS คือ กำลังไฟฟ้าปรากฏ (Apparent Power)\nแทนค่า:\nS = sqrt100^2 + 50^2 = sqrt10000 + 2500 = sqrt12500 approx 111.8 kVA\nเมื่อปัดเศษทศนิยมจะได้ 112 kVA",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q030",
    code: "EIT01-000030",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 30,
    question: "ระบบไฟฟ้ามีกำลังไฟฟ้าจริง 600 kW กำลังไฟฟ้ารีแอกทิฟ 800 kVAR กำลังไฟฟ้าปรากฏจะเป็นเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "600 kVA",
      },
      {
        id: CHOICE_IDS.B,
        text: "800 kVA",
      },
      {
        id: CHOICE_IDS.C,
        text: "1000 kVA",
      },
      {
        id: CHOICE_IDS.D,
        text: "1200 kVA",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ใช้สูตรสามเหลี่ยมกำลังไฟฟ้า S = sqrtP^2 + Q^2:\nP = 600 kW\nQ = 800 kVAR\nแทนค่า:\nS = sqrt600^2 + 800^2 = sqrt360000 + 640000 = sqrt1000000 = 1000 kVA",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q031",
    code: "EIT01-000031",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 31,
    question: "ระบบไฟฟ้ามีกำลังไฟฟ้าจริง 600 kW กำลังไฟฟ้ารีแอกทิฟ 800 kVAR ค่า Power factor จะเป็นเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "50 %",
      },
      {
        id: CHOICE_IDS.B,
        text: "60 %",
      },
      {
        id: CHOICE_IDS.C,
        text: "85 %",
      },
      {
        id: CHOICE_IDS.D,
        text: "90 %",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "สูตรคำนวณตัวประกอบกำลัง (Power Factor, PF):\nPF = fracPS\nจากข้อก่อนหน้า กำลังไฟฟ้าปรากฏ (S) เท่ากับ 1000 kVA และกำลังไฟฟ้าจริง (P) เท่ากับ 600 kW\nแทนค่า:\nPF = frac600 kW1000 kVA = 0.60 = 60\\%",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q032",
    code: "EIT01-000032",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 32,
    question: "โรงงานแห่งหนึ่งใช้ไฟ 380 V, 3 เฟส 4 สาย วัดกระแสได้ 1,000 A และวัดกำลังไฟฟ้าจริงได้ 400 kW กำลังไฟฟ้าปรากฏมีค่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "458.2 kVA",
      },
      {
        id: CHOICE_IDS.B,
        text: "558.2 kVA",
      },
      {
        id: CHOICE_IDS.C,
        text: "658.2 kVA",
      },
      {
        id: CHOICE_IDS.D,
        text: "758.2 kVA",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "สูตรคำนวณกำลังไฟฟ้าปรากฏ (S) สำหรับระบบไฟฟ้า 3 เฟส:\nS = sqrt3 times V_L times I_L\nโดยที่:\nV_L = 380 V\nI_L = 1000 A\nแทนค่า:\nS = sqrt3 times 380 V times 1000 A = 1.732 times 380 times 1000 = 658,160 VA approx 658.2 kVA",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q033",
    code: "EIT01-000033",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 33,
    question: "การปรับปรุง Power Factor สำหรับสถานประกอบการขนาดใหญ่ที่มีอุปกรณ์ไฟฟ้าจำนวนมากที่ทำงานไม่พร้อมกันควรเลือกวิธีการปรับปรุงแบบใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "การปรับปรุงที่ตัวอุปกรณ์ (Individual Compensation)",
      },
      {
        id: CHOICE_IDS.B,
        text: "การปรับปรุงเป็นกลุ่ม (Group Compensation)",
      },
      {
        id: CHOICE_IDS.C,
        text: "การปรับปรุงแบบรวม (Central Compensation)",
      },
      {
        id: CHOICE_IDS.D,
        text: "การปรับปรุงแบบผสม (Combined Compensation)",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "Central Compensation (การติดตั้งคาปาซิเตอร์แบตเตอรี่แบบรวมที่ตู้ MDB): เหมาะสำหรับสถานประกอบการขนาดใหญ่ที่มีโหลดจำนวนมากและโหลดเปิดทำงานไม่พร้อมกัน (Diversified loads) เนื่องจากจะใช้วงจรควบคุมอัตโนมัติ (Automatic Power Factor Controller - APFC) ปรับค่าตามการใช้งานจริง ช่วยประหยัดค่าใช้จ่ายในการติดตั้งและใช้จำนวน kVAR น้อยที่สุดเมื่อเทียบกับวิธีอื่น",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q034",
    code: "EIT01-000034",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 34,
    question: "โรงไฟฟ้าแห่งหนึ่งมีโหลด 800 kW, 500 kvar จงคำนวณหาตัวประกอบกำลังไฟฟ้า",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "80.8 %",
      },
      {
        id: CHOICE_IDS.B,
        text: "82.8 %",
      },
      {
        id: CHOICE_IDS.C,
        text: "83.8 %",
      },
      {
        id: CHOICE_IDS.D,
        text: "84.8 %",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "หากำลังไฟฟ้าปรากฏ (S):\nS = sqrtP^2 + Q^2 = sqrt800^2 + 500^2 = sqrt640000 + 250000 = sqrt890000 approx 943.398 kVA\nหาค่า Power Factor (PF):\nPF = fracPS = frac800943.398 approx 0.8480 = 84.8\\%",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q035",
    code: "EIT01-000035",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 35,
    question: "กระแสลัดวงจรประเภทใดโดยทั่วไปแล้วก่อให้เกิดความเสียหายรุนแรงที่สุด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "Three Phase Short Circuit",
      },
      {
        id: CHOICE_IDS.B,
        text: "Line to Earth Short Circuit",
      },
      {
        id: CHOICE_IDS.C,
        text: "Line to Line Short Circuit with Earth Connection",
      },
      {
        id: CHOICE_IDS.D,
        text: "Line to Line Short Circuit without Earth Connection",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "การลัดวงจรแบบ 3 เฟสสมดุล (Three-Phase Symmetrical Fault / Short Circuit) ถือเป็นการลัดวงจรชนิดที่รุนแรงที่สุด (Worst-case Scenario) เนื่องจากมีค่ากระแสลัดวงจรสูงที่สุด (Highest Fault Current) ซึ่งวิศวกรไฟฟ้าจะใช้ค่านี้เป็นหลักในการคำนวณหาพิกัดทนกระแสลัดวงจร (Short Circuit Capacity / IC) ของอุปกรณ์ไฟฟ้า เช่น เซอร์กิตเบรกเกอร์ และบัสบาร์",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q036",
    code: "EIT01-000036",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 36,
    question: "กระแสลัดวงจรประเภทใดเกิดบ่อยที่สุดสำหรับระบบไฟฟ้าที่มีการต่อลงดิน",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "Line to Earth Short Circuit",
      },
      {
        id: CHOICE_IDS.B,
        text: "Three Phase Short Circuit",
      },
      {
        id: CHOICE_IDS.C,
        text: "Line to Line Short Circuit with Earth Connection",
      },
      {
        id: CHOICE_IDS.D,
        text: "Line to Line Short Circuit without Earth Connection",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "จากการเก็บสถิติในระบบไฟฟ้ากำลัง การลัดวงจรแบบ 1 เฟสลงดิน (Single Line-to-Ground Fault / Line to Earth Short Circuit) เป็นความผิดพลาดที่ เกิดขึ้นบ่อยที่สุด คิดเป็นประมาณ 70% - 80% ของการเกิดฟอลต์ทั้งหมดในระบบ (เกิดจากฉนวนเสื่อม, สัตว์ปีนป่าย, กิ่งไม้พาดสาย หรือฟ้าผ่าลงสายเฟส)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q037",
    code: "EIT01-000037",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 37,
    question: "พื้นที่หน้าตัดของสายไฟรวมฉนวนสูงสุดต้องไม่เกินเท่าใดของรางเดินสาย",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "20% ของพื้นที่หน้าตัดรางเดินสาย",
      },
      {
        id: CHOICE_IDS.B,
        text: "31% ของพื้นที่หน้าตัดรางเดินสาย",
      },
      {
        id: CHOICE_IDS.C,
        text: "40% ของพื้นที่หน้าตัดรางเดินสาย",
      },
      {
        id: CHOICE_IDS.D,
        text: "53% ของพื้นที่หน้าตัดรางเดินสาย",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายสำหรับรางเดินสาย - Wireways) ข้อกำหนดพื้นที่การเดินสายในรางเดินสายระบุว่า:\nพื้นที่หน้าตัดรวมของสายไฟฟ้าทุกเส้นรวมฉนวนและเปลือก ต้องไม่เกินร้อยละ 20 (20%) ของพื้นที่หน้าตัดภายในของรางเดินสาย เพื่อระบายความร้อนได้อย่างเหมาะสม",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q038",
    code: "EIT01-000038",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 38,
    question: "แผงย่อยแบบ Main Lugs คืออะไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีเฉพาะ Main Circuit Breaker อยู่ภายใน",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่มี Main Circuit Breaker มีเฉพาะ Miniature Circuit Breaker สำหรับต่อสายป้อนเข้าเท่านั้น",
      },
      {
        id: CHOICE_IDS.C,
        text: "มี Main Circuit Breaker และ มี Ground Bus กับ Neutral Bus ต่อรวมกัน",
      },
      {
        id: CHOICE_IDS.D,
        text: "มี Main Circuit Breaker และ Miniature Circuit Breaker อยู่ภายใน",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "แผงย่อยแบบ Main Lugs (MLO - Main Lugs Only): เป็นแผงควบคุมไฟย่อยที่ ไม่มีเมนเบรกเกอร์ (Main Breaker) ติดตั้งอยู่ภายในแผง แต่จะมีขั้วต่อสาย (Lugs) ไว้สำหรับรับสายป้อน (Feeder) โดยตรง แล้วจ่ายไฟไปยังเซอร์กิตเบรกเกอร์ย่อย (MCB) โดยต้นทางของสายป้อนนั้นจะมีอุปกรณ์ป้องกันกระแสเกิน (เมนเบรกเกอร์) คุมไว้อยู่แล้ว",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q039",
    code: "EIT01-000039",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 39,
    question: "ข้อใดได้อธิบายถึงความจำเป็นของการต่อลงดินได้ถูกต้อง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ลดความเสียหายของอุปกรณ์เครื่องใช้ไฟฟ้า เมื่อเกิดกระแสไฟฟ้ารั่วลงดิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "ลดความเสียหายที่อาจเกิดกับสายไฟฟ้า และความเสียหายที่อาจเกิดกับระบบสายส่ง",
      },
      {
        id: CHOICE_IDS.C,
        text: "จำกัดแรงดันไฟฟ้าของวงจรไม่ให้ต่ำจนอาจทำให้เครื่องใช้ไฟฟ้าเสียหายเมื่อเกิดแรงดันต่ำ",
      },
      {
        id: CHOICE_IDS.D,
        text: "ลดอันตรายที่อาจเกิดกับบุคคล และความเสียหายที่อาจเกิดกับระบบไฟฟ้า หรือเครื่องใช้ไฟฟ้า",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "วัตถุประสงค์หลักของการต่อลงดิน (Grounding/Earthing) ตามมาตรฐาน วสท. 2564 (บทที่ 4) คือ:\nเพื่อความปลอดภัยของบุคคล: ป้องกันไม่ให้เกิดอันตรายจากไฟฟ้าดูด (Electric Shock) เมื่อบุคคลไปสัมผัสกับส่วนโลหะเปิดเผยของบริภัณฑ์ที่มีไฟรั่ว โดยทำให้แรงดันสัมผัส (Touch Voltage) ลดต่ำลงและสร้างเส้นทางให้กระแสรั่วไหลลงดินเพื่อให้อุปกรณ์ป้องกันตัดวงจร\nเพื่อความปลอดภัยของระบบและอุปกรณ์: จำกัดแรงดันไฟฟ้าเกิน (Overvoltage) ที่อาจเกิดขึ้นจากฟ้าผ่า สายไฟแรงสูงแตะสายแรงต่ำ หรือความผิดปกติในระบบไฟฟ้า",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q040",
    code: "EIT01-000040",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 40,
    question: "ข้อใดบอกความหมายของเซอร์กิตเบรกเกอร์ได้ถูกต้องที่สุด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สวิตช์ตัดวงจรอัตโนมัติ",
      },
      {
        id: CHOICE_IDS.B,
        text: "อุปกรณ์สวิตช์ทำหน้าที่ปลดวงจรเมื่อเกิดสภาวะวงจรผิดปกติ",
      },
      {
        id: CHOICE_IDS.C,
        text: "อุปกรณ์สวิตช์ที่นำกระแสและสับ–ปลดวงจรตามพิกัดได้โดยปลอดภัย",
      },
      {
        id: CHOICE_IDS.D,
        text: "อุปกรณ์สวิตช์ทำหน้าที่สับวงจรในสภาวะวงจรปกติ",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 นิยาม):\nเซอร์กิตเบรกเกอร์ (Circuit Breaker) หมายถึง อุปกรณ์สวิตช์ที่สามารถสับ นำ และตัดกระแสไฟฟ้าได้ตามปกติ และสามารถตัดกระแสไฟฟ้าในสภาวะผิดปกติที่กำหนดไว้ (เช่น กระแสโอเวอร์โหลด หรือกระแสลัดวงจร) ได้โดยอัตโนมัติ เพื่อป้องกันวงจรไฟฟ้า",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q041",
    code: "EIT01-000041",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 41,
    question: "ข้อใดบอกความหมายของ Interrupting Capacity (IC) ได้ถูกต้อง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "พิกัดกระแสลัดวงจรสูงสุดที่เซอร์กิตเบรกเกอร์สามารถตัดวงจรได้",
      },
      {
        id: CHOICE_IDS.B,
        text: "พิกัดกระแสโอเวอร์โหลดที่เซอร์กิตเบรกเกอร์สามารถตัดวงจรได้",
      },
      {
        id: CHOICE_IDS.C,
        text: "พิกัดกระแสใช้งานที่เซอร์กิตเบรกเกอร์สามารถตัดวงจรได้",
      },
      {
        id: CHOICE_IDS.D,
        text: "พิกัดกระแสทำงานต่อเนื่องที่เซอร์กิตเบรกเกอร์สามารถตัดวงจรได้",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "Interrupting Capacity (IC) หรือ Short-Circuit Interrupting Rating คือ ค่าพิกัดทนกระแสลัดวงจรสูงสุด (หน่วยเป็น kA) ที่เซอร์กิตเบรกเกอร์สามารถปลด/ตัดวงจรไฟฟ้าได้อย่างปลอดภัยโดยที่ตัวเบรกเกอร์ไม่เกิดการระเบิดหรือเสียหายจนเกิดอันตราย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q042",
    code: "EIT01-000042",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 42,
    question: "ท่อโลหะหนาปานกลาง (IMC) มาตรฐานมีความยาวท่อนละกี่เมตร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "2 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "3 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "4 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "4.5 เมตร",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ท่อร้อยสายไฟฟ้าโลหะตามมาตรฐานสากล (ANSI / UL) และมาตรฐาน มอก. ทั้งชนิดท่อโลหะบาง (EMT), ท่อโลหะหนาปานกลาง (IMC) และท่อโลหะหนา (RSC) จะมีความยาวมาตรฐานต่อท่อนเท่ากับ 10 ฟุต หรือประมาณ 3.05 เมตร (นิยมเรียก 3 เมตร)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q043",
    code: "EIT01-000043",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 43,
    question: "รางเดินสายขนาด 4x4 นิ้ว สามารถบรรจุสาย IEC 01 พื้นที่หน้าตัดตัวนำรวมฉนวนไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "3.2 ตร.นิ้ว",
      },
      {
        id: CHOICE_IDS.B,
        text: "6.4 ตร.นิ้ว",
      },
      {
        id: CHOICE_IDS.C,
        text: "4.96 ตร.นิ้ว",
      },
      {
        id: CHOICE_IDS.D,
        text: "8 ตร.นิ้ว",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "คำนวณพื้นที่หน้าตัดทั้งหมดของรางเดินสาย (Wireway):\nพื้นที่ = 4 นิ้ว times 4 นิ้ว = 16 ตร.นิ้ว\nคิดตามข้อกำหนดมาตรฐาน วสท. 2564:\nพื้นที่หน้าตัดของสายไฟรวมฉนวนสูงสุดต้อง ไม่เกิน 20% ของพื้นที่หน้าตัดภายในรางเดินสาย\nพื้นที่บรรจุสายสูงสุด = 16 ตร.นิ้ว times 0.20 = 3.2 ตร.นิ้ว",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q044",
    code: "EIT01-000044",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 44,
    question: "รางเดินสายขนาด 100 times 100 มม. สามารถบรรจุสาย IEC 01 มีพื้นที่หน้าตัดของตัวนำรวมฉนวน 73.8 ตร.มม. ได้มากสุดจำนวนกี่เส้น",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "25",
      },
      {
        id: CHOICE_IDS.B,
        text: "27",
      },
      {
        id: CHOICE_IDS.C,
        text: "28",
      },
      {
        id: CHOICE_IDS.D,
        text: "30",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "คำนวณพื้นที่หน้าตัดภายในรางเดินสาย:\nพื้นที่ราง = 100 มม. times 100 มม. = 10,000 ตร.มม.\nคำนวณพื้นที่บรรจุสายยอมรับได้สูงสุด (20% ตามมาตรฐาน วสท.):\nพื้นที่ยอมรับได้ = 10,000 ตร.มม. times 0.20 = 2,000 ตร.มม.\nคำนวณจำนวนสายที่ใส่ได้มากที่สุด:\nจำนวนสาย = frac2,00073.8 approx 27.1 เส้น\nปัดเศษลงเพื่อไม่ให้เกิน 20% ได้จำนวนสูงสุด 27 เส้น",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q045",
    code: "EIT01-000045",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 45,
    question: "การคำนวณหาค่าขนาดกระแสของสายไฟฟ้าตัวนำทองแดงแกนเดียว หุ้มฉนวนพีวีซี สำหรับเดินร้อยท่อฝังผนังคอนกรีตต้องคำนวณตามลักษณะการติดตั้งตามข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "กลุ่มที่ 3",
      },
      {
        id: CHOICE_IDS.B,
        text: "กลุ่มที่ 2",
      },
      {
        id: CHOICE_IDS.C,
        text: "กลุ่มที่ 5",
      },
      {
        id: CHOICE_IDS.D,
        text: "กลุ่มที่ 6",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การแบ่งกลุ่มการติดตั้งสายไฟฟ้า):\nกลุ่มที่ 1: สายแกนเดียว/หลายแกน หุ้มฉนวน PVC เดินในช่องเดินสายในอากาศ\nกลุ่มที่ 2: สายแกนเดียว หรือสายหลายแกน หุ้มฉนวน PVC เดินร้อยท่อฝังในผนังคอนกรีต หรือฝังในเพดาน/พริกอิฐ\nกลุ่มที่ 3: สายหลายแกน เดินเกาะผนังในอากาศ\nกลุ่มที่ 5: สายแกนเดียว/หลายแกน เดินฝังดินโดยตรง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q046",
    code: "EIT01-000046",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 46,
    question: "การคำนวณหาค่าขนาดกระแสของสายไฟฟ้าตัวนำทองแดงหลายแกน หุ้มฉนวนพีวีซี สำหรับเดินเกาะผนังในอากาศต้องคำนวณตามลักษณะการติดตั้งตามข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "กลุ่มที่ 3",
      },
      {
        id: CHOICE_IDS.B,
        text: "กลุ่มที่ 2",
      },
      {
        id: CHOICE_IDS.C,
        text: "กลุ่มที่ 5",
      },
      {
        id: CHOICE_IDS.D,
        text: "กลุ่มที่ 6",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การแบ่งกลุ่มการติดตั้งสายไฟฟ้า):\nกลุ่มที่ 3: คือ กำหนดสำหรับ สายไฟฟ้าชนิดหลายแกน (Multi-core) หุ้มฉนวน PVC มีเปลือก เดินเกาะผนังหรือวางบนถาดสายเคเบิลในอากาศ",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q047",
    code: "EIT01-000047",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 47,
    question: "การคำนวณหาค่าขนาดกระแสของสายไฟฟ้าตัวนำทองแดงหลายแกน หุ้มฉนวนพีวีซี มีเปลือกนอกสำหรับเดินฝังดินโดยตรงต้องคำนวณตามลักษณะการติดตั้งตามข้อใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "กลุ่มที่ 3",
      },
      {
        id: CHOICE_IDS.B,
        text: "กลุ่มที่ 2",
      },
      {
        id: CHOICE_IDS.C,
        text: "กลุ่มที่ 5",
      },
      {
        id: CHOICE_IDS.D,
        text: "กลุ่มที่ 6",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การแบ่งกลุ่มการติดตั้งสายไฟฟ้า):\nกลุ่มที่ 5: กำหนดสำหรับ สายไฟฟ้าชนิดหลายแกน หุ้มฉนวนและมีเปลือกนอก เดินฝังดินโดยตรง (Direct Buried) หรือเดินร้อยท่อฝังดิน\nกลุ่มที่ 6: สายแกนเดียวเดินฝังดินโดยตรง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q048",
    code: "EIT01-000048",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 48,
    question: "วงจรและระบบในข้อใดห้ามมิให้มีการต่อลงดิน",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "วงจรไฟฟ้าในห้องผ่าตัดสำหรับโรงพยาบาล",
      },
      {
        id: CHOICE_IDS.B,
        text: "วงจรย่อยเครื่องทำน้ำอุ่น",
      },
      {
        id: CHOICE_IDS.C,
        text: "วงจรย่อยในท่าเทียบเรือ",
      },
      {
        id: CHOICE_IDS.D,
        text: "ระบบไฟฟ้าอู่ซ่อมรถ",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 4 และบทที่ 11 สถานพยาบาล):\nระบบไฟฟ้าในพื้นที่วิกฤต เช่น ห้องผ่าตัด (Operating Room) หรือห้อง ICU กำหนดให้ใช้ ระบบไฟฟ้าไม่ต่อลงดิน (Isolated Power System - IPS) ผ่านหม้อแปลงแยกวงจร (Isolation Transformer) และมีเครื่องเฝ้าระวังฉนวน (Line Isolation Monitor - LIM) เพื่อป้องกันไม่ให้เกิดกระแสไฟฟ้ารั่วไหลผ่านตัวผู้ป่วยและป้องกันไฟดับทันทีเมื่อเกิดฟอลต์แรก",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q049",
    code: "EIT01-000049",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 49,
    question: "พื้นที่หน้าตัดของสายไฟรวมฉนวนสูงสุดต้องไม่เกินเท่าใดของพื้นที่หน้าตัดท่อร้อยสาย",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "สายไฟทุกชนิดยกเว้นสายที่มีปลอกตะกั่วหุ้ม ร้อยในท่อจำนวน 2 สาย ไม่เกิน 40 % ของพื้นที่หน้าตัดท่อ",
      },
      {
        id: CHOICE_IDS.B,
        text: "สายไฟทุกชนิดยกเว้นสายที่มีปลอกตะกั่วหุ้ม ร้อยในท่อจำนวน 3 สาย ไม่เกิน 40 % ของพื้นที่หน้าตัดท่อ",
      },
      {
        id: CHOICE_IDS.C,
        text: "สายไฟทุกชนิดยกเว้นสายที่มีปลอกตะกั่วหุ้ม ร้อยในท่อจำนวน 2 สาย ไม่เกิน 53 % ของพื้นที่หน้าตัดท่อ",
      },
      {
        id: CHOICE_IDS.D,
        text: "สายไฟทุกชนิดยกเว้นสายที่มีปลอกตะกั่วหุ้ม ร้อยในท่อจำนวน 1 สาย ไม่เกิน 31 % ของพื้นที่หน้าตัดท่อ",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ตารางข้อกำหนดการร้อยสายในท่อ):\nร้อยสาย 1 เส้น: คิดพื้นที่หน้าตัดสายรวมไม่เกิน 53%\nร้อยสาย 2 เส้น: คิดพื้นที่หน้าตัดสายรวมไม่เกิน 31%\nร้อยสาย 3 เส้นขึ้นไป: คิดพื้นที่หน้าตัดสายรวมไม่เกิน 40%\nดังนั้น ข้อ ข. อธิบายความสัมพันธ์ของจำนวนสาย 3 เส้น กับเปอร์เซ็นต์พื้นที่ 40% ได้ถูกต้อง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q050",
    code: "EIT01-000050",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 50,
    question: "ข้อใดไม่ใช่รีเลย์โหลดเกิน (Overload Relay) สำหรับวงจรป้องกันมอเตอร์",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "รีเลย์โหลดเกินแบบโลหะคู่",
      },
      {
        id: CHOICE_IDS.B,
        text: "รีเลย์โหลดเกินแบบอิเล็กทรอนิกส์",
      },
      {
        id: CHOICE_IDS.C,
        text: "รีเลย์โหลดเกินแบบเทอร์มิสเตอร์",
      },
      {
        id: CHOICE_IDS.D,
        text: "รีเลย์โหลดเกินแบบแม่เหล็ก",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "Overload Relay (โอเวอร์โหลดรีเลย์): ที่ใช้อยู่ทั่วไปในวงจรควบคุมมอเตอร์แบ่งเป็น แบบ Bimetal (โลหะคู่), แบบ Electronic, และแบบ Magnetic/Hydraulic-Magnetic\nThermistor (เทอร์มิสเตอร์): เป็นอุปกรณ์ตรวจวัดอุณหภูมิโดยตรงที่ฝังอยู่ในขดลวดมอเตอร์ (เรียกว่า Thermistor Protection) ไม่ได้จัดเป็น \"รีเลย์โหลดเกิน\" ที่วัดจากกระแสไฟฟ้าโดยตรงเหมือนข้ออื่นๆ",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q051",
    code: "EIT01-000051",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 51,
    question: "สำหรับมอเตอร์ที่มีการใช้งานเป็นช่วงสั้นๆ ติดต่อกันมีการเดิน และ หยุดเครื่องบ่อยครั้งควรเลือกใช้แม็กเนติกคอนแทคเตอร์แบบใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "AC1",
      },
      {
        id: CHOICE_IDS.B,
        text: "AC2",
      },
      {
        id: CHOICE_IDS.C,
        text: "AC3",
      },
      {
        id: CHOICE_IDS.D,
        text: "AC4",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน IEC 60947-4-1 พิกัดการใช้งาน (Utilization Category) ของแมกเนติกคอนแทคเตอร์แบ่งตามลักษณะโหลด ดังนี้:\nAC-1: โหลดที่เป็นความร้อน (Heater) หรือโหลดที่ไม่คิดค่าความเหนี่ยวนำ\nAC-2: การสตาร์ทและดับมอเตอร์แบบ Slip-ring\nAC-3: การสตาร์ทและดับมอเตอร์กรงกระรอกทั่วไป ขณะหมุนเต็มสปีด\nAC-4: การสตาร์ท สด๊อกกิ้ง (Jogging/Inching), การกลับทิศทางการหมุนอย่างรวดเร็ว (Plugging) และ การสตาร์ท-หยุดบ่อยครั้งช่วงสั้นๆ ซึ่งต้องทนกระแสสูงตอนเริ่มเดินเครื่องซ้ำๆ ได้ดี",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q052",
    code: "EIT01-000052",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 52,
    question: "เครื่องปลดวงจรมอเตอร์ขนาดไม่เกิน 1 แรงม้าควรติดตั้งห่างจากมอเตอร์ระยะห่างไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "5 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "10 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "15 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "20 เมตร",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 6 เรื่องมอเตอร์ - เครื่องปลดวงจรมอเตอร์ / Motor Disconnecting Means) กำหนดไว้ว่า เครื่องปลดวงจรต้องติดตั้งอยู่ในระยะที่มองเห็นได้จากตำแหน่งที่มอเตอร์ตั้งอยู่ (In sight from) และ ต้องมีระยะห่างห่างจากมอเตอร์ไม่เกิน 15 เมตร เพื่อความปลอดภัยของผู้ปฏิบัติงานหรือช่างซ่อมบำรุง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q053",
    code: "EIT01-000053",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 53,
    question: "โหลดต่อเนื่องในระบบไฟฟ้าคือโหลดที่ทำงานต่อเนื่องติดต่อกันไม่น้อยกว่ากี่นาที",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "120 นาที",
      },
      {
        id: CHOICE_IDS.B,
        text: "180 นาที",
      },
      {
        id: CHOICE_IDS.C,
        text: "240 นาที",
      },
      {
        id: CHOICE_IDS.D,
        text: "90 นาที",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 1 นิยาม):\nโหลดต่อเนื่อง (Continuous Load): หมายถึง โหลดที่มีกระแสไฟฟ้าไหลผ่านสูงสุดต่อเนื่องกันตั้งแต่ 3 ชั่วโมงขึ้นไป (180 นาทีขึ้นไป) การคำนวณสายและอุปกรณ์ป้องกันสำหรับโหลดต่อเนื่องต้องคิดที่ 125\\% ของพิกัดกระแสโหลด",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q054",
    code: "EIT01-000054",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 54,
    question: "การแบ่งวงจรย่อยตามลักษณะการจ่ายโหลดข้อใดไม่ใช่วงจรย่อยแสงสว่างหรือบริภัณฑ์ไฟฟ้า",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "วงจรย่อยแสงสว่าง",
      },
      {
        id: CHOICE_IDS.B,
        text: "วงจรเต้ารับ",
      },
      {
        id: CHOICE_IDS.C,
        text: "วงจรย่อยมอเตอร์",
      },
      {
        id: CHOICE_IDS.D,
        text: "วงจรย่อยเฉพาะ",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 วงจรย่อย) วงจรย่อยจำแนกออกเป็น 2 ชนิดหลักตามประเภทการใช้งาน ได้แก่:\nวงจรย่อยทั่วไป (Lighting and Appliance Branch Circuits): ซึ่งรวมถึง วงจรย่อยแสงสว่าง, วงจรย่อยเต้ารับ และวงจรย่อยเฉพาะสำหรับบริภัณฑ์\nวงจรย่อยมอเตอร์ (Motor Branch Circuit): จัดอยู่ในหมวดหมู่ข้อกำหนดเฉพาะต่างหาก (บทที่ 6) เนื่องจากมีพิกัดกระแสสตาร์ตและการป้องกันที่แตกต่างจากวงจรย่อยทั่วไป",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q055",
    code: "EIT01-000055",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 55,
    question: "วงจรย่อยเฉพาะจ่ายโหลดให้เครื่อง Xerox ซึ่งมีป้ายบอกพิกัด (Name Plate) 230 V , 8.5 A โหลดวงจรย่อยมีค่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "1755 VA",
      },
      {
        id: CHOICE_IDS.B,
        text: "1855 VA",
      },
      {
        id: CHOICE_IDS.C,
        text: "1900 VA",
      },
      {
        id: CHOICE_IDS.D,
        text: "1955 VA",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "คำนวณกำลังไฟฟ้าปรากฏ (S) จากป้ายพิกัด (Name Plate):\nS = V times I\nS = 230 V times 8.5 A = 1,955 VA",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q056",
    code: "EIT01-000056",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 56,
    question: "ขนาดตัวนำวงจรย่อยตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 มีขนาดไม่เล็กกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "1.5 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "2.5 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "4 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่กำหนดใน วสท. 2564",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 วงจรย่อย) กำหนดว่า ตัวนำของวงจรย่อยทองแดง ต้องมีขนาดไม่เล็กกว่า 2.5 ตร.มม. (เว้นแต่สายดร็อปหรือสายเข้าดวงไฟที่มีข้อกำหนดข้อยกเว้นเฉพาะให้อิสระไม่เล็กกว่า 1.5 ตร.มม.)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q057",
    code: "EIT01-000057",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 57,
    question: "ขนาดตัวนำของสายป้อนตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 มีขนาดไม่เล็กกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "2.5 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "4 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "6 ตารางมิลลิเมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "10 ตารางมิลลิเมตร",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 สายป้อน) ระบุข้อกำหนดขั้นต่ำไว้ว่า สายป้อน (Feeder) ต้องมีขนาดตัวนำทองแดงไม่เล็กกว่า 4 ตร.มม.",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q058",
    code: "EIT01-000058",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 58,
    question: "ขนาดตัวนำตัวนำประธานใต้ดินสำหรับระบบแรงต่ำตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 มีขนาดไม่เล็กกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ขนาดไม่เล็กกว่า 4 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ขนาดไม่เล็กกว่า 6 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ขนาดไม่เล็กกว่า 10 ตร.มม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "ขนาดไม่เล็กกว่า 16 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 ข้อกำหนดเกี่ยวกับสายประธาน) ระบุไว้ชัดเจนว่า ตัวนำประธานแรงต่ำชนิดเดินใต้ดิน ต้องเป็นสายตัวนำทองแดงหุ้มฉนวน มีขนาดไม่เล็กกว่า 10 ตร.มม.",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q059",
    code: "EIT01-000059",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 59,
    question: "การเดินสายตัวนำประธานใต้ดินสำหรับระบบแรงสูงตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 จะต้องทำป้ายระบุแนวของสายใต้ดินและบอกความลึกของสายบนสุด ระยะห่างระหว่างป้ายไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ระยะห่างระหว่างป้ายไม่เกิน 30 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "ระยะห่างระหว่างป้ายไม่เกิน 50 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "ระยะห่างระหว่างป้ายไม่เกิน 60 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "ระยะห่างระหว่างป้ายไม่เกิน 100 เมตร",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายใต้ดินแรงสูง) กำหนดให้ต้องมีการทำเครื่องหมายหรือป้ายบอกแนวสายเคเบิลใต้ดินแรงสูงบนผิวดิน และ ระยะห่างระหว่างป้ายหรือหมุดระบุแนวสายต้องไม่เกิน 50 เมตร รวมทั้งต้องใส่ไว้ตรงตำแหน่งที่มีการเปลี่ยนทิศทางของสายด้วย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q060",
    code: "EIT01-000060",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 60,
    question: "การเดินสายใต้ดินสำหรับระบบแรงต่ำโดยใช้สายเคเบิลชนิดฝังดินโดยตรง ตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 จะต้องฝังลงดินมีความลึกไม่น้อยกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีความลึกไม่น้อยกว่า 0.60 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "มีความลึกไม่น้อยกว่า 0.70 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "มีความลึกไม่น้อยกว่า 0.90 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "มีความลึกไม่น้อยกว่า 1.00 เมตร",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ตารางและข้อกำหนดการเดินสายฝังดินแรงต่ำ):\nการเดินสายเคเบิลมีเปลือกชนิดฝังดินโดยตรง (Direct Buried Cable) สำหรับระบบแรงต่ำ ต้องมีความลึกไม่น้อยกว่า 0.60 เมตร (60 ซม.) จากผิวดินถึงส่วนบนสุดของสาย (หากมีรถวิ่งผ่านต้องเพิ่มความลึกหรือใส่ท่อป้องกัน)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q061",
    code: "EIT01-000061",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 61,
    question: "การเดินสายสำหรับระบบแรงสูงใต้ดิน ตามมาตรฐานการติดตั้งไฟฟ้า วสท. 2564 ต้องติดตั้งสายร้อยท่อฝังดินมีความลึกไม่น้อยกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีความลึกไม่น้อยกว่า 0.60 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "มีความลึกไม่น้อยกว่า 0.70 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "มีความลึกไม่น้อยกว่า 0.90 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "มีความลึกไม่น้อยกว่า 1.00 เมตร",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายใต้ดินแรงสูง):\nสายไฟฟ้าแรงสูงที่เดินร้อยท่อฝังใต้ดิน (Underground Duct Line for High Voltage) กำหนดความลึกระดับหลังท่อถึงผิวดิน ต้องไม่น้อยกว่า 0.90 เมตร (90 ซม.) (หากฝังใต้ผิวถนนต้องไม่น้อยกว่า 1.00 เมตร)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q062",
    code: "EIT01-000062",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 62,
    question: "การเดินสายในท่อโลหะอ่อน (FMC) สำหรับเดินเข้าบริภัณฑ์ไฟฟ้าหรือกล่องต่อสาย มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 ท่อโลหะอ่อนมีความยาวไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "มีความยาวไม่เกิน 1.00 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "มีความยาวไม่เกิน 1.20 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "มีความยาวไม่เกิน 1.80 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "มีความยาวไม่เกิน 2.00 เมตร",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ข้อกำหนดการใช้ท่อโลหะอ่อน - Flexible Metal Conduit) ระบุไว้ว่า การใช้ท่อโลหะอ่อนสำหรับเดินเข้าบริภัณฑ์ไฟฟ้า กล่องต่อสาย หรือดวงโคมไฟฟ้า ต้องมีความยาวไม่เกิน 1.80 เมตร ต่อช่วง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q063",
    code: "EIT01-000063",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 63,
    question: "วงจรย่อยแสงสว่าง 230 V , 1 เฟส 20 A ถ้าต้องใช้ ไม่เกิน 70 % ของ BC กับดวงโคมฟลูออเรสเซนต์ 2 x 36 W LPF จะใช้ดวงโคมได้กี่จุดต่อวงจรย่อย",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "13 ชุด",
      },
      {
        id: CHOICE_IDS.B,
        text: "14 ชุด",
      },
      {
        id: CHOICE_IDS.C,
        text: "15 ชุด",
      },
      {
        id: CHOICE_IDS.D,
        text: "16 ชุด",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "คำนวณโหลดสูงสุดยอมรับได้ (70% ของพิกัดวงจรย่อย 20 A):\nI_max = 20 A times 0.70 = 14 A\nS_max = 230 V times 14 A = 3,220 VA\nคำนวณโหลดของดวงโคมฟลูออเรสเซนต์ 2 times 36 W LPF (Low Power Factor):\nหลอดฟลูออเรสเซนต์ชนิด LPF จะมีค่า Power Factor ประมาณ 0.50 และคิดกำลังสูญเสียในบัลลาสต์\nโหลดป้ายพิกัดตามมาตรฐานสำหรับดวงโคม 2 times 36 W LPF คิดเป็นประมาณ 210 VA ต่อชุด\nคำนวณจำนวนดวงโคมสูงสุด:\nจำนวนชุด = frac3,220 VA210 VA approx 15.33 ชุด\nดังนั้น สามารถใช้ดวงโคมได้ไม่เกิน 15 ชุด",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q064",
    code: "EIT01-000064",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 64,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 มุมดัดโค้งของท่อโลหะหนา ท่อโลหะหนาปานกลาง ท่อโลหะบาง ระหว่างจุดดึงสายรวมกันต้องไม่เกินกี่องศา",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "90 องศา",
      },
      {
        id: CHOICE_IDS.B,
        text: "180 องศา",
      },
      {
        id: CHOICE_IDS.C,
        text: "360 องศา",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่มีกำหนดใน วสท. 2564",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินท่อร้อยสาย) กำหนดเรื่องมุมดัดโค้งท่อร้อยสายไฟฟ้าไว้ว่า มุมดัดโค้งของท่อระหว่างจุดดึงสาย (Pull Box/Junction Box) รวมกันแล้วต้องไม่เกิน 360 องศา (เช่น โค้ง 90 องศาได้ไม่เกิน 4 แห่ง) เพื่อป้องกันฉนวนของสายไฟฟ้าฉีกขาดเสียหายขณะดึงสาย",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q065",
    code: "EIT01-000065",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 65,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 การเดินท่อ RMC ต้องมีการจับยึดให้แข็งแรงระยะห่างของจุดจับยึดห่างได้สูงสุดไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "1 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "1.5 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "2 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "3 เมตร",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การติดตั้งท่อโลหะหนา - Rigid Metal Conduit / RMC):\nการเดินท่อ RMC ต้องมีการจับยึดให้แข็งแรงมั่นคง โดยมีระยะห่างระหว่างจุดจับยึด (Support spacing) ห่างได้สูงสุดไม่เกิน 3.0 เมตร",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q066",
    code: "EIT01-000066",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 66,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 การเดินท่อ RMC ต้องมีจุดจับยึดห่างจากกล่องไฟฟ้าไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "0.3 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "0.6 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "0.9 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "1.2 เมตร",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การติดตั้งท่อ RMC) กำหนดไว้ว่า จุดจับยึดท่อจุดแรกต้องอยู่ห่างจากกล่องไฟฟ้า (Outlet Box / Junction Box) หรือจุดต่อท่อไม่เกิน 0.90 เมตร (90 เซนติเมตร)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q067",
    code: "EIT01-000067",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 67,
    question: "การต่อสาย และ การต่อแยก ปริมาณของสาย, ฉนวน, หัวต่อสาย ภายในกล่องไฟฟ้า (Boxes) ต้องไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไม่เกิน 60 % ของพื้นที่ภายในกล่องไฟฟ้า",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไม่เกิน 65 % ของพื้นที่ภายในกล่องไฟฟ้า",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไม่เกิน 75 % ของพื้นที่ภายในกล่องไฟฟ้า",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่เกิน 80 % ของพื้นที่ภายในกล่องไฟฟ้า",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ข้อกำหนดการต่อสายในกล่องไฟฟ้า) ระบุว่า การต่อสายหรือการต่อแยกสายภายในกล่องไฟฟ้า ปริมาตรของสายไฟฟ้า ฉนวน และหัวต่อสาย (Wire Nut) รวมกัน ต้องไม่เกินร้อยละ 75 (75%) ของปริมาตรภายในกล่องไฟฟ้า เพื่อป้องกันความแน่นหนาแน่นจนเกิดความร้อนสะสม",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q068",
    code: "EIT01-000068",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 68,
    question: "ท่อโลหะสำหรับร้อยสายไฟชนิดใดระบุให้ใช้ในอาคารเท่านั้นและไม่ควรใช้ในที่ที่มีการกระทบทางกล",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "IMC",
      },
      {
        id: CHOICE_IDS.B,
        text: "RMC",
      },
      {
        id: CHOICE_IDS.C,
        text: "EMT",
      },
      {
        id: CHOICE_IDS.D,
        text: "FMC",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "EMT (Electrical Metallic Tubing): เป็นท่อโลหะบาง มีผนังบางที่สุดในบรรดาท่อโลหะ มาตรฐานกำหนดให้ ใช้เดินภายในอาคารเท่านั้น และ ห้ามใช้ในสถานที่ที่อาจได้รับความเสียหายทางกล (Mechanical Damage) หรือเดินฝังดินโดยตรง\nIMC / RMC: เป็นท่อโลหะหนาปานกลาง/หนา ทนต่อการกระแทกทางกลได้ดี",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q069",
    code: "EIT01-000069",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 69,
    question: "ท่อร้อยสายชนิดท่อโลหะหนาที่ทำมาจากเหล็กกล้ามีชื่อย่อว่าอะไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "IMC",
      },
      {
        id: CHOICE_IDS.B,
        text: "RMC",
      },
      {
        id: CHOICE_IDS.C,
        text: "RSC",
      },
      {
        id: CHOICE_IDS.D,
        text: "RTC",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "RSC: ย่อมาจาก Rigid Steel Conduit หมายถึง ท่อโลหะหนาทำด้วยเหล็กกล้า (มาตรฐาน ANSI C80.1 / มอก.)\nRMC: ย่อมาจาก Rigid Metal Conduit (คำรวมของท่อโลหะหนา ซึ่งอาจเป็นเหล็กหรืออลูมิเนียม)\nIMC: Intermediate Metal Conduit (ท่อโลหะหนาปานกลาง)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q070",
    code: "EIT01-000070",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 70,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 การเดินท่อ FMC ต้องมีจุดจับยึดห่างจากกล่องไฟฟ้าไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "0.3 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "0.6 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "0.9 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "1.2 เมตร",
      },
    ],
    answer: CHOICE_IDS.A,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ข้อกำหนดการติดตั้งท่อโลหะอ่อน - Flexible Metal Conduit / FMC):\nการจับยึดท่อ FMC ต้องมีจุดจับยึด ห่างจากกล่องไฟฟ้า หรืออุปกรณ์ไม่เกิน 0.30 เมตร (30 เซนติเมตร)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q071",
    code: "EIT01-000071",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 71,
    question: "มาตรฐานการติดตั้งไฟฟ้า วสท. 2564 การเดินท่อ FMC ต้องมีการจับยึดให้แข็งแรงระยะห่างของจุดจับยึดห่างได้สูงสุดไม่เกินเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "1 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "1.5 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "2 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "3 เมตร",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ข้อกำหนดการติดตั้งท่อโลหะอ่อน - FMC):\nระยะห่างระหว่างจุดจับยึด (Support Spacing) สำหรับท่อโลหะอ่อน ต้องมีระยะ ห่างกันไม่เกิน 1.50 เมตร",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q072",
    code: "EIT01-000072",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 72,
    question: "ต้องการร้อยสาย IEC 01 จำนวน 5 เส้นซึ่งมีรายละเอียดดังนี้ 3 times 240 ตร.มม. (สาย 240 ตร.มม. มีพื้นที่หน้าตัดรวมฉนวน 556 ตร.มม.), 1 times 120 ตร.มม. (สาย 120 ตร.มม. มีพื้นที่หน้าตัดรวมฉนวน 278 ตร.มม.), G-25 ตร.มม. (สาย 25 ตร.มม. มีพื้นที่หน้าตัดรวมฉนวน 73.8 ตร.มม.) จะต้องใช้ท่อขนาดเล็กสุดเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ท่อเส้นผ่านศูนย์กลาง 80 mm.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ท่อเส้นผ่านศูนย์กลาง 90 mm.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ท่อเส้นผ่านศูนย์กลาง 100 mm.",
      },
      {
        id: CHOICE_IDS.D,
        text: "ท่อเส้นผ่านศูนย์กลาง 125 mm.",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "คำนวณพื้นที่หน้าตัดรวมของสายทั้งหมด (รวมฉนวน):\nสาย 240 ตร.มม. จำนวน 3 เส้น = 3 times 556 = 1,668 ตร.มม.\nสาย 120 ตร.มม. จำนวน 1 เส้น = 1 times 278 = 278 ตร.มม.\nสายดิน 25 ตร.มม. จำนวน 1 เส้น = 1 times 73.8 = 73.8 ตร.มม.\nพื้นที่หน้าตัดสายรวม = 1,668 + 278 + 73.8 = 2,019.8 ตร.มม.\nคำนวณพื้นที่หน้าตัดภายในท่อขั้นต่ำที่ต้องการ (สาย 3 เส้นขึ้นไป คิดพื้นที่ไม่เกิน 40%):\nพื้นที่ภายในท่อที่ต้องการ = frac2,019.80.40 = 5,049.5 ตร.มม.\nพิจารณาขนาดท่อมาตรฐาน:\nท่อขนาด 80 mm. (3 นิ้ว) มีพื้นที่หน้าตัดภายในประมาณ 5,000 ตร.มม. (ยังไม่พอดี)\nท่อขนาด 100 mm. (4 นิ้ว) มีพื้นที่หน้าตัดภายใน 8,107 ตร.มม. (40\\% เท่ากับ 3,242.8 ตร.มม.) ซึ่งสามารถรองรับสาย 2,019.8 ตร.มม. ได้อย่างปลอดภัยตามมาตรฐาน",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q073",
    code: "EIT01-000073",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 73,
    question: "สายเคเบิลแกนเดียวชนิดมีเปลือกนอกที่เดินในรางเคเบิล (Cable Tray) มีขนาดไม่เล็กกว่าเท่าไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ขนาดไม่เล็กกว่า 10 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "ขนาดไม่เล็กกว่า 16 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "ขนาดไม่เล็กกว่า 25 ตร.มม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "ขนาดไม่เล็กกว่า 50 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายบนรางเคเบิล - Cable Tray):\nหากเป็น สายเคเบิลชนิดแกนเดียว (Single Conductor) ที่จะนำมาเดินวางบนรางเคเบิล สายไฟฟ้าชนิดนั้นต้องเป็นชนิดมีเปลือกนอก และ ต้องมีขนาดไม่เล็กกว่า 50 ตร.มม. เพื่อป้องกันความเสียหายทางกลจากการดึงและรับน้ำหนัก\n(ข้อยกเว้น: หากเป็นสายหลายแกน Multi-Core สามารถใช้ขนาดเล็กกว่านี้ได้ตามพิกัด)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q074",
    code: "EIT01-000074",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 74,
    question: "การเดินสายควบข้อใดกล่าวถูกต้อง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "อนุญาตให้เฉพาะวงจรไฟฟ้าเส้นไฟเดินควบสายได้ โดยสายไฟฟ้าต้องมีขนาดไม่เล็กกว่า 50 ตร.มม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "อนุญาตให้เฉพาะวงจรไฟฟ้าเส้นไฟเดินควบสายได้ โดยสายไฟฟ้าต้องมีขนาดไม่เล็กกว่า 35 ตร.มม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "สายที่เดินควบมีขนาดไม่เล็กกว่า 50 ตร.มม. ต้องเป็นสายชนิดเดียวกัน ขนาดเท่ากัน มีความยาวเท่ากัน และใช้วิธีต่อสายเหมือนกัน",
      },
      {
        id: CHOICE_IDS.D,
        text: "อนุญาตให้วงจรไฟฟ้าเส้นไฟและนิวทรัลเดินควบสายได้ โดยสายไฟฟ้าต้องมีขนาดไม่เล็กกว่า 35 ตร.มม.",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การเดินสายควบ - Conductors in Parallel) กำหนดเงื่อนไขไว้ดังนี้:\nต้องเป็นสายตัวนำ (รวมทั้งเฟส นิวทรัล และสายดิน) ขนาด ไม่เล็กกว่า 50 ตร.มม.\nสายที่นำมาขนาน/ควบกันในเฟสเดียวกัน ต้องเป็นชนิดโลหะเดียวกัน, ขนาดเท่ากัน, ยาวเท่ากัน, มีฉนวนชนิดเดียวกัน และเข้าหัวสายแบบเดียวกัน เพื่อให้กระแสแบ่งไหลได้เท่ากันทุกเส้น",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q075",
    code: "EIT01-000075",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 75,
    question: "สายส่งความยาวมาก ๆ มีปรากฏการณ์ Capacitive Charging กระทบอย่างไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "เพิ่มความต้านทานของสาย",
      },
      {
        id: CHOICE_IDS.B,
        text: "ทำให้แรงดันปลายสายลด",
      },
      {
        id: CHOICE_IDS.C,
        text: "ทำให้แรงดันปลายสายสูงเกิน",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไม่มีผลต่อแรงดัน",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "สายส่งไฟฟ้าระยะไกลจะมีค่าความจุไฟฟ้า (Capacitance) ระหว่างสายไฟกับดิน และระหว่างสายไฟด้วยกัน เมื่อสายส่งมีความยาวมากและสภาวะโหลดน้อยหรือไม่มีโหลด (No Load / Light Load) กระแสชาร์จ (Charging Current) ที่ไหลผ่าน Capacitance จะทำให้เกิดปรากฏการณ์ที่เรียกว่า Ferranti Effect ซึ่งส่งผลให้ แรงดันไฟฟ้าที่ปลายสายส่งสูงกว่าแรงดันไฟฟ้าที่ต้นทาง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q076",
    code: "EIT01-000076",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 76,
    question: "มาตรฐานกำหนดให้ระยะห่างแนวนอนขั้นต่ำระหว่างสายไฟแรงต่ำกับท่อน้ำเป็นเท่าใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "5 ซม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "15 ซม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "30 ซม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "45 ซม.",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 ข้อกำหนดการติดตั้งท่อร้อยสายร่วมกับระบบอื่น) กำหนดให้การเดินสายไฟฟ้าหรือท่อร้อยสายไฟฟ้าต้องแยกระยะห่างจากท่อน้ำ ท่อแก๊ส หรือท่อของเหลวอื่นๆ ในแนวขนาน/แนวนอน ไม่น้อยกว่า 30 เซนติเมตร (0.30 เมตร) เพื่อความปลอดภัยและป้องกันการเกิดการควบแน่นของน้ำเข้าสู่ระบบไฟฟ้า",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q077",
    code: "EIT01-000077",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 77,
    question: "ในระบบส่งไฟฟ้า 500 kV ที่ระยะห่างสายกลาง-กลางเท่ากับ 8 เมตร ใช้การเรียงสายแบบ “Delta” เพื่อควบคุมค่าอะไรเป็นหลัก",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "แรงดันพิกัดสูงสุด",
      },
      {
        id: CHOICE_IDS.B,
        text: "ความสามารถในการทนกระแสลัดวงจร",
      },
      {
        id: CHOICE_IDS.C,
        text: "ความสมดุลของอินดักแตนซ์และรีแอคแตนซ์",
      },
      {
        id: CHOICE_IDS.D,
        text: "การลดการสูญเสียแบบ Corona Discharge",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "การจัดวางสายส่งกำลังไฟฟ้าแบบสามเหลี่ยมย่อม (Delta Configuration / Equilateral Triangular Arrangement) ช่วยให้ระยะห่างระหว่างเฟสทุกคู่มีความเท่ากันโดยสมมาตร (D_12 = D_23 = D_31) ส่งผลให้ ค่าความเหนี่ยวนำ (Inductance) และค่ารีแอคแตนซ์ (Reactance) ของทั้ง 3 เฟสมีความสมดุลเท่ากัน โดยไม่ต้องทำการสลับเฟสสาย (Transposition) บ่อยครั้ง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q078",
    code: "EIT01-000078",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 78,
    question: "ในระบบสายเมน (Main Feeder) หากใช้สายไฟขนาดเล็กกว่าที่พิกัดกระแสกำหนด จะเกิดผลใดต่อระบบเป็นอันดับแรก",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ฉนวนของสายจะหลอมละลายและเกิดเพลิงไหม้",
      },
      {
        id: CHOICE_IDS.B,
        text: "Circuit Breaker จะทำงานเร็วขึ้น",
      },
      {
        id: CHOICE_IDS.C,
        text: "ฉนวนของสายจะเสื่อมและเกิดความร้อนสะสม",
      },
      {
        id: CHOICE_IDS.D,
        text: "ค่าความต้านทานรวมจะลดลง",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "เมื่อกระแสไฟฟ้าไหลผ่านสายที่มีขนาดเล็กกว่าพิกัด กำลังไฟฟ้าสูญเสียในรูปความร้อน (I^2R) จะสูงขึ้น ส่งผลให้เกิด ความร้อนสะสมในตัวนำและฉนวน เป็นอันดับแรก ซึ่งความร้อนสะสมนี้นานวันเข้าจะทำให้ฉนวนกรอบ แตกร้าว เสื่อมสภาพ (Insulation Degradation) และนำไปสู่การลัดวงจรหรือเพลิงไหม้ตามมาในที่สุด",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q079",
    code: "EIT01-000079",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 79,
    question: "โหลดไฟฟ้าประเภทใดที่ ต้องใช้สายเฉพาะเส้นตรงจากตู้เมน โดยไม่รวมกับวงจรอื่น",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "เครื่องซักผ้า",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไมโครเวฟ",
      },
      {
        id: CHOICE_IDS.C,
        text: "เครื่องปรับอากาศ",
      },
      {
        id: CHOICE_IDS.D,
        text: "เครื่องปิ้งขนมปัง",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 3 การจัดวงจรย่อยเฉพาะ - Dedicated Branch Circuit):\nอุปกรณ์ที่มีขนาดพิกัดกำลังไฟฟ้าสูงและเป็นโหลดต่อเนื่อง เช่น เครื่องปรับอากาศ (Air Conditioner), เครื่องทำน้ำอุ่น หรือมอเตอร์ขนาดใหญ่ กำหนดให้ต้องต่อเข้ากับ วงจรย่อยเฉพาะ (Dedicated Circuit) แยกต่างหากจากตู้เมน/แผงย่อย โดยห้ามใช้ร่วมกับวงจรเต้ารับหรือแสงสว่างทั่วไป",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q080",
    code: "EIT01-000080",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 80,
    question: "ไฟส่องสว่างภายในอาคารประเภทใดควรติดตั้งพร้อม Emergency Light ตามมาตรฐาน",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ไฟห้องประชุม",
      },
      {
        id: CHOICE_IDS.B,
        text: "ไฟห้องโถง",
      },
      {
        id: CHOICE_IDS.C,
        text: "ไฟทางหนีไฟ",
      },
      {
        id: CHOICE_IDS.D,
        text: "ไฟห้องครัว",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 12 ระบบไฟฟ้าฉุกเฉิน) และมาตรฐานการป้องกันอัคคีภัย กำหนดให้ เส้นทางหนีไฟ (Escape Routes / Exit Access), โถงบันไดหนีไฟ และป้ายทางออกฉุกเฉิน ต้องติดตั้งระบบไฟฟ้าส่องสว่างฉุกเฉิน (Emergency Lighting) เพื่อให้มีแสงสว่างส่องทางได้ทันทีอย่างต่อเนื่องไม่น้อยกว่า 2 ชั่วโมงเมื่อเกิดเหตุไฟฟ้าดับหรือเพลิงไหม้",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q081",
    code: "EIT01-000081",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 81,
    question: "ในการออกแบบจุดเสียบปลั๊กในอาคารสำนักงาน ควรมีจุดปลั๊กไฟไม่ต่ำกว่ากี่จุดต่อห้อง",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "1 จุดต่อ 10 ตร.ม.",
      },
      {
        id: CHOICE_IDS.B,
        text: "1 จุดต่อ 6 ตร.ม.",
      },
      {
        id: CHOICE_IDS.C,
        text: "1 จุดต่อ 4 ตร.ม.",
      },
      {
        id: CHOICE_IDS.D,
        text: "1 จุดต่อ 3 ตร.ม.",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามหลักเกณฑ์การออกแบบระบบไฟฟ้าสำหรับอาคารสำนักงาน (Office Building) และมาตรฐานคำนวณโหลดเต้ารับ:\nกำหนดการจัดสรรจุดเต้ารับทั่วไปไว้ที่ประมาณ 1 จุดต่อพื้นที่ไม่เกิน 4 ถึง 6 ตารางเมตร (หรือเฉลี่ยมาตรฐานเกณฑ์ขั้นต่ำคือ 1 จุดต่อ 6 ตร.ม.) เพื่อรองรับอุปกรณ์สำนักงาน เช่น คอมพิวเตอร์ พรินเตอร์ และลดการใช้สายพ่วงยาว ๆ",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q082",
    code: "EIT01-000082",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 82,
    question: "สาย VCT เหมาะกับการใช้งานแบบใด",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "เดินฝังดิน",
      },
      {
        id: CHOICE_IDS.B,
        text: "เดินในราง Wireway",
      },
      {
        id: CHOICE_IDS.C,
        text: "เดินห้อยในโรงงานแบบยืดหยุ่น",
      },
      {
        id: CHOICE_IDS.D,
        text: "เดินฝังผนังคอนกรีต",
      },
    ],
    answer: CHOICE_IDS.C,
    explanation: {
      text: "ตามมาตรฐาน มอก. 11-2553 และ วสท. 2564 (บทที่ 2):\nสาย VCT: เป็นสายตัวนำทองแดงฝอย (Flexible Conductor) หุ้มฉนวน PVC และมีเปลือกนอก PVC ทนต่อแรงสั่นสะเทือน โค้งงอได้ดี เหมาะสำหรับ การใช้งานที่ต้องการความยืดหยุ่น เช่น เดินต่อเข้าเครื่องจักรที่สั่นสะเทือน, ต่อกับอุปกรณ์เคลื่อนที่ หรือเดินห้อยในอาคาร/โรงงาน\n(ห้ามใช้สาย VCT เดินฝังผนังคอนกรีตเรียบ หรือฝังดินโดยตรงโดยไม่มีท่อป้องกัน)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q083",
    code: "EIT01-000083",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 83,
    question: "การเดินท่อร้อยสายแนวดิ่งบนผนังสูงเกิน 6 เมตร ต้องมีการยึดท่ออย่างไร",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "ยึดทุก 1.5 เมตร",
      },
      {
        id: CHOICE_IDS.B,
        text: "ยึดทุก 2 เมตร",
      },
      {
        id: CHOICE_IDS.C,
        text: "ยึดทุก 2.5 เมตร",
      },
      {
        id: CHOICE_IDS.D,
        text: "ยึดทุกระยะ 3 เมตร",
      },
    ],
    answer: CHOICE_IDS.D,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 5 การติดตั้งท่อร้อยสายโลหะ):\nการเดินท่อร้อยสายไฟฟ้าโลหะ (เช่น RMC หรือ IMC) บนผนังหรือโครงสร้างอาคารทั่วไป ต้องมีระยะห่างระหว่างจุดจับยึด (Support Spacing) ไม่เกิน 3.0 เมตร\nสำหรับการเดินท่อแนวดิ่ง (Vertical Runs) บนโครงสร้างที่มั่นคงแข็งแรง ระยะห่างระหว่างจุดยึดก็ยังคงกำหนดให้ยึดจับอย่างมั่นคงทุกๆ ระยะ ไม่เกิน 3 เมตร เช่นกัน (หรืออาจอนุโลมให้ห่างเพิ่มขึ้นได้ตามชนิดและขนาดท่อเฉพาะกรณี แต่เกณฑ์มาตรฐานระยะจับยึดทั่วไปคือไม่เกิน 3 เมตร)",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
  {
    id: "EITStandard01-q084",
    code: "EIT01-000084",
    subjectId: SUBJECT_IDS.EITStandard2021,
    topicId: TOPIC_IDS.ThaiElectricalCode2021,
    order: 84,
    question: "หากเดินสายไฟฝังในผนังคอนกรีต ต้องเป็นสายชนิดใดตามมาตรฐาน",
    choices: [
      {
        id: CHOICE_IDS.A,
        text: "THW",
      },
      {
        id: CHOICE_IDS.B,
        text: "NYY",
      },
      {
        id: CHOICE_IDS.C,
        text: "XLPE",
      },
      {
        id: CHOICE_IDS.D,
        text: "VCT",
      },
    ],
    answer: CHOICE_IDS.B,
    explanation: {
      text: "ตามมาตรฐาน วสท. 2564 (บทที่ 2 และ บทที่ 5 การเลือกใช้สายไฟฟ้า):\nสาย NYY: เป็นสายไฟฟ้าชนิดมีฉนวน PVC และมีเปลือกนอก PVC สองชั้น (Double Sheathed) มีความทนทานต่อความชื้นและแรงกดทับได้ดี สามารถเดินฝังในฉาบปูน ฝังในผนังคอนกรีต หรือฝังดินโดยตรงได้\nสาย THW (IEC 01): เป็นสายแกนเดียวฉนวนชั้นเดียว ห้ามเดินฝังในคอนกรีตโดยตรง (ต้องร้อยท่อก่อนเท่านั้น)\nสาย VCT: เป็นสายตัวนำฝอย สำหรับงานยืดหยุ่น ห้ามเดินฝังผนังคอนกรีตโดยตรง",
    },
    difficulty: DIFFICULTY.EASY,
    tags: [
      "มาตรฐานการติดตั้งไฟฟ้าสำหรับประเทศไทย 2564",
      "ออกแบบระบบไฟฟ้า",
    ],
    status: QUESTION_STATUS.PUBLISHED,
  },
];
