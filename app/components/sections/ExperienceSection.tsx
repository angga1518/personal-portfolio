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
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={exp.icon} 
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
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
                        {item}
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
