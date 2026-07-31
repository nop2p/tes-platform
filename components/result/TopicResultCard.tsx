import type { TopicResult } from "@/types";

interface TopicResultCardProps {
  result: TopicResult;
}

export function TopicResultCard({
  result,
}: TopicResultCardProps) {
  const {
    topicCode,
    topicName,
    totalQuestions,
    correctAnswers,
    incorrectAnswers,
    unansweredAnswers,
    percentage,
  } = result;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
            {topicCode}
          </p>

          <h3 className="mt-1 font-semibold text-slate-900">
            {topicName}
          </h3>
        </div>

        <div className="text-right">
          <p className="text-xl font-bold text-slate-900">
            {correctAnswers}
            <span className="text-sm font-medium text-slate-400">
              {" "}
              / {totalQuestions}
            </span>
          </p>

          <p className="mt-1 text-sm font-semibold text-blue-600">
            {percentage}%
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{
            width: `${Math.min(
              100,
              Math.max(0, percentage),
            )}%`,
          }}
        />
      </div>

      {/* Detail */}
      <div className="mt-4 flex gap-5 text-sm">
        <span className="text-green-700">
          ถูก {correctAnswers}
        </span>

        <span className="text-red-600">
          ผิด {incorrectAnswers}
        </span>

        <span className="text-amber-600">
          ไม่ทำ {unansweredAnswers}
        </span>

        <span className="text-slate-500">
          รวม {totalQuestions}
        </span>
      </div>
    </div>
  );
}
