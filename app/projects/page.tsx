"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import type { ProjectTag } from "@/types/project"

export default function ProjectsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isRedirecting, setIsRedirecting] = useState(true)

  useEffect(() => {
    // Check if there's a filter parameter
    const filter = searchParams.get("filter") as ProjectTag | "all" | null

    // Redirect to the projects section on the home page with the filter if provided
    if (filter) {
      router.push(`/#projects?filter=${filter}`)
    } else {
      router.push("/#projects")
    }

    // Set a timeout to show a message if redirection takes too long
    const timeout = setTimeout(() => {
      setIsRedirecting(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center">
      {isRedirecting ? (
        <div className="w-8 h-8 border-4 border-zinc-300 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
      ) : (
        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            If you are not automatically redirected, please click the link below.
          </p>
          <a href="/#projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Go to Projects
          </a>
        </div>
      )}
    </div>
  )
}
