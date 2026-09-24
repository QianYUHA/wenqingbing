"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const symptoms = [
  { cn: "孤独", en: "LONELINESS", style: "justify-self-start lg:mt-4" },
  { cn: "荒诞", en: "ABSURDITY", style: "justify-self-end lg:-mt-5" },
  { cn: "浪漫", en: "ROMANCE", style: "justify-self-center lg:-mt-3" },
  { cn: "现实", en: "REALISM", style: "justify-self-start lg:ml-[18%]" },
  { cn: "逃离", en: "ESCAPE", style: "justify-self-end lg:mr-[8%] lg:mt-7" },
];

export function AboutSection() {
  return (
    <section className="page-section relative border-t border-line">
      <SectionHeader number="01" title="About the condition" className="sm:ml-[7%]" />
      <div className="mt-20 grid gap-y-14 lg:mt-28 lg:grid-cols-12 lg:gap-y-20">
      <Reveal className="relative z-10 max-w-2xl lg:col-span-7 lg:col-start-1">
        <p className="meta mb-5 text-muted">关于这种病</p>
        <h2 className="serif m-0 text-[clamp(3.7rem,8vw,8.3rem)] leading-[.94] tracking-[-.07em]">有些症状，<br />很难解释。</h2>
      </Reveal>
      <Reveal className="max-w-[350px] text-sm leading-7 text-muted sm:ml-[25%] lg:col-span-4 lg:col-start-8 lg:mt-24 lg:ml-0">
        有人需要完整的故事，<br />有人沉迷没有答案的结局。
      </Reveal>
      <Reveal className="max-w-[300px] text-sm leading-7 text-muted lg:col-span-4 lg:col-start-2 lg:mt-4">
        有人偏爱现实，<br />有人只愿意活在虚构里。
      </Reveal>
      <Reveal className="max-w-[360px] border-l border-ink pl-5 text-sm leading-7 text-muted sm:ml-[18%] lg:col-span-5 lg:col-start-6 lg:mt-10 lg:ml-0">
        我们试着用几个维度，<br />记录这些没有必要被量化的偏好。
      </Reveal>
      </div>
      <div className="mt-20 grid grid-cols-2 gap-y-8 sm:mt-24 lg:grid-cols-4 lg:gap-y-12">
        {symptoms.map((symptom) => (
          <motion.div key={symptom.en} className={`${symptom.style} group cursor-default`} whileHover={{ x: 3, y: -2 }} transition={{ duration: 0.3 }}>
            <span className="serif text-2xl tracking-[.18em] transition-all duration-300 group-hover:tracking-[.3em] group-hover:text-accent">{symptom.cn}</span>
            <span className="meta ml-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{symptom.en}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
