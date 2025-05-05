"use client"

import { useState, useContext } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { CursorContext } from "@/context/cursor-context"
import { useTheme } from "next-themes"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)
  const { setCursorActive } = useContext(CursorContext)
  const { theme } = useTheme()

  return (
    <div className="my-12 relative">
      <div
        className={`relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4 cursor-none
          ${theme !== "dark" ? "ring-1 ring-zinc-200 shadow-md bg-zinc-50" : "bg-zinc-900"}
        `}
        onMouseEnter={() => setCursorActive(true)}
        onMouseLeave={() => setCursorActive(false)}
      >
        {/* Light theme enhancement */}
        {theme !== "dark" && (
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/20 to-transparent z-10"></div>
        )}

        <Image
          src={images[activeImage] || "/placeholder.svg"}
          alt={`${title} - Image ${activeImage + 1}`}
          fill
          className={`object-cover ${theme !== "dark" ? "contrast-[1.02]" : ""}`}
          priority
        />
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/5 dark:bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-4 flex-wrap">
          {images.map((image, index) => (
            <motion.button
              key={index}
              className={`relative w-20 h-20 rounded-md overflow-hidden 
                ${
                  activeImage === index
                    ? "border-2 border-zinc-900 dark:border-white"
                    : theme !== "dark"
                      ? "border border-zinc-200"
                      : "border border-transparent"
                }
                ${theme !== "dark" ? "shadow-sm" : ""}
              `}
              onClick={() => setActiveImage(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
              {theme !== "dark" && !activeImage && <div className="absolute inset-0 bg-black/5"></div>}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}
