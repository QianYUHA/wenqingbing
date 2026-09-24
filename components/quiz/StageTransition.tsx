import { motion } from "framer-motion";
import { stageTitles } from "@/data/dimensions";

export function StageTransition({ stage }: { stage: number }) {
  return <motion.div className="flex flex-1 flex-col justify-center sm:ml-[15%]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><p className="meta text-muted">{String(stage).padStart(2, "0")} / 06</p><p className="serif mt-6 text-4xl tracking-[-.05em] sm:text-6xl">{stageTitles[stage - 1]}</p></motion.div>;
}
