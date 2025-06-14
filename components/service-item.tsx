import { motion, AnimatePresence } from "framer-motion";

interface ServiceItemProps {
  title: string;
  description: string;
  expanded: boolean;
  onClick: () => void;
  idx: number;
}

export default function ServiceItem({ title, description, expanded, onClick, idx }: ServiceItemProps) {
  return (
    <li>
      <button
        className={`w-full flex items-center justify-between py-4 px-2 text-lg font-medium transition-colors duration-200
          ${expanded ? "text-black" : "text-gray-700 hover:text-black hover:bg-gray-100"}
          focus:outline-none focus:ring-2 focus:ring-black`}
        aria-expanded={expanded}
        aria-controls={`service-desc-${idx}`}
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="ml-4 text-2xl font-bold transition-transform duration-200">
          {expanded ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`service-desc-${idx}`}
            initial={{ opacity: 0, y: 30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ opacity: { duration: 0.4 }, y: { duration: 0.4 }, height: { duration: 0.4 } }}
            className="overflow-hidden pl-2 pr-8"
          >
            <div className="py-4 text-gray-600 text-base">{description}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
} 