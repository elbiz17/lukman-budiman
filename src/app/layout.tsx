import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/navigation/Navigation"
import { Footer } from "@/components/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lukman Budiman - Frontend Developer Portfolio",
  description:
    "Professional frontend developer specializing in React, Next.js, and modern web technologies. View my portfolio and get in touch for your next project.",
  keywords: "frontend developer, react, nextjs, javascript, typescript, portfolio, web development",
  authors: [{ name: "Lukman Budiman" }],
  openGraph: {
    title: "Lukman Budiman - Frontend Developer",
    description: "Professional frontend developer portfolio showcasing modern web applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
