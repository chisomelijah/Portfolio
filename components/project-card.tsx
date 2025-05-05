"use client"

import type React from "react"
import { useState, useRef, useContext } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { CursorContext } from "@/context/cursor-context"
import { useTheme } from "next-themes"

interface ProjectProps {
  project: {
    title: string
    image: string
    url: string
    icon?: React.ReactNode
    description: string
    tags: string[]
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { setCursorActive } = useContext(CursorContext)
  const { theme } = useTheme()

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg group transition-all duration-300 h-[380px] block
        ${
          theme !== "dark"
            ? "bg-zinc-50 hover:bg-white border border-zinc-100 shadow-sm"
            : "bg-zinc-800 hover:bg-zinc-700"
        }`}
      onMouseEnter={() => {
        setIsHovered(true)
        setCursorActive(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setCursorActive(false)
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Project Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-500 ease-in-out cursor-none">
        {/* Light theme enhancement */}
        {theme !== "dark" && (
          <div className="absolute inset-0 shadow-inner bg-gradient-to-b from-zinc-100/10 to-zinc-300/20 z-10"></div>
        )}

        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            isHovered ? "scale-105 brightness-[0.4]" : theme !== "dark" ? "brightness-[0.85]" : "brightness-[0.7]"
          }`}
        />
      </div>

      {/* Project Info - Only visible on hover */}
      <div
        className={`absolute inset-0 p-5 flex flex-col justify-end transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <motion.div
          className="bg-white/90 dark:bg-black/90 backdrop-blur-sm text-zinc-900 dark:text-white p-4 rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
              {project.icon}
            </div>
            <h3 className="font-medium text-base">{project.title}</h3>
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">{project.description}</p>

          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-900 dark:text-white text-sm hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Visit site <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
