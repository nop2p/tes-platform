# Teacher Examination System

## เพิ่มแบบทดสอบหลายวิชา

ระบบเลือกชุดข้อสอบจากรายวิชาที่ผู้ใช้กดในหน้าแรก และกำหนดเวลาให้ทุกวิชา
**30 นาที** โดยอัตโนมัติ

ข้อสอบแต่ละชุดอยู่ใน `data/questionXX.ts`:

- `data/question01.ts` คือชุดข้อสอบครูผู้ช่วยชุดปัจจุบัน
- เพิ่มชุดใหม่โดยคัดลอกไฟล์เป็น `data/question02.ts`, `data/question03.ts` เป็นต้น

เมื่อเพิ่มชุดใหม่ ต้องลงทะเบียน 3 จุดต่อไปนี้ เพื่อให้ Next.js นำไฟล์นั้นเข้าไปใน
build และแสดงเป็นวิชาให้เลือก:

1. ใน `lib/constants.ts` เพิ่มรหัสวิชา เช่น `MATHEMATICS: "mathematics"`
2. ใน `data/subjects.ts` เพิ่มข้อมูลบัตรรายวิชา โดยใช้ `durationMinutes: 30`
3. ใน `data/questions.ts` import แล้วรวมข้อสอบ เช่น

```ts
import { questions as question01 } from "./question01";
import { questions as question02 } from "./question02";

export const questions = [
  ...question01,
  ...question02,
] as const;
```

ใน `question02.ts` ให้เปลี่ยน `subjectId` ของทุกข้อเป็นรหัสวิชาใหม่ และใช้ `id`
กับ `code` ที่ไม่ซ้ำกับชุดเดิม หากต้องการให้รายงานผลแยกตามหัวข้อ ให้เพิ่มหัวข้อของ
วิชานั้นใน `data/topics.ts` ด้วย

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# tes-platform
