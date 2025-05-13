"use client"

import { useRef } from "react"
import { Code, Palette, Lightbulb, Figma } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      name: "Design",
      icon: <Palette className="w-5 h-5" />,
      skills: ["UI/UX Design", "Design Systems", "Wireframing", "Prototyping", "Visual Design", "Interaction Design"],
    },
    {
      name: "Development",
      icon: <Code className="w-5 h-5" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "RESTful APIs", "GraphQL"],
    },
    {
      name: "Tools",
      icon: <Figma className="w-5 h-5" />,
      skills: ["Figma", "Framer", "Webflow", "VS Code", "Git", "Storybook", "Vercel"],
    },
    {
      name: "Soft Skills",
      icon: <Lightbulb className="w-5 h-5" />,
      skills: ["Product Strategy", "Team Collaboration", "Client Communication", "Problem Solving", "User Research"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  }

  const tagItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  }

  return (
    <div ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Specialized capabilities developed through years of professional experience
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg expertise-card"
            variants={item}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm">
                <div className="text-zinc-800 dark:text-zinc-200">{category.icon}</div>
              </div>
              <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-100">{category.name}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="text-sm px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300"
                  variants={tagItem}
                  transition={{
                    delay: 0.1 + i * 0.05,
                    duration: 0.2,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
