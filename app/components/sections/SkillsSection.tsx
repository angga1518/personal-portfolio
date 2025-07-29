import { SkillCategory, Article } from "@/types/portfolio"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import LuminousBlob from "../layout/LuminousBlob"

interface SkillsSectionProps {
  skills: SkillCategory
  articles: Article[]
}

export default function SkillsSection({ skills, articles }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
      <LuminousBlob className="luminous-blob-5" />
      <LuminousBlob className="luminous-blob-6" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Tech Stacks & Articles</h2>
        
        {/* Tech Stacks Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-zinc-800/50 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold text-blue-400 mb-4">{category}</h4>
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

        {/* Visual Separator */}
        <hr className="my-16 sm:my-20 border-zinc-700/80" />

        {/* Articles Section */}
        <div>
          <div className="flex justify-center w-full">
            <div className="flex gap-6 pb-4 pt-2">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="w-full max-w-sm bg-zinc-800/50 border-zinc-700 hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-blue-400">Published on {article.platform}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={article.url}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
