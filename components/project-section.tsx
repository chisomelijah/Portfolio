"use client"

import { useRef, useContext } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import type { ProjectTag } from "@/types/project"
import { CursorContext } from "@/context/cursor-context"
import { useTheme } from "next-themes"

interface Project {
  id: string
  title: string
  image: string
  category: string
  url: string
  tags: ProjectTag[]
  description: string
}

export default function ProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { setCursorActive } = useContext(CursorContext)
  const { theme } = useTheme()

  const projects: Project[] = [
    {
      id: "huepick",
      title: "HuePick",
      image: "/images/huepick-new.png",
      category: "Color Tool",
      url: "https://hue-pick.vercel.app/",
      tags: ["Design", "React", "Color Tool"],
      description:
        "Generate beautiful color palettes from any image — instantly. Perfect for designers and developers.",
    },
    {
      id: "tabloom",
      title: "Tabloom",
      image: "/images/tabloom-new.png",
      category: "Web App",
      url: "https://tabloom.vercel.app/",
      tags: ["UI/UX", "Web App", "React"],
      description:
        "Turn your small daily actions into a garden of growth. Track habits with a beautiful visual metaphor.",
    },
    {
      id: "shades",
      title: "Shades",
      image: "/images/shades-new.png",
      category: "Color Tool",
      url: "https://shade-maker.vercel.app/",
      tags: ["Design", "React", "Color Tool"],
      description: "Effortless shade generation and perfect color harmony tool for designers and developers.",
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
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Selected Work
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={item} className="group">
            <Link href={`/projects/${project.id}`} scroll={false}>
              <div
                className={`
                  relative overflow-hidden rounded-lg aspect-[16/10] mb-4 cursor-none
                  ${theme !== "dark" ? "ring-1 ring-zinc-200 shadow-sm shadow-zinc-100/80 bg-zinc-50" : "bg-zinc-900"}
                `}
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                {/* Light theme overlay to enhance contrast */}
                {theme !== "dark" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-70 z-10"></div>
                )}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/5 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.category}</p>
                </div>
                <div className="opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
