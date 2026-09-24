import type { Archetype } from "@/data/archetypes";

export function PersonalityDescription({ archetype }: { archetype: Archetype }) {
  return <section className="page-section border-t border-line"><div className="max-w-3xl lg:ml-[18%]"><p className="meta text-muted">人格解读</p><div className="serif mt-10 whitespace-pre-line text-[clamp(1.7rem,3vw,3.35rem)] leading-[1.45] tracking-[-.045em]">{archetype.description}</div></div></section>;
}
