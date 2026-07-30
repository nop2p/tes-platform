import { Card } from "@/components/ui";
import { Question } from "@/types";

import { ChoiceList } from "./ChoiceList";

interface QuestionCardProps {
  question: Question;

  questionNumber: number;

  totalQuestions: number;

  selectedChoiceId?: string;

  choicesDisabled?: boolean;

  onSelectChoice: (choiceId: string) => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedChoiceId,
  choicesDisabled = false,
  onSelectChoice,
}: QuestionCardProps) {
  return (
    <Card>
      <div className="p-6 sm:p-8">

        {/* Question Header */}
        <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-blue-600">
              ข้อที่ {questionNumber}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              จากทั้งหมด {totalQuestions} ข้อ
            </p>
          </div>

          <div className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
            {questionNumber} / {totalQuestions}
          </div>

        </div>

        {/* Question */}
        <div className="py-7">
          <h2 className="text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
            {question.question}
          </h2>
        </div>

        {/* Choices */}
        <ChoiceList
          choices={question.choices}
          selectedChoiceId={selectedChoiceId}
          disabled={choicesDisabled}
          onSelect={onSelectChoice}
        />

      </div>
    </Card>
  );
}