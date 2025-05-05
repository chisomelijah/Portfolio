"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

interface CursorContextType {
  cursorActive: boolean
  setCursorActive: (active: boolean) => void
  cursorPosition: { x: number; y: number }
}

export const CursorContext = createContext<CursorContextType>({
  cursorActive: false,
  setCursorActive: () => {},
  cursorPosition: { x: 0, y: 0 },
})

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorActive, setCursorActive] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  return (
    <CursorContext.Provider value={{ cursorActive, setCursorActive, cursorPosition }}>
      {children}
    </CursorContext.Provider>
  )
}
