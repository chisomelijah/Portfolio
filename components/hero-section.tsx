"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { smoothScroll } from "@/utils/scroll"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden"
          >
            <Image
              src="/images/profile.png"
              alt="Chisom"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Introduction text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4" // Increased space between elements
          >
            <h1 className="text-2xl md:text-3xl font-medium">
              Chisom Stanley | Product Developer
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-2xl mt-5">
              I'm a Product Developer with 5 years of experience designing digital products that users actually love. I specialize in creating solutions where beautiful design meets seamless functionality. Explore my work below 👇🏽.
            </p>
          </motion.div>


          {/* Skills tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-2 pt-4"
          >
            {["Product Design", "UI/UX Design", "Interaction Design", "Web Design"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-800 dark:text-zinc-200"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => smoothScroll(e, "projects")}
              className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#connect"
              onClick={(e) => smoothScroll(e, "connect")}
              className="px-6 py-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium flex items-center justify-center gap-2 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
