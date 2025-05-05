import type React from "react"
export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault()

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    // Update URL without page reload
    window.history.pushState({}, "", `#${id}`)
  }
}
