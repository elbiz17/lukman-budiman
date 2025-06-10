"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <Code2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Lukman Budiman
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">
              React.js
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Next.js
            </Badge>
            <Badge variant="secondary" className="text-sm">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Tailwind CSS
            </Badge>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:text-white">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
          <Button size="lg" variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <Button variant="ghost" size="icon" className="rounded-full" onClick={()=> window.open("https://github.com/elbiz17", '_blank')}>
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={()=> window.open("https://www.linkedin.com/in/lukman-budiman-true/", '_blank')}>
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full" onClick={()=> window.location.href = "#contact"}>
            <Mail className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
