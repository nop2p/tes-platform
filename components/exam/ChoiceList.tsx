import { Choice } from "@/types";

interface ChoiceListProps {
  choices: Choice[];
  selectedChoiceId?: string;
  disabled?: boolean;
  onSelect: (choiceId: string) => void;
}

const CHOICE_LABELS = [
  "ก",
  "ข",
  "ค",
  "ง",
  "จ",
];

export function ChoiceList({
  choices,
  selectedChoiceId,
  disabled = false,
  onSelect,
}: ChoiceListProps) {
  return (
    <div className="space-y-3">
      {choices.map((choice, index) => {
        const isSelected =
          selectedChoiceId === choice.id;

        const label =
          CHOICE_LABELS[index] ??
          String(index + 1);

        return (
          <button
            key={choice.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(choice.id)}
            className={[
              "flex w-full items-start gap-4 rounded-xl border p-4 text-left transition",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",

              isSelected
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50",

              disabled
                ? "cursor-not-allowed opacity-70"
                : "cursor-pointer",
            ].join(" ")}
          >
            <span
              className={[
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",

                isSelected
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-300 bg-white text-slate-700",
              ].join(" ")}
            >
              {label}
            </span>

            <span className="pt-1 text-base leading-6 text-slate-800">
              {choice.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}