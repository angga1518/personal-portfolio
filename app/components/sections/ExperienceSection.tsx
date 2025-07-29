import { Experience } from "@/types/portfolio"
import { MapPin, Calendar } from "lucide-react"
import LuminousBlob from "../layout/LuminousBlob"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
      <LuminousBlob className="luminous-blob-1" />
      <LuminousBlob className="luminous-blob-2" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-600"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-zinc-950"></div>
              <div className="ml-12">
                <div className="bg-zinc-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm experience-card">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <div className="flex items-center text-blue-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.company}, {exp.location}
                    </div>
                    <div className="flex items-center text-zinc-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="text-zinc-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span dangerouslySetInnerHTML={{
                          __html: item
                            // Senior Frontend Developer
                            .replace(/Led the development/g, '<strong>Led the development</strong>')
                            .replace(/40%/g, '<strong>40%</strong>')
                            // Frontend Developer
                            .replace(/Developed responsive web applications/g, '<strong>Developed responsive web applications</strong>')
                            .replace(/Integrated RESTful APIs/g, '<strong>Integrated RESTful APIs</strong>')
                            // Junior Web Developer
                            .replace(/Built landing pages and marketing websites/g, '<strong>Built landing pages and marketing websites</strong>')
                            .replace(/Optimized websites for SEO and performance/g, '<strong>Optimized websites for SEO and performance</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
