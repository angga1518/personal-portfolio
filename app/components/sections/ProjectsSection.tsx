import { Project, Client } from "@/types/portfolio"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LuminousBlob from "../layout/LuminousBlob"
import { useProjectImageSlider } from "@/hooks/useProjectImageSlider"

interface ProjectsSectionProps {
  projects: Project[]
  clients: Client[]
}

export default function ProjectsSection({ projects, clients }: ProjectsSectionProps) {
  const { projectImageIndexes, nextImage, prevImage, setImageIndex } = useProjectImageSlider()

  // Create enough duplicates for seamless scrolling
  const duplicatedClients = [...clients, ...clients, ...clients]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <LuminousBlob className="luminous-blob-3" />
      <LuminousBlob className="luminous-blob-4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        {/* Featured Projects Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-zinc-300">Featured Projects</h3>
          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll-content">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="horizontal-scroll-item bg-zinc-700/50 border-zinc-600 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden mt-4"
                >
                  <div className="relative overflow-hidden rounded-t-lg group">
                    <Image
                      src={project.images[projectImageIndexes[index] || 0] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${(projectImageIndexes[index] || 0) + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300"
                    />

                    {/* Navigation arrows - only show if more than 1 image */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage(index, project.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => nextImage(index, project.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Dot indicators - only show if more than 1 image */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() => setImageIndex(index, imageIndex)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${(projectImageIndexes[index] || 0) === imageIndex
                                ? "bg-blue-400"
                                : "bg-white/50 hover:bg-white/70"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Link
                        href={project.liveUrl}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Link>
                      <Link
                        href={project.githubUrl}
                        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-zinc-300">Trusted by Leading Companies</h3>
          <div className="relative">
            <div className="marquee-container">
              <div className="marquee-content">
                {duplicatedClients.map((client, index) => (
                  <div key={`${client.name}-${index}`} className="marquee-item">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
