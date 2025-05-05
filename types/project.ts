export type ProjectTag = "UI/UX" | "Web App" | "React" | "Design" | "Color Tool" | "Next.js"

export interface ProjectDetail {
  id: string
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  gallery?: string[]
  url: string
  sourceUrl?: string
  tags: ProjectTag[]
  technologies: string[]
  features: string[]
  challenges: string[]
  outcomes: string[]
  year: string
  client?: string
  role: string
  nextProject?: string
  prevProject?: string
}
