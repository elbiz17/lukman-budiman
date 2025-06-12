"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Award } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate frontend developer with expertise in modern web technologies and a keen eye for user experience
            design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A dedicated frontend developer with 2+ years of experience creating responsive, user-friendly web
                  applications using cutting-edge technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-3">What I Do</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I specialize in building modern web applications with React, Next.js, and TypeScript, focusing on
                  performance, accessibility, and exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-3">My Goals</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Continuously learning and adapting to new technologies while delivering high-quality solutions that
                  exceed client expectations and industry standards.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
