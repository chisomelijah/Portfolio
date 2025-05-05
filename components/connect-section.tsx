"use client"

import { useRef } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function ConnectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "#",
      username: "stanley.chisom042@gmail.com",
      label: "Direct Communication",
      color: "bg-black dark:bg-zinc-800",
      textColor: "text-white dark:text-zinc-100",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/chisom-elijah-117212213/",
      username: "Chisom Elijah",
      label: "Professional Presence",
      color: "bg-[#0077B5] dark:bg-[#0077B5]/80",
      textColor: "text-white dark:text-white",
    },
    {
      name: "X",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: "https://x.com/iamchisomelijah",
      username: "@iamchisomelijah",
      label: "Thoughts and Process",
      color: "bg-zinc-900 dark:bg-zinc-800",
      textColor: "text-white dark:text-zinc-100",
    },
    {
      name: "Dribbble",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.23 8.21c-.36-.69-1.35-.69-2.18-.57-.96.11-2.09.49-3.36 1.22.34.59.62 1.22.84 1.88.93-.32 2.1-.56 3.5-.56 1.23 0 2.08.32 2.08.32-.36-1.12-.5-1.49-.88-2.29zM12 3.8c-4.55 0-8.2 3.65-8.2 8.2 0 4.55 3.65 8.2 8.2 8.2 4.55 0 8.2-3.65 8.2-8.2 0-4.55-3.65-8.2-8.2-8.2zm2.76 9.38c.15-.35.29-.71.4-1.09-1.13.37-2.43.59-3.8.59-1.37 0-2.67-.22-3.8-.59.11.38.25.74.4 1.09.66.18 1.39.29 2.18.29h2.44c.79 0 1.52-.11 2.18-.29zm-7.99-5.15c-.36.69-.57 1.46-.57 2.29 0 .61.11 1.19.3 1.73.96-.23 2.04-.36 3.17-.36 1.13 0 2.21.13 3.17.36.19-.54.3-1.12.3-1.73 0-.83-.21-1.6-.57-2.29-.66-.18-1.39-.29-2.18-.29h-2.44c-.79 0-1.52.11-2.18.29zm2.18 9.98c-1.13 0-2.21-.13-3.17-.36-.19.54-.3 1.12-.3 1.73 0 .83.21 1.6.57 2.29.66.18 1.39.29 2.18.29h2.44c.79 0 1.52-.11 2.18-.29.36-.69.57-1.46.57-2.29 0-.61-.11-1.19-.3-1.73-.96.23-2.04.36-3.17.36z" />
        </svg>
      ),
      url: "https://dribbble.com/chisomelijah",
      username: "Chisom Elijah",
      label: "Visual Showcase",
      color: "bg-[#EA4C89] dark:bg-[#EA4C89]/80",
      textColor: "text-white dark:text-white",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>

      <motion.p
        className="text-zinc-600 dark:text-zinc-400 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Open to collaborations and new opportunities
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} ${link.textColor} p-5 rounded-lg flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group`}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              {link.icon}
            </div>
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg">{link.name}</h3>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm opacity-80">{link.label}</p>
              <p className="text-xs mt-1 opacity-60 truncate">{link.username}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}
