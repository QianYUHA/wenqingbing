export type Archetype = { id: string; nameCN: string; nameEN: string; vector: number[]; tagline: string; description: string };

export const archetypes: Archetype[] = [
  { id: "solitary-observer", nameCN: "孤独观察者", nameEN: "THE SOLITARY OBSERVER", vector: [35, 78, 48, 55, 25, 20], tagline: "比起发生了什么，\n你更在意那些没有说出口的东西。", description: "你对作品中的停顿、余白和未完成保持着异常的耐心。一个人物没有说出口的话，一段看似无关紧要的沉默，往往比明确的答案更容易留在你身上。\n\n你并不拒绝故事，只是比起故事最终去了哪里，你更关心人在其中留下了什么。" },
  { id: "romantic-escapist", nameCN: "浪漫逃亡者", nameEN: "THE ROMANTIC ESCAPIST", vector: [20, 65, 82, 55, 78, 25], tagline: "现实已经足够具体，\n你希望作品带你去别处。", description: "你容易被强烈的情绪、陌生的世界和不太讲道理的瞬间吸引。\n\n你并不要求虚构忠于现实。相反，你更愿意相信，有些只有在虚构里发生的事情，反而更接近某种真实。" },
  { id: "quiet-analyst", nameCN: "冷静解剖师", nameEN: "THE QUIET ANALYST", vector: [82, 35, 22, 45, 30, 50], tagline: "你习惯把作品拆开，\n看看它究竟在谈什么。", description: "情绪当然重要，但它很少是你停下来的唯一理由。\n\n你喜欢观察人物为什么这样行动，一个结构为什么这样安排，以及故事背后究竟藏着怎样的问题。理解本身，就是你阅读和观看的一部分乐趣。" },
  { id: "witness-of-time", nameCN: "时代旁观者", nameEN: "THE WITNESS OF TIME", vector: [75, 40, 18, 40, 42, 88], tagline: "个人命运最吸引你的地方，\n往往是它背后的时代。", description: "你很难把一个人物完全从他的环境中抽离。\n\n家庭、城市、阶级、历史与时代变化，在你看来并不是故事的背景，而是故事本身的一部分。你借作品认识别人，也借别人观察这个世界。" },
  { id: "story-collector", nameCN: "故事收藏家", nameEN: "THE STORY COLLECTOR", vector: [30, 15, 40, 18, 52, 42], tagline: "你始终相信，\n一个真正好的故事已经足够珍贵。", description: "人物、命运、相遇、失去与结局，仍然是你进入作品最自然的入口。\n\n你并不排斥形式或思想，只是最终让你记住一部作品的，往往还是那些仿佛真正活过一次的人。" },
  { id: "atmosphere-addict", nameCN: "氛围成瘾者", nameEN: "THE ATMOSPHERE ADDICT", vector: [25, 90, 58, 55, 25, 35], tagline: "情节可以忘记，\n某一种光线和声音不能。", description: "你对作品的记忆经常不是完整的。\n\n也许是一条街，一间空房间，一句没有回应的话，或者某种很难重新描述的感觉。故事会结束，但氛围有时不会。" },
  { id: "avant-garde-wanderer", nameCN: "先锋漫游者", nameEN: "THE AVANT-GARDE WANDERER", vector: [52, 78, 78, 92, 55, 40], tagline: "看不懂不是问题，\n无聊才是。", description: "你愿意把自己交给一种暂时不熟悉的表达方式。\n\n非线性的故事、模糊的现实、奇怪的结构，甚至没有明确答案的结局，都不会自动让你退后。你更担心的是：一切都太容易预料。" },
  { id: "spiritual-archaeologist", nameCN: "精神考古学家", nameEN: "THE SPIRITUAL ARCHAEOLOGIST", vector: [72, 42, 38, 12, 35, 35], tagline: "你不断从旧作品里，\n寻找今天仍然成立的问题。", description: "“经典”对你而言并不意味着必须喜欢。\n\n真正让你留下来的，是那些跨过很多年之后，仍然能够与你发生关系的东西。时代会过去，有些困惑却并不会。" },
  { id: "emotional-incendiary", nameCN: "情绪纵火犯", nameEN: "THE EMOTIONAL INCENDIARY", vector: [12, 45, 55, 50, 94, 25], tagline: "如果作品不能留下些什么，\n它为什么值得两个小时？", description: "你并不害怕作品用力。\n\n爱、愤怒、欲望、失去，甚至某些接近失控的瞬间，都可能成为你喜欢一部作品的理由。相比无懈可击，你有时更愿意选择难以忘记。" },
  { id: "reality-collector", nameCN: "现实采样者", nameEN: "THE REALITY COLLECTOR", vector: [48, 25, 10, 38, 48, 85], tagline: "你喜欢作品，\n因为它让陌生人的生活突然变得真实。", description: "你对普通人的生活有天然的兴趣。\n\n工作、家庭、城市、关系，那些看起来并不传奇的东西，在足够仔细的观察下，本身就已经构成故事。你通过作品进入自己没有经历过的现实。" },
  { id: "fiction-dweller", nameCN: "虚构居民", nameEN: "THE FICTION DWELLER", vector: [30, 32, 92, 55, 58, 22], tagline: "有些不存在的世界，\n反而比现实更容易理解。", description: "你愿意相信虚构拥有自己的规则。\n\n一个不存在的城市，一次不可能发生的相遇，甚至一个完全被创造出来的世界，都可以承载真实的情绪。现实并不是理解现实的唯一方法。" },
  { id: "meaning-seeker", nameCN: "意义追问者", nameEN: "THE MEANING SEEKER", vector: [90, 48, 45, 72, 42, 78], tagline: "你并不要求作品给答案，\n但它最好提出一个好问题。", description: "作品对你来说不仅是故事或情绪。\n\n你喜欢那些能够在结束以后继续生长的问题：我们为什么这样生活？一个选择意味着什么？我们究竟如何理解别人？好的作品不会替你回答，但会让问题变得无法忽略。" },
];

export const asymptomatic: Archetype = { id: "asymptomatic", nameCN: "无症状者", nameEN: "THE ASYMPTOMATIC", vector: [50, 50, 50, 50, 50, 50], tagline: "很遗憾，\n我们暂时没有发现明显症状。", description: "你既不急着逃离现实，也不拒绝虚构；既能忍受沉默，也不排斥喧闹。\n\n你似乎没有特别忠诚于某一种观看世界的方式。也可能只是病得比较复杂。" };
