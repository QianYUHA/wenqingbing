"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { findArchetype } from "@/lib/personality";
import { quizStorage } from "@/lib/quizStorage";
import type { QuizResult } from "@/types/quiz";
import { ResultHero } from "@/components/result/ResultHero";
import { PersonalitySpectrum } from "@/components/result/PersonalitySpectrum";
import { PersonalityDescription } from "@/components/result/PersonalityDescription";

export function ResultShell() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null | undefined>(undefined);
  useEffect(() => setResult(quizStorage.getResult()), []);
  const restart = () => { quizStorage.clear(); router.push("/quiz"); };
  if (result === undefined) return <main className="min-h-screen" aria-busy="true" />;
  if (!result) return <main className="flex min-h-screen flex-col justify-between px-6 py-7 sm:px-10 lg:px-[7.8vw]"><header className="flex gap-4"><span className="meta">WQB</span><div className="rule flex-1" /></header><section className="sm:ml-[18%]"><p className="serif text-[clamp(3rem,7vw,7rem)] leading-none tracking-[-.07em]">还没有完成诊断。</p><Link href="/quiz" className="editorial-link mt-14">开始诊断 <span>→</span></Link></section><footer className="border-t border-line pt-4"><p className="meta text-muted">Cultural personality archive</p></footer></main>;
  const primary = findArchetype(result.primaryId); const secondary = findArchetype(result.secondaryId);
  if (!primary) return null;
  return <main><ResultHero primary={primary} secondary={secondary} /><PersonalitySpectrum profile={result.profile} /><PersonalityDescription archetype={primary} /><section className="px-6 py-24 sm:px-10 lg:px-[7.8vw]"><div className="flex flex-col gap-8 sm:ml-[25%]"><button type="button" onClick={restart} className="editorial-link">重新诊断 <span>→</span></button><Link href="/" className="editorial-link">返回首页 <span>→</span></Link></div></section></main>;
}
