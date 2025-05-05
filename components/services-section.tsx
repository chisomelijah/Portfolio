"use client"

import { useRef } from "react"
import { Code, Palette, Layers, Lightbulb } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "UI/UX Design",
      icon: <Palette className="w-5 h-5" />,
      description: "Creating intuitive interfaces with a focus on user experience and visual aesthetics.",
      useCases: ["Web Applications", "Mobile Apps", "Design Systems"],
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5" />,
      description: "Building responsive and interactive web applications using modern frameworks.",
      useCases: ["React Applications", "Next.js Sites", "Interactive Dashboards"],
    },
    {
      title: "Product Strategy",
      icon: <Lightbulb className="w-5 h-5" />,
      description: "Developing product strategies that align with business goals and user needs.",
      useCases: ["SaaS Products", "Digital Platforms", "Feature Planning"],
    },
    {
      title: "Design Systems",
      icon: <Layers className="w-5 h-5" />,
      description: "Creating scalable design systems for consistent user experiences across products.",
      useCases: ["Component Libraries", "Style Guides", "Documentation"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Specialized offerings to help bring your digital products to life
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-zinc-100 dark:bg-zinc-900 p-7 rounded-lg transition-all duration-300 flex flex-col hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:shadow-md dark:hover:shadow-zinc-800/30 group"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-sm group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors">
                <div className="text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="font-medium text-lg text-zinc-900 dark:text-zinc-100">{service.title}</h3>
            </div>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors mb-4">
              {service.description}
            </p>
            <div className="mt-auto">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Use Cases</h4>
              <div className="flex flex-wrap gap-2">
                {service.useCases.map((useCase, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white dark:bg-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
