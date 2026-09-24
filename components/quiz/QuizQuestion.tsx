import { motion } from "framer-motion";
import type { OptionId, QuizQuestion as QuizQuestionType } from "@/types/quiz";
import { QuizOption } from "@/components/quiz/QuizOption";

export function QuizQuestion({ question, selected, onSelect, disabled }: { question: QuizQuestionType; selected?: OptionId; onSelect: (id: OptionId) => void; disabled?: boolean }) {
  return <motion.section key={question.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }} className="flex-1 py-12 sm:py-16"><p className="meta text-muted">{String(question.stage).padStart(2, "0")} / {String(question.id).padStart(2, "0")}</p><h1 className="serif mt-7 max-w-4xl whitespace-pre-line text-[clamp(2rem,4vw,4.5rem)] leading-[1.18] tracking-[-.055em]">{question.title}</h1><div className="mt-12 max-w-3xl"><div className="grid gap-x-12 md:grid-cols-2">{question.options.map((option, index) => <QuizOption key={option.id} option={option} index={index} selected={selected === option.id} disabled={disabled} onSelect={() => onSelect(option.id)} />)}</div></div></motion.section>;
}
