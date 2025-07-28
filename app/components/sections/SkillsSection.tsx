import { SkillCategory } from "@/types/portfolio"
import { Badge } from "../ui/badge"
import LuminousBlob from "../layout/LuminousBlob"

interface SkillsSectionProps {
  skills: SkillCategory
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
      <LuminousBlob className="luminous-blob-5" />
      <LuminousBlob className="luminous-blob-6" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">My Tech Stack & Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-zinc-800/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <Badge key={index} className="bg-zinc-700/50 text-zinc-100 hover:bg-zinc-600/50 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
