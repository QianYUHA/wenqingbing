"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateProfile } from "@/lib/scoring";
import { matchPersonalities } from "@/lib/personality";
import { quizStorage } from "@/lib/quizStorage";
import type { OptionId, QuizAnswers } from "@/types/quiz";
import { CompletionTransition } from "@/components/quiz/CompletionTransition";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { StageTransition } from "@/components/quiz/StageTransition";

type View = "question" | "stage" | "complete";

export function QuizShell() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [index, setIndex] = useState(0);
  const [view, setView] = useState<View>("question");
  const [selecting, setSelecting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => { setAnswers(quizStorage.getAnswers()); setIndex(Math.min(quizStorage.getProgress(), 23)); setReady(true); }, []);
  const question = questions[index];
  const answered = Object.keys(answers).length;
  const restart = () => { quizStorage.clear(); setAnswers({}); setIndex(0); setView("question"); setSelecting(false); };
  const goPrevious = () => { if (index > 0) { const previous = index - 1; setIndex(previous); quizStorage.saveProgress(previous); setView("question"); } };

  function select(optionId: OptionId) {
    if (selecting) return;
    setSelecting(true);
    const nextAnswers = { ...answers, [question.id]: optionId };
    setAnswers(nextAnswers); quizStorage.saveAnswers(nextAnswers);
    window.setTimeout(() => {
      if (index === questions.length - 1) {
        quizStorage.saveResult(matchPersonalities(calculateProfile(questions, nextAnswers))); quizStorage.saveProgress(23); setView("complete");
        window.setTimeout(() => router.push("/result"), 1500); return;
      }
      const nextIndex = index + 1;
      setIndex(nextIndex); quizStorage.saveProgress(nextIndex);
      if (questions[nextIndex].stage !== question.stage) { setView("stage"); window.setTimeout(() => { setView("question"); setSelecting(false); }, 750); } else setSelecting(false);
    }, 350);
  }

  if (!ready) return <main className="min-h-screen" aria-busy="true" />;
  return <main className="flex min-h-screen flex-col px-6 py-7 sm:px-10 lg:px-[7.8vw]">
    <header className="flex items-center gap-4"><span className="meta">WQB</span><div className="rule flex-1" /><span className="meta text-muted">Diagnosis</span></header>
    <AnimatePresence mode="wait">{view === "stage" ? <StageTransition key={`stage-${question.stage}`} stage={question.stage} /> : view === "complete" ? <CompletionTransition key="complete" /> : <QuizQuestion key={question.id} question={question} selected={answers[question.id]} disabled={selecting} onSelect={select} />}</AnimatePresence>
    <footer className="grid gap-7 border-t border-line pt-5 sm:grid-cols-[1fr_2fr] sm:items-end"><div className="flex gap-6"><button type="button" onClick={goPrevious} disabled={index === 0 || view !== "question"} className="meta text-muted transition hover:text-ink disabled:cursor-not-allowed disabled:opacity-30">← Previous</button><button type="button" onClick={restart} className="meta text-muted transition hover:text-accent">重新开始诊断</button></div><QuizProgress current={index + 1} answered={answered} /></footer>
  </main>;
}
