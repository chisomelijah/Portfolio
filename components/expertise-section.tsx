import { motion } from "framer-motion";
import { Palette, Code, Lightbulb, Layers } from "lucide-react";

const expertise = [
  {
    icon: <Palette className="w-6 h-6" />, 
    title: "UI/UX Design",
    description: "Crafting delightful, user-centered interfaces for web and mobile.",
  },
  {
    icon: <Code className="w-6 h-6" />, 
    title: "Frontend Engineering",
    description: "Building robust, scalable apps with React, Next.js, and TypeScript.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />, 
    title: "Product Strategy",
    description: "Aligning user needs and business goals for maximum impact.",
  },
  {
    icon: <Layers className="w-6 h-6" />, 
    title: "Design Systems",
    description: "Creating scalable, consistent systems for rapid product development.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white mb-10 text-center">Expertise</h2>
        <div className="relative flex flex-col gap-12 md:gap-16">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full z-0" />
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex items-start gap-6 md:gap-10 z-10"
            >
              {/* Dot */}
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-primary-500/90 border-4 border-white dark:border-zinc-900 flex items-center justify-center shadow-sm">
                  <span className="text-white dark:text-primary-100">{item.icon}</span>
                </div>
                {/* Line extension for last item */}
                {idx !== expertise.length - 1 && (
                  <div className="flex-1 w-0.5 bg-zinc-200 dark:bg-zinc-800 mt-1" />
                )}
              </div>
              {/* Content */}
              <div className="pt-1">
                <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 