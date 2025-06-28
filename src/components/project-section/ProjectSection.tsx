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
      title: "B2B (Expense Management System)",
      description:
        "Expenses Management System B2B menggunakan Next.js, Tabler Ul, dan Redux. ",
      image: "/images/b2b-expense.jpg",
      technologies: ["Next JS", "Redux", "Tabler UI", "Typescript", "Echart", "Highchart", "Rsuite"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Loan Management System (X-LOS)",
      description:
        "Loan Management System menggunakan Next.js, shadcn/ui, dan Redux Toolkit dengan RTK Query. ",
      image: "/images/x-los.png",
      technologies: ["Next JS", "Redux Toolkit + RTK Query",  "Shadcn UI", "Typescript", "Echart", "Auth JS", "Formik", "Mqtt"],
      github: null,
      demo: null,
      featured: true,
    },
    {
      title: "Progressive Web Apps (E-Commerce)",
      description:
        "",
      image: "/images/luxspace.png",
      technologies: ["React.js", "Tailwind CSS"],
      github: "https://github.com/elbiz17/luxspace_pwa",
      demo: "https://luxspace-pwa-eight-gamma.vercel.app/",
      featured: false,
    },
    
    {
      title: "Landing Page dan Admin Sistem Fotografi",
      description:
        "Desain halaman landing dan admin sistem foto untuk kebutuhan website fotografi",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Shadcn UI", "TypeScript", "Prisma", "Mysql", "Railway", "Supabase", "Docker"],
      github: "#",
      demo: "https://photo-studio-project-production.up.railway.app/",
      featured: false,
    },
    // {
    //   title: "Weather App",
    //   description: "Real-time weather application with location-based forecasts using React hooks and external APIs.",
    //   image: "/placeholder.svg?height=300&width=500",
    //   technologies: ["React.js", "CSS3", "JavaScript", "Weather API"],
    //   github: "#",
    //   demo: "#",
    //   featured: false,
    // },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating proficiency in modern web development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                    className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && <Badge className="absolute dark:text-white top-4 left-4 bg-blue-600">Featured</Badge>}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <Button disabled={project.github == null} size="icon" variant="ghost" className="h-8 w-8" onClick={() => window.open(`${project.github}`, '_blank')}>
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button disabled={project.demo == null} size="icon" variant="ghost" className="h-8 w-8" onClick={() => window.open(`${project.demo}`, '_blank')}>
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
                    <Button disabled={project.demo == null} size="sm" className="flex-1" onClick={() => window.open(`${project.demo}`, '_blank')}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Demo
                    </Button>
                    <Button disabled={project.github == null} size="sm" variant="outline" className="flex-1" onClick={() => window.open(`${project.github}`, '_blank')}>
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
