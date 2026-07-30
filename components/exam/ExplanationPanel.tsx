import Image from "next/image";

import type {
  Choice,
  Explanation,
} from "@/types";

interface ExplanationPanelProps {
  isCorrect: boolean;
  correctChoice?: Choice;
  explanation: Explanation;
}

export function ExplanationPanel({
  isCorrect,
  correctChoice,
  explanation,
}: ExplanationPanelProps) {
  return (
    <section
      className={[
        "mt-5 overflow-hidden rounded-2xl border",
        isCorrect
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50",
      ].join(" ")}
    >
      {/* Result */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg font-bold",
              isCorrect
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700",
            ].join(" ")}
          >
            {isCorrect ? "✓" : "✕"}
          </div>

          <div>
            <p
              className={[
                "text-lg font-bold",
                isCorrect
                  ? "text-green-800"
                  : "text-red-800",
              ].join(" ")}
            >
              {isCorrect
                ? "ตอบถูก"
                : "ตอบไม่ถูก"}
            </p>

            <p
              className={[
                "mt-1 text-sm",
                isCorrect
                  ? "text-green-700"
                  : "text-red-700",
              ].join(" ")}
            >
              คำตอบนี้ถูกยืนยันแล้ว
              และไม่สามารถเปลี่ยนคำตอบได้
            </p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="border-t border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-900">
          เฉลย
        </h2>

        {/* Correct answer */}
        <div className="mt-4 rounded-xl bg-green-50 p-4">
          <p className="text-sm font-medium text-green-700">
            คำตอบที่ถูกต้อง
          </p>

          <p className="mt-1 font-semibold text-green-900">
            {correctChoice?.text ??
              "ไม่พบข้อมูลคำตอบ"}
          </p>

          {correctChoice?.image && (
            <div className="mt-4">
              <Image
                src={correctChoice.image.url}
                alt={
                  correctChoice.image.alt ??
                  "รูปประกอบคำตอบที่ถูกต้อง"
                }
                width={800}
                height={500}
                className="h-auto max-h-96 w-auto max-w-full rounded-xl border border-green-100 object-contain"
              />
            </div>
          )}
        </div>

        {/* Explanation text */}
        <div className="mt-5">
          <p className="text-sm font-medium text-slate-500">
            คำอธิบาย
          </p>

          <p className="mt-2 whitespace-pre-line leading-7 text-slate-700">
            {explanation.text}
          </p>
        </div>

        {/* Explanation images */}
        {explanation.images &&
          explanation.images.length > 0 && (
            <div className="mt-5 space-y-4">
              <p className="text-sm font-medium text-slate-500">
                รูปประกอบคำอธิบาย
              </p>

              {explanation.images.map(
                (image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2"
                  >
                    <Image
                      src={image.url}
                      alt={
                        image.alt ??
                        "รูปประกอบคำอธิบายเฉลย"
                      }
                      width={1000}
                      height={700}
                      className="mx-auto h-auto max-h-[500px] w-auto max-w-full object-contain"
                    />
                  </div>
                ),
              )}
            </div>
          )}
      </div>
    </section>
  );
}