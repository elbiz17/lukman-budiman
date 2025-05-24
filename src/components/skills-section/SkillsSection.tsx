"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Palette, Database, Wrench } from "lucide-react"
import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript"],
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Tailwind CSS", "CSS3", "Bootstrap", "Shadcn/UI"],
    },
    {
      title: "State Management",
      icon: <Database className="w-6 h-6" />,
      skills: ["Redux Toolkit", "RTK Query", "Redux", "Context API"],
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VS Code", "GitHub", "Git", "npm/yarn", "Auth.js"],
    },
  ]

  const technologies = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn/UI",
    "Tabler Icons",
    "Redux",
    "Redux Toolkit",
    "RTK Query",
    "Auth.js",
    "GitHub",
    "VS Code",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit of modern web development technologies and frameworks.
          </p>
        </motion.div>

        {/* Technology Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-sm py-2 px-4 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
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
