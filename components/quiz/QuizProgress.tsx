export function QuizProgress({ current, answered }: { current: number; answered: number }) {
  const percent = (answered / 24) * 100;
  return <div className="w-full"><div className="mb-3 flex justify-between"><span className="meta">{String(current).padStart(2, "0")} / 24</span><span className="meta text-muted">{Math.round(percent)}%</span></div><div className="relative h-px bg-line"><span className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-ink transition-all duration-500" style={{ left: `calc(${percent}% - 3px)` }} /></div></div>;
}
