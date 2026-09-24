import { archetypes, asymptomatic, type Archetype } from "@/data/archetypes";
import { isAsymptomatic, profileDistance } from "@/lib/scoring";
import type { NormalizedProfile, QuizResult } from "@/types/quiz";

export function matchPersonalities(profile: NormalizedProfile): QuizResult {
  if (isAsymptomatic(profile)) return { profile, primaryId: asymptomatic.id };
  const ordered = archetypes.map((archetype) => ({ archetype, distance: profileDistance(profile, archetype.vector) })).sort((a, b) => a.distance - b.distance);
  return { profile, primaryId: ordered[0].archetype.id, secondaryId: ordered[1].archetype.id };
}

export function findArchetype(id: string | undefined): Archetype | undefined {
  if (id === asymptomatic.id) return asymptomatic;
  return archetypes.find((archetype) => archetype.id === id);
}
