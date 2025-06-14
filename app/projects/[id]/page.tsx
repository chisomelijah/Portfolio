"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import type { ProjectDetail } from "@/types/project"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<ProjectDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const getProjectData = () => {
      const projectData: Record<string, ProjectDetail> = {
        huepick: {
          id: "huepick",
          title: "HuePick",
          subtitle: "Color Palette Generator",
          description: "Generate beautiful color palettes from any image — instantly.",
          fullDescription:
            "HuePick is a powerful tool designed for designers and developers who need to extract color palettes from images. Upload any image and instantly get a harmonious color palette that you can use in your designs. The tool supports various color formats including HEX and RGB, making it versatile for different design workflows.",
          image: "/images/huepick-new.png",
          gallery: ["/images/huepick-new.png"],
          url: "https://hue-pick.vercel.app/",
          sourceUrl: "https://github.com/username/huepick",
          tags: ["Next.js", "SaaS", "Web App"],
          technologies: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
          features: [
            "Upload images to extract color palettes",
            "Copy colors in HEX or RGB format",
            "Save palettes for future reference",
            "Light and dark mode support",
            "Responsive design for all devices",
          ],
          challenges: [
            "Implementing accurate color extraction algorithms",
            "Creating an intuitive user interface",
            "Optimizing performance for large images",
            "Ensuring color accessibility",
          ],
          outcomes: [
            "Streamlined color selection process for designers",
            "Positive user feedback on ease of use",
            "Growing user base among design professionals",
          ],
          year: "2025",
          role: "Frontend Developer & UI/UX Designer",
          nextProject: "tabloom",
          prevProject: "shades",
        },
        tabloom: {
          id: "tabloom",
          title: "Tabloom",
          subtitle: "Habit Tracking Visualizer",
          description: "Turn your small daily actions into a garden of growth.",
          fullDescription:
            "Tabloom is a habit tracking application that visualizes your daily habits as a growing garden. Each habit you maintain contributes to the growth of your virtual garden, providing a beautiful and motivating way to track your progress. The application is designed to make habit formation more engaging and rewarding through visual metaphors.",
          image: "/images/tabloom-new.png",
          gallery: ["/images/tabloom-new.png"],
          url: "https://tabloom.vercel.app/",
          sourceUrl: "https://github.com/username/tabloom",
          tags: ["UI/UX", "Web App", "React"],
          technologies: ["React", "Next.js", "TailwindCSS", "Supabase", "Framer Motion"],
          features: [
            "Visual habit tracking with garden metaphor",
            "Daily, weekly, and monthly progress views",
            "Customizable habit categories",
            "Streak tracking and statistics",
            "Reminder notifications",
          ],
          challenges: [
            "Creating engaging visual representations of habits",
            "Designing an intuitive onboarding process",
            "Implementing reliable streak tracking",
            "Balancing gamification with productivity",
          ],
          outcomes: [
            "Increased user engagement with habit tracking",
            "Higher habit completion rates compared to traditional trackers",
            "Featured in productivity blogs and newsletters",
          ],
          year: "2025",
          role: "Frontend Developer & UI/UX Designer",
          nextProject: "shades",
          prevProject: "huepick",
        },
        shades: {
          id: "shades",
          title: "Shades",
          subtitle: "Color Harmony Tool",
          description: "Effortless shade generation and perfect color harmony.",
          fullDescription:
            "Shades is a specialized color tool that helps designers and developers generate harmonious color variations. Starting with a base color, users can create shades, tints, tones, and complementary colors with precise control. The tool is designed to simplify the process of creating cohesive color schemes for websites, applications, and design systems.",
          image: "/images/shades-new.png",
          gallery: ["/images/shades-new.png"],
          url: "https://shade-maker.vercel.app/",
          sourceUrl: "https://github.com/username/shades",
          tags: ["UI/UX", "SaaS", "React"],
          technologies: ["React", "TailwindCSS", "Color Theory Algorithms", "Clipboard API"],
          features: [
            "Generate color variations from a base color",
            "Create complementary, analogous, and triadic color schemes",
            "Adjust saturation, brightness, and contrast",
            "Export color palettes in various formats",
            "Preview colors in UI components",
          ],
          challenges: [
            "Implementing accurate color theory algorithms",
            "Creating an intuitive interface for color manipulation",
            "Ensuring color accessibility and contrast compliance",
            "Optimizing for different color spaces",
          ],
          outcomes: [
            "Adopted by design teams for creating consistent UI color schemes",
            "Integrated into design system workflows",
            "Positive feedback from color theory experts",
          ],
          year: "2025",
          role: "Frontend Developer & UI/UX Designer",
          nextProject: "huepick",
          prevProject: "tabloom",
        },
        rslash: {
          id: "rslash",
          title: "R/Slash",
          subtitle: "Reddit Keyword Tracker",
          description: "Track keywords across Reddit in real-time. Get alerts when specific topics are mentioned in your selected subreddits.",
          fullDescription:
            "R/Slash is a real-time Reddit monitoring tool that empowers users to track keywords and topics across multiple subreddits. Receive instant notifications when your chosen keywords are mentioned, helping you stay on top of trends, discussions, and opportunities. Ideal for marketers, researchers, and power users who want to monitor Reddit conversations efficiently.",
          image: "/images/rslash-preview.png",
          gallery: ["/images/rslash-preview.png"],
          url: "https://r-slash.vercel.app/",
          sourceUrl: "https://github.com/username/rslash",
          tags: ["Reddit", "Web App", "Next.js", "SaaS"],
          technologies: ["Next.js", "React", "TailwindCSS", "Reddit API", "Framer Motion"],
          features: [
            "Track multiple keywords across any subreddit",
            "Real-time notifications and alerts",
            "Customizable keyword and subreddit lists",
            "User-friendly dashboard for monitoring",
            "Responsive design for all devices",
          ],
          challenges: [
            "Efficiently handling Reddit's API rate limits",
            "Building a scalable real-time notification system",
            "Designing an intuitive and clean user interface",
            "Ensuring privacy and security for user data",
          ],
          outcomes: [
            "Helped users discover relevant Reddit discussions instantly",
            "Adopted by social media managers and researchers",
            "Received positive feedback for ease of use and reliability",
          ],
          year: "2025",
          role: "Full Stack Developer & Product Designer",
          nextProject: undefined,
          prevProject: undefined,
        },
      }

      const currentProject = projectData[params.id as string]

      if (currentProject) {
        setProject(currentProject)
      } else {
        // Redirect to 404 or projects page if project not found
        router.push("/projects")
      }

      setLoading(false)
    }

    getProjectData()
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            scroll={false}
            className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">{project.title}</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">{project.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">{project.fullDescription}</p>

              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-zinc-700 dark:text-zinc-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-zinc-700 dark:text-zinc-300">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="list-disc pl-5 mb-8 space-y-2 text-zinc-700 dark:text-zinc-300">
                {project.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className={`p-6 rounded-lg sticky top-24 ${theme !== "dark" ? "bg-zinc-50 shadow-sm ring-1 ring-zinc-100" : "bg-zinc-900"}`}
              >
                <h3 className="text-lg font-bold mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-zinc-500 dark:text-zinc-400">Year</h4>
                    <p>{project.year}</p>
                  </div>

                  {project.client && (
                    <div>
                      <h4 className="text-sm text-zinc-500 dark:text-zinc-400">Client</h4>
                      <p>{project.client}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm text-zinc-500 dark:text-zinc-400">Role</h4>
                    <p>{project.role}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500 dark:text-zinc-400">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full 
                            ${theme !== "dark"
                              ? "bg-white ring-1 ring-zinc-200 text-zinc-700"
                              : "bg-zinc-800 text-zinc-300"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full py-2 px-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </a>

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full py-2 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {project.prevProject && (
              <Link
                href={`/projects/${project.prevProject}`}
                scroll={false}
                className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-4 sm:mb-0"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Project
              </Link>
            )}

            {project.nextProject && (
              <Link
                href={`/projects/${project.nextProject}`}
                scroll={false}
                className="flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Next Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
