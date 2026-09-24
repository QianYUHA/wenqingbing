import { motion } from "framer-motion";
export function CompletionTransition() { return <motion.div className="flex flex-1 flex-col justify-center sm:ml-[15%]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}><p className="serif text-4xl tracking-[-.05em] sm:text-6xl">诊断完成。</p><p className="mt-8 text-sm text-muted">正在整理你的症状……</p></motion.div>; }
