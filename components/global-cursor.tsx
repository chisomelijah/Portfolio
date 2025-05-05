"use client"

import { useContext, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { CursorContext } from "@/context/cursor-context"

export default function GlobalCursor() {
  const { cursorActive, cursorPosition } = useContext(CursorContext)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use transform: translate3d for hardware acceleration
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPosition.x - 32}px, ${cursorPosition.y - 32}px, 0)`
      }
    }

    // Use requestAnimationFrame for smoother performance
    let animationFrameId: number

    const animate = () => {
      updateCursorPosition()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [cursorPosition])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 z-50 pointer-events-none transition-all duration-200 ${
        cursorActive ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      style={{
        willChange: "transform",
      }}
    >
      <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center">
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}
