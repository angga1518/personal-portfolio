import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <Link href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
        <Github className="w-8 h-8" />
      </Link>
      <Link href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
        <Linkedin className="w-8 h-8" />
      </Link>
      <Link href="#" className="text-zinc-400 hover:text-blue-400 transition-colors">
        <Twitter className="w-8 h-8" />
      </Link>
    </div>
  )
}
