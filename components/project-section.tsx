"use client"

import { useRef, useContext } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import type { ProjectTag } from "@/types/project"

interface Project {
  id: string
  title: string
  image: string
  url: string
  tags: ProjectTag[]
  description: string
}

export default function ProjectSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.2 })

  const projects: Project[] = [
    {
      id: "huepick",
      title: "HuePick",
      image: "/images/huepick-new.png",
      url: "https://hue-pick.vercel.app/",
      tags: ["UI/UX", "React", "SaaS", "Web App"],
      description:
        "Generate beautiful color palettes from any image — instantly. Perfect for designers and developers.",
    },
    {
      id: "tabloom",
      title: "Tabloom",
      image: "/images/tabloom-new.png",
      url: "https://tabloom.vercel.app/",
      tags: ["UI/UX", "Web App", "React", 'SaaS'],
      description:
        "Turn your small daily actions into a garden of growth. Track habits with a beautiful visual metaphor.",
    },
    {
      id: "shades",
      title: "Shades",
      image: "/images/shades-new.png",
      url: "https://shade-maker.vercel.app/",
      tags: ["SaaS", "React", "Web App", "UI/UX"],
      description: "Effortless shade generation and perfect color harmony tool for designers and developers.",
    },
    {
      id: "rslash",
      title: "R/Slash",
      image: "/images/rslash-preview.png",
      url: "https://r-slash.vercel.app/",
      tags: ["Reddit", "Web App", "Next.js", "SaaS"],
      description:
        "Track keywords across Reddit in real-time. Get alerts when specific topics are mentioned in your selected subreddits.",
    },
  ]

  const filteredProjects = projects

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }



  return (
    <div ref={ref} className="py-16 relative">
      <div className="mb-12">
        <div className="text-3xl font-bold text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Selected Work
          </motion.h2>
        </div>
        <div className="mt-3 text-center text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of projects showcasing my skills in design, development, and product thinking.
          </motion.p>
        </div>
      </div>

      <div className="space-y-6 max-w-5xl mx-auto">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={item}
          >
            <div className="group flex flex-col md:flex-row items-start md:items-stretch gap-4 md:gap-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 border-[0.5px] px-6 md:px-10 py-10 transition-all duration-300
               dark:bg-transparent dark:bg-zinc-900
               hover:bg-zinc-100
               dark:hover:shadow-md dark:hover:-translate-y-1 dark:hover:bg-zinc-800/60">
              {/* Number */}
              <div className="flex flex-row md:flex-col items-center justify-start min-w-0 md:min-w-[3.5rem] mr-0 md:mr-2 pt-1 mb-2 md:mb-0">
                <span className="font-extrabold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 w-12 text-left md:text-right tabular-nums select-none">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
              </div>
              {/* Main Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex flex-row items-center gap-2 flex-wrap">
                  <span className="font-bold text-xl md:text-2xl text-zinc-900 dark:text-white">
                    {project.title}
                  </span>
                  <span className="text-xl text-zinc-400 font-bold"></span>
                  <span className="font-bold text-xl md:text-2xl text-zinc-500 dark:text-zinc-300">
                  </span>
                </div>
                <div className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-normal">
                  {project.description}
                </div>
              </div>
              {/* Tags & Button */}
              <div className="flex flex-col items-start md:items-end min-w-0 md:min-w-[140px] ml-0 md:ml-4 mt-4 md:mt-0 w-full md:w-auto">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 transition-colors duration-200 font-medium"
                    >
                      <motion.span whileHover={{ scale: 1.08 }}>{tag}</motion.span>
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block mt-4 px-4 py-1.5 rounded-lg text-sm font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-white/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-zinc-700 dark:focus:ring-offset-zinc-900"
                  tabIndex={0}
                >
                  View Project
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
