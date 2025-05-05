"use client"

import { useRef } from "react"
import ProjectSection from "@/components/project-section"
import SkillsSection from "@/components/skills-section"
import ServicesSection from "@/components/services-section"
import ConnectSection from "@/components/connect-section"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import { useSearchParams } from "next/navigation"

export default function Home() {
  // Refs for scrolling
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const connectRef = useRef<HTMLElement>(null)

  // Get search params for filtering
  const searchParams = useSearchParams()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <ProjectSection />
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} id="services" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <ServicesSection />
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <SkillsSection />
          </div>
        </section>

        {/* Connect Section */}
        <section ref={connectRef} id="connect" className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">
            <ConnectSection />
          </div>
        </section>
      </main>

      <footer className="py-8 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-4 text-center text-zinc-600 dark:text-zinc-500 text-sm">
          © {new Date().getFullYear()} Chisom Elijah. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
