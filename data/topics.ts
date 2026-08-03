import { SUBJECT_IDS, TOPIC_IDS } from "@/lib";
import { Topic } from "@/types";

export const topics: Topic[] = [
  {
    id: TOPIC_IDS.ACTIVE_LEARNING,
    subjectId: SUBJECT_IDS.TEACHER_LICENSE,
    code: "AL",
    name: "Active Learning",
    order: 1,
    isActive: true,
  },

  {
    id: TOPIC_IDS.PLC,
    subjectId: SUBJECT_IDS.TEACHER_LICENSE,
    code: "PLC",
    name: "PLC",
    order: 2,
    isActive: true,
  },

  {
    id: TOPIC_IDS.CURRICULUM,
    subjectId: SUBJECT_IDS.TEACHER_LICENSE,
    code: "CUR",
    name: "หลักสูตร",
    order: 3,
    isActive: true,
  },
  {
  id: TOPIC_IDS.EDUCATIONAL_PSYCHOLOGY,
  subjectId: SUBJECT_IDS.TEACHER_LICENSE,
  code: "PSY",
  name: "จิตวิทยาการศึกษา",
  order: 4,
  isActive: true,
},
{
  id: TOPIC_IDS.RESEARCH01,
  subjectId: SUBJECT_IDS.RESEARCH01,
  code: "R01",
  name: "วิจัยทางการศึกษา #1",
  order: 1,
  isActive: true,
},

{
  id: TOPIC_IDS.EDisabilities001,
  subjectId: SUBJECT_IDS.EducationDisabilities001,
  code: "ED01",
  name: "พรบ. การจัดการศึกษาสำหรับคนพิการ พ.ศ. 2551 , 2556",
  order: 1,
  isActive: true,
},

{
  id: TOPIC_IDS.EDethics01,
  subjectId: SUBJECT_IDS.ETHICS001,
  code: "ETH01",
  name: "ข้าราชการที่ดี ประมวลจริยธรรม 2562 #1",
  order: 1,
  isActive: true,
},

{
  id: TOPIC_IDS.EDeducations01,
  subjectId: SUBJECT_IDS.EDUCTIONS01,
  code: "EDU01",
  name: "ภาค ข การศึกษา ว16/2569 #1",
  order: 1,
  isActive: true,
},

{
  id: TOPIC_IDS.EDeducations01,
  subjectId: SUBJECT_IDS.VOCATIONNAL01,
  code: "EDU01",
  name: "ภาค ข การศึกษา ว16/2569 #1",
  order: 1,
  isActive: true,
},

];