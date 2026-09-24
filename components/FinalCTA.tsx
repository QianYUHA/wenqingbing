import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="flex min-h-[82vh] flex-col justify-between border-t border-line px-6 py-8 sm:px-10 lg:px-[7.8vw]">
      <Reveal className="flex flex-1 flex-col justify-center py-24 sm:items-center sm:text-center">
        <p className="serif mb-8 text-3xl tracking-[-.05em] sm:text-5xl">那么，</p>
        <h2 className="serif m-0 text-[clamp(4rem,10vw,10rem)] leading-[.92] tracking-[-.09em]">你到底是什么病？</h2>
        <a className="editorial-link mt-16" href="/quiz">开始诊断 <span>→</span></a>
        <p className="mt-10 text-sm leading-7 text-muted">没有标准答案。<br />也没有治疗方案。</p>
      </Reveal>
      <footer className="flex flex-col gap-3 border-t border-line pt-4 text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="meta">文青病不是医学诊断，也不会治好你。</p><p className="meta">© 2026</p>
      </footer>
    </section>
  );
}
