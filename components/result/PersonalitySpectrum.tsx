import { dimensions } from "@/data/dimensions";
import { dimensionKeys, type NormalizedProfile } from "@/types/quiz";

export function PersonalitySpectrum({ profile }: { profile: NormalizedProfile }) {
  return <section className="page-section border-t border-line"><p className="meta text-muted">Your spectrum</p><h2 className="serif mt-6 text-[clamp(3rem,6vw,6.5rem)] leading-none tracking-[-.07em]">六维光谱</h2><div className="mt-20 grid gap-x-20 gap-y-12 lg:grid-cols-2">{dimensionKeys.map((key) => { const dimension = dimensions[key]; const value = Math.round(profile[key]); return <div key={key}><div className="mb-4 flex justify-between text-sm"><span>{dimension.left}</span><span>{dimension.right}</span></div><div className="relative h-px bg-line"><span className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-ink" style={{ left: `calc(${value}% - 3px)` }} /></div><div className="mt-3 flex justify-between"><span className="meta text-muted">{key}</span><span className="meta">{value}</span></div></div>; })}</div></section>;
}
