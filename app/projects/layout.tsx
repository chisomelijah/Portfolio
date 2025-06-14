import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Chisom Elijah",
  description: "Detailed view of projects by Chisom Elijah",
}

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
