import Link from "next/link";

import { Container } from "@/components/ui";
import {
  getQuestionsBySubjectId,
  getSubjectById,
} from "@/services";

import { ExamClient } from "./ExamClient";

interface ExamPageProps {
  searchParams: Promise<{
    subject?: string;
  }>;
}

export default async function ExamPage({
  searchParams,
}: ExamPageProps) {
  const params = await searchParams;

  const subjectId = params.subject;

  if (!subjectId) {
    return (
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบรายวิชา
          </h1>

          <p className="mt-3 text-slate-600">
            กรุณาเลือกแบบทดสอบจากหน้าแรก
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </Container>
    );
  }

  const subject = getSubjectById(subjectId);

  if (!subject) {
    return (
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            ไม่พบแบบทดสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            รายวิชาที่ระบุไม่มีอยู่ในระบบ
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </Container>
    );
  }

  const questions =
    getQuestionsBySubjectId(subject.id);

  if (questions.length === 0) {
    return (
      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            ยังไม่มีข้อสอบ
          </h1>

          <p className="mt-3 text-slate-600">
            รายวิชานี้ยังไม่มีข้อสอบที่พร้อมใช้งาน
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <ExamClient
      subject={subject}
      questions={questions}
    />
  );
}