"use client";

import type { QuizAnswers, QuizResult } from "@/types/quiz";

const answersKey = "wqb_quiz_answers";
const progressKey = "wqb_quiz_progress";
const resultKey = "wqb_quiz_result";

function read<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(window.localStorage.getItem(key) ?? "null") as T | null; } catch { return null; }
}

export const quizStorage = {
  getAnswers: () => read<QuizAnswers>(answersKey) ?? {},
  saveAnswers: (answers: QuizAnswers) => window.localStorage.setItem(answersKey, JSON.stringify(answers)),
  getProgress: () => read<number>(progressKey) ?? 0,
  saveProgress: (progress: number) => window.localStorage.setItem(progressKey, String(progress)),
  getResult: () => read<QuizResult>(resultKey),
  saveResult: (result: QuizResult) => window.localStorage.setItem(resultKey, JSON.stringify(result)),
  clear: () => { window.localStorage.removeItem(answersKey); window.localStorage.removeItem(progressKey); window.localStorage.removeItem(resultKey); },
};
