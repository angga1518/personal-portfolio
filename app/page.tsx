"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Mail,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [projectImageIndexes, setProjectImageIndexes] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "projects", "skills", "articles", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nextImage = (projectIndex: number, totalImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectIndex: number, totalImages: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]:
        prev[projectIndex] === 0 || prev[projectIndex] === undefined ? totalImages - 1 : prev[projectIndex] - 1,
    }))
  }

  const setImageIndex = (projectIndex: number, imageIndex: number) => {
    setProjectImageIndexes((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }))
  }

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "Jakarta",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of the main dashboard using React and TypeScript",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with design team to implement pixel-perfect UI components",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "Bandung",
      period: "Jun 2020 - Dec 2021",
      description: [
        "Developed responsive web applications using React and Next.js",
        "Integrated RESTful APIs and managed state with Redux",
        "Implemented automated testing with Jest and React Testing Library",
        "Participated in agile development processes and sprint planning",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Jakarta",
      period: "Jan 2019 - May 2020",
      description: [
        "Built landing pages and marketing websites using HTML, CSS, and JavaScript",
        "Worked with WordPress and custom PHP development",
        "Optimized websites for SEO and performance",
        "Collaborated with marketing team on digital campaigns",
      ],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics.",
      images: [
        "/placeholder.svg?height=200&width=300&text=Dashboard+Overview",
        "/placeholder.svg?height=200&width=300&text=Analytics+View",
        "/placeholder.svg?height=200&width=300&text=Product+Management",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with drag-and-drop functionality.",
      images: [
        "/placeholder.svg?height=200&width=300&text=Task+Board",
        "/placeholder.svg?height=200&width=300&text=Calendar+View",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts and interactive maps.",
      images: ["/placeholder.svg?height=200&width=300&text=Weather+App"],
      technologies: ["Vue.js", "OpenWeather API", "Mapbox", "Vuetify"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Platform",
      description: "A full-stack social media application with real-time messaging and content sharing.",
      images: [
        "/placeholder.svg?height=200&width=300&text=Social+Feed",
        "/placeholder.svg?height=200&width=300&text=Profile+Page",
        "/placeholder.svg?height=200&width=300&text=Messaging",
        "/placeholder.svg?height=200&width=300&text=Settings",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website Builder",
      description: "A drag-and-drop website builder specifically designed for creating portfolio websites.",
      images: [
        "/placeholder.svg?height=200&width=300&text=Builder+Interface",
        "/placeholder.svg?height=200&width=300&text=Template+Gallery",
        "/placeholder.svg?height=200&width=300&text=Live+Preview",
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
    "Frameworks/Libraries": ["React", "Next.js", "Vue.js", "Node.js", "Express.js"],
    Tools: ["Git", "Docker", "Webpack", "Figma", "VS Code"],
    Databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  }

  const articles = [
    {
      title: "Building Scalable React Applications",
      platform: "Medium",
      url: "#",
    },
    {
      title: "Modern CSS Techniques for Better UX",
      platform: "dev.to",
      url: "#",
    },
    {
      title: "TypeScript Best Practices in 2024",
      platform: "Medium",
      url: "#",
    },
    {
      title: "The Future of Web Development",
      platform: "dev.to",
      url: "#",
    },
    {
      title: "Optimizing React Performance",
      platform: "Medium",
      url: "#",
    },
  ]

  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120&text=TechCorp" },
    { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120&text=InnovateLab" },
    { name: "DigitalFlow", logo: "/placeholder.svg?height=60&width=120&text=DigitalFlow" },
    { name: "CloudSync", logo: "/placeholder.svg?height=60&width=120&text=CloudSync" },
    { name: "DataViz", logo: "/placeholder.svg?height=60&width=120&text=DataViz" },
    { name: "WebCraft", logo: "/placeholder.svg?height=60&width=120&text=WebCraft" },
    { name: "AppFlow", logo: "/placeholder.svg?height=60&width=120&text=AppFlow" },
    { name: "CodeLab", logo: "/placeholder.svg?height=60&width=120&text=CodeLab" },
  ]

  return (
    <div className="min-h-screen bg-dot-pattern text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Muhammad Erlangga</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "skills", label: "Skills" },
                { id: "articles", label: "Articles" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400" : "text-zinc-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center pb-8">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-20 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent break-words overflow-hidden pb-4">
            Muhammad Erlangga
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-semibold mb-8">Software Engineer</h2>
          <p className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate software engineer with 5+ years of experience building scalable web applications. I specialize in
            React, TypeScript, and modern frontend technologies to create exceptional user experiences.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
        {/* Luminous Aurora Effect */}
        <div className="luminous-blob luminous-blob-1"></div>
        <div className="luminous-blob luminous-blob-2"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-zinc-950"></div>
                <div className="ml-20">
                  <div className="bg-zinc-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm">
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

      {/* Clients Section with Marquee */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted By</h2>
          <div className="relative">
            <div className="marquee-container">
              <div className="marquee-content">
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className="marquee-item">
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
      </section>

      {/* Projects Section - Horizontal Scroll */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
        {/* Luminous Aurora Effect */}
        <div className="luminous-blob luminous-blob-3"></div>
        <div className="luminous-blob luminous-blob-4"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll-content">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="horizontal-scroll-item bg-zinc-800/50 border-zinc-700 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden mt-4"
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
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                              (projectImageIndexes[index] || 0) === imageIndex
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
        {/* Luminous Aurora Effect */}
        <div className="luminous-blob luminous-blob-5"></div>
        <div className="luminous-blob luminous-blob-6"></div>

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

      {/* Articles Section - Horizontal Scroll */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50 relative overflow-hidden">
        {/* Luminous Aurora Effect */}
        <div className="luminous-blob luminous-blob-7"></div>
        <div className="luminous-blob luminous-blob-8"></div>

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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Thinking about your next project? Let's connect and make it happen.
          </p>
          <div className="mb-8">
            <Link
              href="mailto:erlanggamuhammad01@gmail.com"
              className="inline-flex items-center text-2xl text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Mail className="w-6 h-6 mr-2" />
              erlanggamuhammad01@gmail.com
            </Link>
          </div>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-400">© Muhammad Erlangga {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
