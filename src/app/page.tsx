import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/Contact";
import { HeroSection } from "@/components/hero-section/HeroSection";
import { ProjectsSection } from "@/components/project-section/ProjectSection";
import { SkillsSection } from "@/components/skills-section/SkillsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
