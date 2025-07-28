import { Article } from "@/types/portfolio"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import LuminousBlob from "../layout/LuminousBlob"

interface ArticlesSectionProps {
  articles: Article[]
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
      <LuminousBlob className="luminous-blob-7" />
      <LuminousBlob className="luminous-blob-8" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Recent Writings</h2>
        <div className="horizontal-scroll-container">
          <div className="horizontal-scroll-content">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="horizontal-scroll-item-article bg-zinc-800/50 border-zinc-700 hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
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
    </section>
  )
}
