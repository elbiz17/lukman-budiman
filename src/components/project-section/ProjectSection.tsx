"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard built with Next.js, Redux Toolkit, and Tailwind CSS featuring real-time analytics and inventory management.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "Shadcn/UI"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with drag-and-drop functionality using React, RTK Query, and Bootstrap components.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "RTK Query", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing modern design principles with Tailwind CSS and smooth animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts using React hooks and external APIs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React.js", "CSS3", "JavaScript", "Weather API"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating proficiency in modern web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
