"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface CustomCursorProps {
  x: number
  y: number
  icon?: React.ReactNode
}

export default function CustomCursor({ x, y, icon }: CustomCursorProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      animate={{ x: x - 32, y: y - 32 }}
      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
    >
      <div className="w-16 h-16 rounded-full bg-[#121212] flex items-center justify-center">
        {icon ? <span className="text-white">{icon}</span> : <ArrowUpRight className="w-5 h-5 text-white" />}
      </div>
    </motion.div>
  )
}
