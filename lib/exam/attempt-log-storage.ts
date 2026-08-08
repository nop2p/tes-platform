import type {
  ExamAnalysisResult,
  ExamAttemptLog,
  ExamSession,
  Subject,
} from "@/types";

import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/client";
import { signInAnonymously } from "firebase/auth";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const EXAM_ATTEMPT_LOGS_STORAGE_KEY =
  "tes-exam-attempt-logs";

function canUseLocalStorage(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  );
}

function isExamAttemptLog(
  value: unknown,
): value is ExamAttemptLog {
  if (!value || typeof value !== "object") {
    return false;
  }

  const log = value as Partial<ExamAttemptLog>;

  return (
    typeof log.id === "string" &&
    typeof log.sessionId === "string" &&
    typeof log.subjectId === "string" &&
    typeof log.subjectCode === "string" &&
    typeof log.subjectName === "string" &&
    (log.outcome === "completed" ||
      log.outcome === "expired") &&
    typeof log.startedAt === "string" &&
    typeof log.endedAt === "string" &&
    typeof log.durationMinutes === "number" &&
    typeof log.elapsedSeconds === "number" &&
    typeof log.totalQuestions === "number" &&
    typeof log.confirmedAnswers === "number" &&
    typeof log.correctAnswers === "number" &&
    typeof log.incorrectAnswers === "number" &&
    typeof log.unansweredAnswers === "number" &&
    typeof log.percentage === "number"
  );
}

/** โหลดประวัติการสอบทั้งหมดจาก Browser ปัจจุบัน */
export function getExamAttemptLogs(): ExamAttemptLog[] {
  if (!canUseLocalStorage()) {
    return [];
  }

  try {
    const storedLogs = window.localStorage.getItem(
      EXAM_ATTEMPT_LOGS_STORAGE_KEY,
    );

    if (!storedLogs) {
      return [];
    }

    const parsedLogs: unknown = JSON.parse(storedLogs);

    if (!Array.isArray(parsedLogs)) {
      return [];
    }

    return parsedLogs.filter(isExamAttemptLog);
  } catch (error) {
    console.error("Failed to load exam attempt logs:", error);
    return [];
  }
}

/**
 * บันทึกผลการสอบหนึ่งครั้ง โดยป้องกัน Session เดียวกันถูกบันทึกซ้ำ
 */
export async function recordExamAttempt(
  session: ExamSession,
  subject: Subject,
  analysis: ExamAnalysisResult,
): Promise<void> {
  if (!canUseLocalStorage()) {
    return;
  }

  try {
    const logs = getExamAttemptLogs();

    if (logs.some((log) => log.sessionId === session.id)) {
      return;
    }

    const endedAt =
      session.completedAt ?? new Date().toISOString();

    const startedAtMilliseconds = Date.parse(session.startedAt);
    const endedAtMilliseconds = Date.parse(endedAt);
    const measuredElapsedSeconds =
      Number.isNaN(startedAtMilliseconds) ||
      Number.isNaN(endedAtMilliseconds)
        ? 0
        : Math.max(
            0,
            Math.round(
              (endedAtMilliseconds -
                startedAtMilliseconds) /
                1000,
            ),
          );

    const log: ExamAttemptLog = {
      id: `attempt-${session.id}`,
      sessionId: session.id,
      subjectId: subject.id,
      subjectCode: subject.code,
      subjectName: subject.name,
      outcome:
        session.completionReason === "expired"
          ? "expired"
          : "completed",
      startedAt: session.startedAt,
      endedAt,
      durationMinutes: session.durationMinutes,
      elapsedSeconds: Math.min(
        measuredElapsedSeconds,
        session.durationMinutes * 60,
      ),
      totalQuestions: analysis.totalQuestions,
      confirmedAnswers: analysis.confirmedAnswers,
      correctAnswers: analysis.correctAnswers,
      incorrectAnswers: analysis.incorrectAnswers,
      unansweredAnswers: analysis.unansweredAnswers,
      percentage: analysis.percentage,
    };

    window.localStorage.setItem(
      EXAM_ATTEMPT_LOGS_STORAGE_KEY,
      JSON.stringify([log, ...logs]),
    );

    await saveExamAttemptToFirestore(log);
  } catch (error) {
    console.error("Failed to save exam attempt log:", error);
  }
}

/**
 * ส่ง Log ไปยัง Firestore ส่วนกลาง
 *
 * หาก Firebase ยังไม่ได้ตั้งค่า ระบบจะใช้ localStorage ต่อได้ตามเดิม
 */
async function saveExamAttemptToFirestore(
  log: ExamAttemptLog,
): Promise<void> {
  const auth = getFirebaseAuth();
  const firestore = getFirebaseFirestore();

  if (!auth || !firestore) {
    return;
  }

  const user = auth.currentUser ??
    (await signInAnonymously(auth)).user;

  await setDoc(
    doc(firestore, "examAttempts", log.sessionId),
    {
      ...log,
      userId: user.uid,
      recordedAt: serverTimestamp(),
    },
  );
}
