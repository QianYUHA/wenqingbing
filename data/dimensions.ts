import type { DimensionKey } from "@/types/quiz";

export const dimensions: Record<DimensionKey, { left: string; right: string; leftEN: string; rightEN: string }> = {
  FT: { left: "感受", right: "思辨", leftEN: "Feel", rightEN: "Think" },
  NA: { left: "叙事", right: "氛围", leftEN: "Narrative", rightEN: "Atmosphere" },
  RS: { left: "现实", right: "幻想", leftEN: "Reality", rightEN: "Surreal" },
  CA: { left: "经典", right: "先锋", leftEN: "Classic", rightEN: "Avant-garde" },
  RI: { left: "克制", right: "浓烈", leftEN: "Restraint", rightEN: "Intensity" },
  IO: { left: "自我", right: "世界", leftEN: "Inward", rightEN: "Outward" },
};

export const stageTitles = ["选择", "继续下去的理由", "留下来的东西", "你愿意原谅什么", "为什么要看这些东西", "最后，关于你自己"];
