import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lukman Budiman</h3>
            <p className="text-slate-300 mb-4">
              Frontend Developer passionate about creating exceptional user experiences with modern web technologies.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="block text-slate-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-slate-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="space-y-2 text-slate-300">
              <p>React.js & Next.js</p>
              <p>TypeScript & JavaScript</p>
              <p>Tailwind CSS & Bootstrap</p>
              <p>Redux & RTK Query</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Lukman Budiman © 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
