import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const scores = [
  ["感性", 82], ["思想", 71], ["实验", 63], ["现实", 34], ["克制", 79], ["自我", 68],
];

export function DiagnosisPreview() {
  return (
    <section className="page-section border-t border-line">
      <SectionHeader number="02" title="Diagnosis" className="lg:mr-[10%]" />
      <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:items-end lg:gap-y-0">
        <Reveal className="lg:col-span-5 lg:col-start-1 lg:mb-20">
          <p className="serif max-w-md text-[clamp(3rem,5vw,5.5rem)] leading-[1.02] tracking-[-.07em]">你的文青病，<br />会有一个名字。</p>
          <p className="meta mt-14 ml-[18%] text-muted">A private record of public tastes</p>
        </Reveal>
        <Reveal delay={0.12} className="border-y border-ink py-5 sm:p-7 lg:col-span-6 lg:col-start-7 lg:-mt-16">
          <div className="flex items-start justify-between border-b border-line pb-14">
            <span className="meta">Diagnosis report</span><span className="meta text-muted">Archive / 001</span>
          </div>
          <div className="grid gap-10 py-14 md:grid-cols-[1fr_.9fr]">
            <div>
              <p className="serif mb-1 text-[clamp(3rem,4.4vw,5.3rem)] leading-none tracking-[-.07em]">孤独观察者</p>
              <p className="serif ml-[16%] text-sm tracking-[.12em] text-muted">THE SOLITARY OBSERVER</p>
              <p className="meta mt-8 text-accent">Type / 07</p>
            </div>
            <div className="space-y-3">
              {scores.map(([label, value]) => (
                <div key={String(label)} className="grid grid-cols-[30px_1fr_26px] items-center gap-2 text-xs">
                  <span>{label}</span>
                  <span className="h-px bg-line"><span className="block h-px bg-ink" style={{ width: `${value}%` }} /></span>
                  <span className="text-right tabular-nums text-muted">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-line pt-4"><p className="meta text-muted">Not a final diagnosis</p></div>
        </Reveal>
      </div>
    </section>
  );
}
