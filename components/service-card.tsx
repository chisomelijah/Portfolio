import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  expanded: boolean;
  onClick: () => void;
  idx: number;
  subtleShadow?: boolean;
}

export default function ServiceCard({ icon, title, description, expanded, onClick, idx, subtleShadow }: ServiceCardProps) {
  return (
    <div className="w-full">
      <button
        className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-xl bg-white dark:bg-zinc-900 ${subtleShadow ? "shadow-sm" : "shadow-md"} transition-all duration-200 border border-zinc-100 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-primary-500 group ${expanded ? "ring-2 ring-primary-500" : "hover:shadow-md hover:-translate-y-1"}`}
        aria-expanded={expanded}
        aria-controls={`service-desc-${idx}`}
        onClick={onClick}
      >
        <span className="flex items-center gap-3">
          <span className="text-primary-500 text-2xl">{icon}</span>
          <span className="font-light text-base md:text-lg text-zinc-900 dark:text-white">{title}</span>
        </span>
        <span className="ml-4 text-2xl font-bold transition-transform duration-200">
          {expanded ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`service-desc-${idx}`}
            initial={{ opacity: 0, y: 24, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -16, height: 0 }}
            transition={{ opacity: { duration: 0.3 }, y: { duration: 0.4 }, height: { duration: 0.4 } }}
            className="overflow-hidden px-6 pb-4"
          >
            <div className="mt-3 text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 