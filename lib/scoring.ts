import { dimensionKeys, type DimensionKey, type DimensionScores, type NormalizedProfile, type QuizAnswers, type QuizQuestion } from "@/types/quiz";

const emptyScores = (): DimensionScores => ({ FT: 0, NA: 0, RS: 0, CA: 0, RI: 0, IO: 0 });

export function calculateProfile(questions: QuizQuestion[], answers: QuizAnswers): NormalizedProfile {
  const totals = emptyScores();
  const minimums = emptyScores();
  const maximums = emptyScores();

  questions.forEach((question) => {
    dimensionKeys.forEach((key) => {
      const mean = question.options.reduce((sum, option) => sum + option.scores[key], 0) / question.options.length;
      const centered = question.options.map((option) => option.scores[key] - mean);
      minimums[key] += Math.min(...centered);
      maximums[key] += Math.max(...centered);
      const selected = question.options.find((option) => option.id === answers[question.id]);
      if (selected) totals[key] += selected.scores[key] - mean;
    });
  });

  return dimensionKeys.reduce((profile, key) => {
    const span = maximums[key] - minimums[key];
    const normalized = span === 0 ? 50 : ((totals[key] - minimums[key]) / span) * 100;
    profile[key] = Math.max(0, Math.min(100, Number(normalized.toFixed(1))));
    return profile;
  }, {} as NormalizedProfile);
}

export function isAsymptomatic(profile: NormalizedProfile) {
  return dimensionKeys.every((key) => profile[key] >= 42 && profile[key] <= 58);
}

export function profileDistance(profile: NormalizedProfile, vector: number[]) {
  return Math.sqrt(dimensionKeys.reduce((sum, key, index) => sum + (profile[key] - vector[index]) ** 2, 0));
}
