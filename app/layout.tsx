import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorProvider } from "@/context/cursor-context"
import GlobalCursor from "@/components/global-cursor"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Chisom Elijah - Product Developer",
  description: "Product developer specializing in UI/UX design and frontend development",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${GeistSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorProvider>
            {children}
            <GlobalCursor />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
