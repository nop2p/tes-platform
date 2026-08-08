"use client";

import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import { Container } from "@/components/ui";
import {
  getFirebaseAuth,
  getFirebaseFirestore,
} from "@/lib/firebase/client";

import type { ExamAttemptLog } from "@/types";

interface AdminSummary {
  subjectId: string;
  subjectCode: string;
  subjectName: string;
  completedCount: number;
  expiredCount: number;
}

function formatDateTime(value: string): string {
  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? "ไม่ทราบเวลา"
    : new Intl.DateTimeFormat("th-TH", {
        dateStyle: "medium",
        timeStyle: "medium",
      }).format(date);
}

async function getAdminStatus(user: User): Promise<boolean> {
  const firestore = getFirebaseFirestore();

  if (!firestore || user.isAnonymous) {
    return false;
  }

  const adminDocument = await getDoc(
    doc(firestore, "admins", user.uid),
  );

  return adminDocument.exists();
}

async function getAllAttemptLogs(): Promise<ExamAttemptLog[]> {
  const firestore = getFirebaseFirestore();

  if (!firestore) {
    return [];
  }

  const snapshot = await getDocs(
    collection(firestore, "examAttempts"),
  );

  return snapshot.docs
    .map((item) => item.data() as ExamAttemptLog)
    .sort((a, b) =>
      b.endedAt.localeCompare(a.endedAt),
    );
}

export function AdminDashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [logs, setLogs] = useState<ExamAttemptLog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const auth = getFirebaseAuth();

    if (!auth) {
      setMessage(
        "ยังไม่ได้ตั้งค่า Firebase ใน Environment Variables",
      );
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      (nextUser) => {
        window.setTimeout(() => {
          setUser(nextUser);
          setIsLoading(false);
        }, 0);
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user || user.isAnonymous) {
      return;
    }

    void (async () => {
      setIsLoading(true);

      try {
        const admin = await getAdminStatus(user);
        setIsAdmin(admin);

        if (!admin) {
          setMessage("บัญชีนี้ไม่มีสิทธิ์ผู้ดูแล");
          return;
        }

        setLogs(await getAllAttemptLogs());
        setMessage("");
      } catch (error) {
        console.error("Failed to load admin logs:", error);
        setMessage("ไม่สามารถโหลดข้อมูลผู้ดูแลได้");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user]);

  const summaries = useMemo<AdminSummary[]>(() => {
    const summaryMap = new Map<string, AdminSummary>();

    logs.forEach((log) => {
      const summary = summaryMap.get(log.subjectId) ?? {
        subjectId: log.subjectId,
        subjectCode: log.subjectCode,
        subjectName: log.subjectName,
        completedCount: 0,
        expiredCount: 0,
      };

      if (log.outcome === "completed") {
        summary.completedCount += 1;
      } else {
        summary.expiredCount += 1;
      }

      summaryMap.set(log.subjectId, summary);
    });

    return [...summaryMap.values()].sort((a, b) =>
      a.subjectCode.localeCompare(b.subjectCode, "th"),
    );
  }, [logs]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const auth = getFirebaseAuth();

    if (!auth) {
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPassword("");
    } catch (error) {
      console.error("Admin sign-in failed:", error);
      setMessage("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSignOut() {
    const auth = getFirebaseAuth();

    if (auth) {
      await signOut(auth);
    }

    setIsAdmin(false);
    setLogs([]);
  }

  if (isLoading) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          กำลังตรวจสอบสิทธิ์ผู้ดูแล...
        </div>
      </Container>
    );
  }

  if (!isAdmin) {
    return (
      <Container className="py-10">
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-blue-600">
            ADMIN
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            เข้าสู่ระบบผู้ดูแล
          </h1>

          <p className="mt-2 text-slate-600">
            ใช้อีเมลและรหัสผ่านที่สร้างไว้ใน Firebase Authentication
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                อีเมล
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">
                รหัสผ่าน
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            {message && (
              <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isSubmitting ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">ADMIN</p>
            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              รายงานผลการทำแบบทดสอบ
            </h1>
            <p className="mt-2 text-slate-600">
              ข้อมูลรวมจากผู้เข้าสอบทุกคนที่บันทึกใน Firestore
            </p>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ออกจากระบบ
          </button>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900">
            สรุปตามรายวิชา
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {summaries.map((summary) => (
              <article
                key={summary.subjectId}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-blue-600">
                  {summary.subjectCode}
                </p>
                <h3 className="mt-1 font-bold text-slate-900">
                  {summary.subjectName}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-green-50 p-3 text-green-700">
                    <p className="text-sm">จบแบบทดสอบ</p>
                    <p className="mt-1 text-2xl font-bold">
                      {summary.completedCount} ครั้ง
                    </p>
                  </div>
                  <div className="rounded-xl bg-amber-50 p-3 text-amber-700">
                    <p className="text-sm">หมดเวลาก่อนจบ</p>
                    <p className="mt-1 text-2xl font-bold">
                      {summary.expiredCount} ครั้ง
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900">
            รายละเอียดการสอบล่าสุด
          </h2>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="divide-y divide-slate-100">
              {logs.map((log) => (
                <article
                  key={log.sessionId}
                  className="grid gap-3 px-5 py-5 md:grid-cols-[1.5fr_1fr_.7fr]"
                >
                  <div>
                    <p className="text-sm font-semibold text-blue-600">
                      {log.subjectCode}
                    </p>
                    <h3 className="font-semibold text-slate-900">
                      {log.subjectName}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      เริ่ม: {formatDateTime(log.startedAt)}
                    </p>
                    <p className="text-sm text-slate-500">
                      สิ้นสุด: {formatDateTime(log.endedAt)}
                    </p>
                  </div>
                  <div>
                    <span className={log.outcome === "completed" ? "rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700" : "rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700"}>
                      {log.outcome === "completed" ? "จบแบบทดสอบ" : "หมดเวลา"}
                    </span>
                    <p className="mt-3 text-sm text-slate-600">
                      ยืนยันแล้ว {log.confirmedAnswers}/{log.totalQuestions} ข้อ
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">
                      {log.correctAnswers}/{log.totalQuestions}
                    </p>
                    <p className="text-sm text-slate-500">
                      {log.percentage}% · ผิด {log.incorrectAnswers} · ไม่ทำ {log.unansweredAnswers}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
