"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-8 pt-7 sm:px-10 lg:px-[7.8vw] lg:pt-9">
      <nav className="flex items-center gap-4">
        <span className="meta text-ink">WQB</span>
        <div className="rule flex-1" />
        <span className="meta">Issue 001</span>
      </nav>

      <div className="relative flex flex-1 flex-col justify-center py-16 lg:block lg:py-0">
        <motion.div
          className="meta mb-9 text-muted lg:absolute lg:left-[8%] lg:top-[17%] lg:mb-0"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}
        >
          WEN QING BING<br />CULTURAL PERSONALITY ARCHIVE
        </motion.div>
        <motion.h1
          className="serif m-0 flex max-w-[760px] items-baseline gap-[.04em] text-[clamp(4.7rem,10.7vw,9.7rem)] leading-none tracking-[-.09em] sm:text-[clamp(6.1rem,10.7vw,9.7rem)] lg:absolute lg:left-[12%] lg:top-[30%] lg:w-[60%]"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>文</span><span className="translate-y-[.1em]">青</span><span className="-translate-y-[.035em]">病</span>
        </motion.h1>
        <motion.div
          className="mt-16 max-w-[340px] sm:ml-[27%] lg:absolute lg:bottom-[16%] lg:left-[61%] lg:mt-0"
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }}
        >
          <p className="serif mb-7 text-[clamp(1.4rem,1.8vw,1.85rem)] leading-[1.45] tracking-[-.04em]">你以为你在挑选作品，<br />其实你一直在暴露自己。</p>
          <p className="ml-[10%] mb-9 text-sm leading-6 text-muted">一次关于阅读、电影<br />与审美偏好的非正式诊断。</p>
          <a className="editorial-link ml-[20%]" href="/quiz">开始诊断 <span>→</span></a>
        </motion.div>
      </div>

      <div className="flex items-end justify-between border-t border-line pt-4 text-muted">
        <span className="meta">24 questions</span><span className="meta">03 min</span><span className="meta">no right answer</span>
      </div>
    </section>
  );
}
