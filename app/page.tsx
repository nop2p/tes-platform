import { SubjectCard } from "@/components/home";
import { Container } from "@/components/ui";

import {
  getActiveSubjects,
  getQuestionCountBySubjectId,
  getTopicsBySubjectId,
} from "@/services";

export default function Home() {
  const subjects = getActiveSubjects();

  return (
    <Container className="py-10 sm:py-14">
      <section>
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            TES
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            เลือกแบบทดสอบ
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            เลือกรายวิชาที่ต้องการเพื่อเริ่มทำข้อสอบ
            และตรวจสอบคำอธิบายเฉลยหลังตอบแต่ละข้อ
          </p>
        </div>

        {subjects.length > 0 ? (
          <div className="mx-auto grid max-w-3xl gap-6">
            {subjects.map((subject) => {
              const questionCount =
                getQuestionCountBySubjectId(subject.id);

              const topicCount =
                getTopicsBySubjectId(subject.id).length;

              return (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  questionCount={questionCount}
                  topicCount={topicCount}
                />
              );
            })}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="font-semibold text-slate-900">
              ยังไม่มีแบบทดสอบ
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              ยังไม่มีรายวิชาที่เปิดใช้งานในขณะนี้
            </p>
          </div>
        )}
      </section>
    </Container>
  );
}