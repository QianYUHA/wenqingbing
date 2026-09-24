import type { QuizOption as QuizOptionType } from "@/types/quiz";

export function QuizOption({ option, selected, onSelect, index, disabled }: { option: QuizOptionType; selected: boolean; onSelect: () => void; index: number; disabled?: boolean }) {
  const offsets = ["md:ml-0", "md:ml-[10%]", "md:ml-[3%]", "md:ml-[14%]"];
  return <button type="button" disabled={disabled} aria-label={`选项 ${option.id}：${option.text}`} aria-pressed={selected} onClick={onSelect} className={`group w-full border-t border-line py-5 text-left outline-none transition duration-300 hover:border-ink focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-wait ${offsets[index]}`}>
    <span className={`meta mr-5 inline-block transition-colors ${selected ? "text-accent" : "text-muted group-hover:text-ink"}`}>{option.id}{selected ? " ●" : ""}</span><span className={`serif inline text-xl leading-8 tracking-[-.02em] transition-colors sm:text-2xl ${selected ? "text-accent" : "group-hover:text-ink"}`}>{option.text}</span><span className={`mt-3 block h-px bg-accent transition-all duration-300 ${selected ? "w-20" : "w-0 group-hover:w-12"}`} />
  </button>;
}
