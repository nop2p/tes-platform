import Link from "next/link";

import { Button, Card } from "@/components/ui";
import { Subject } from "@/types";

interface SubjectCardProps {
  subject: Subject;
  questionCount: number;
  topicCount: number;
}

export function SubjectCard({
  subject,
  questionCount,
  topicCount,
}: SubjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium text-blue-600">
            {subject.code}
          </p>

          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {subject.name}
          </h2>

          {subject.description && (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {subject.description}
            </p>
          )}
        </div>

        <div className="mb-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">
              จำนวนข้อ
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-900">
              {questionCount}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">
              จำนวนหัวข้อ
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-900">
              {topicCount}
            </p>
          </div>
        </div>

        <Link
          href={`/exam?subject=${subject.id}`}
          className="block"
        >
          <Button
            size="lg"
            fullWidth
            disabled={questionCount === 0}
          >
            เริ่มทำข้อสอบ
          </Button>
        </Link>
      </div>
    </Card>
  );
}