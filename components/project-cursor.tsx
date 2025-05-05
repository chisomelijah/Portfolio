"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface ProjectCursorProps {
  active: boolean
}

export default function ProjectCursor({ active }: ProjectCursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY })
        })
      }
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-opacity duration-150 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        willChange: "transform",
      }}
    >
      <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center">
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}
