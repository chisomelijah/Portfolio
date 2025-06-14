"use client"

import { useState } from "react"
import { Code, Palette, Layers, Lightbulb } from "lucide-react"
import ServiceCard from "./service-card"

const services = [
  {
    icon: <Palette className="w-6 h-6" />, 
    title: "UI/UX Design",
    description: "Intuitive, beautiful interfaces and seamless user experiences for web and mobile products.",
  },
  {
    icon: <Code className="w-6 h-6" />, 
    title: "Frontend Development",
    description: "Modern, performant, and accessible web apps using React, Next.js, and the latest frontend technologies.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />, 
    title: "Product Strategy",
    description: "Aligning business goals and user needs to deliver impactful digital products and features.",
  },
  {
    icon: <Layers className="w-6 h-6" />, 
    title: "Design Systems",
    description: "Scalable, consistent design systems for rapid development and cohesive brand experiences.",
  },
]

export default function ServicesSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 md:px-8">
        {/* Left: Title & Intro */}
        <div className="md:w-5/12 flex flex-col justify-center relative">
          <h2 className="text-5xl md:text-6xl font-semibold text-zinc-900 dark:text-white mb-6 leading-tight">
            Services
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-md">
            I help teams and founders turn ideas into beautiful, high-performing digital products. Here's what I do best:
          </p>
        </div>
        {/* Right: Service Cards */}
        <div className="md:w-7/12 flex flex-col gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              expanded={activeIdx === idx}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              idx={idx}
              subtleShadow
            />
          ))}
        </div>
      </div>
    </section>
  )
}
