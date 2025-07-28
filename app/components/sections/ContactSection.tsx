import { PersonalInfo } from "@/types/portfolio"
import { Mail } from "lucide-react"
import Link from "next/link"
import SocialLinks from "../ui/SocialLinks"

interface ContactSectionProps {
  personal: PersonalInfo
}

export default function ContactSection({ personal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg sm:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto px-4">
          Thinking about your next project? Let's connect and make it happen.
        </p>
        <div className="mb-8">
          <Link
            href={`mailto:${personal.email}`}
            className="inline-flex items-center text-lg sm:text-xl md:text-2xl text-blue-400 hover:text-blue-300 transition-colors break-all"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
            <span className="break-all">{personal.email}</span>
          </Link>
        </div>
        <SocialLinks />
      </div>
    </section>
  )
}
