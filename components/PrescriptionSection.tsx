"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";

type Work = { number: string; title: string; author: string; year: string; match: string };
const books: Work[] = [
  { number: "01", title: "局外人", author: "Albert Camus", year: "1942", match: "92% MATCH" },
  { number: "02", title: "不能承受的生命之轻", author: "Milan Kundera", year: "1984", match: "89% MATCH" },
];
const films: Work[] = [
  { number: "01", title: "燃烧", author: "Lee Chang-dong", year: "2018", match: "96% MATCH" },
  { number: "02", title: "花样年华", author: "Wong Kar-wai", year: "2000", match: "93% MATCH" },
];

function WorkList({ type, works }: { type: "Books" | "Films"; works: Work[] }) {
  const placeholder = type === "Books" ? "BOOK COVER" : "MOVIE POSTER";
  return (
    <div className={type === "Books" ? "lg:w-[91%]" : "lg:w-[96%]"}>
      <div className="mb-8 flex items-center justify-between border-b border-ink pb-3"><h3 className="serif m-0 text-3xl tracking-[-.05em]">{type}</h3><span className="meta text-muted">Selected works</span></div>
      {works.map((work) => (
        <motion.article key={work.number} className={`group relative grid min-h-52 grid-cols-[28px_1fr_auto] gap-x-3 border-b border-line py-6 ${work.number === "02" ? "mt-7 lg:mt-12" : ""}`} whileHover={{ x: 3 }} transition={{ duration: 0.25 }}>
          <span className="meta text-muted">{work.number}</span>
          <div>
            <h4 className="serif m-0 text-[clamp(2rem,3.2vw,3.7rem)] leading-[1.08] tracking-[-.06em]">{work.title}</h4>
            <p className="mt-5 text-xs text-muted">{work.author}</p>
          </div>
          <div className="flex flex-col items-end justify-between"><span className="meta text-muted">{work.year}</span><span className="meta text-accent">{work.match}</span></div>
          <div className="pointer-events-none absolute -right-4 -top-9 hidden h-32 w-24 -rotate-2 items-center justify-center border border-ink bg-paper-light opacity-0 shadow-[5px_5px_0_#d8d1c5] transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-100 md:flex">
            <span className="meta text-center text-muted">{placeholder}</span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export function PrescriptionSection() {
  return (
    <section className="page-section border-t border-line">
      <SectionHeader number="03" title="The prescription" className="sm:ml-[3%]" />
      <Reveal className="mt-20"><p className="serif m-0 text-[clamp(3.8rem,9vw,9rem)] leading-none tracking-[.12em]">对 症 下 药</p></Reveal>
      <Reveal className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-x-14" delay={0.1}>
        <div className="lg:col-span-5"><WorkList type="Books" works={books} /></div>
        <div className="lg:col-span-6 lg:col-start-7 lg:mt-28"><WorkList type="Films" works={films} /></div>
      </Reveal>
    </section>
  );
}
