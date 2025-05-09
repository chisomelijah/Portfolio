"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { smoothScroll } from "@/utils/scroll"
import MobileNav from "./mobile-nav"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    setMounted(true)

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "connect", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pb-4">
      <div className="flex items-center justify-center w-full px-4 md:px-0">
        <div className="md:hidden">
          <MobileNav />
        </div>

        <nav className="hidden md:block bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-md px-4 py-2.5 rounded-full">
          <ul className="flex items-center space-x-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => smoothScroll(e, item.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-regular transition-colors ${activeSection === item.id
                    ? "text-zinc-900 dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-full"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block absolute right-6">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && <>{theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}</>}
          </button>
        </div>
      </div>
    </header>
  )
}
