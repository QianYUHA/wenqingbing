export const dimensionKeys = ["FT", "NA", "RS", "CA", "RI", "IO"] as const;
export type DimensionKey = (typeof dimensionKeys)[number];
export type DimensionScores = Record<DimensionKey, number>;
export type OptionId = "A" | "B" | "C" | "D";

export type QuizOption = { id: OptionId; text: string; scores: DimensionScores };
export type QuizQuestion = { id: number; stage: number; title: string; context?: string; options: QuizOption[] };
export type QuizAnswers = Partial<Record<number, OptionId>>;
export type NormalizedProfile = Record<DimensionKey, number>;
export type QuizResult = { profile: NormalizedProfile; primaryId: string; secondaryId?: string };
