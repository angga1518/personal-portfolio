"use client"

import Navigation from "./components/ui/Navigation"
import Footer from "./components/ui/Footer"
import HeroSection from "./components/sections/HeroSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import SkillsSection from "./components/sections/SkillsSection"
import ContactSection from "./components/sections/ContactSection"

// Import data
import personalData from "@/data/personal.json"
import experiencesData from "@/data/experiences.json"
import projectsData from "@/data/projects.json"
import skillsData from "@/data/skills.json"
import articlesData from "@/data/articles.json"
import clientsData from "@/data/clients.json"

// Import types
import { PersonalInfo, Experience, Project, SkillCategory, Article, Client, NavigationItem } from "@/types/portfolio"

export default function Portfolio() {
  const personal: PersonalInfo = personalData
  const experiences: Experience[] = experiencesData
  const projects: Project[] = projectsData
  const skills: SkillCategory = skillsData
  const articles: Article[] = articlesData
  const clients: Client[] = clientsData

  const navigationItems: NavigationItem[] = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Tech Stacks & Articles" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-dot-pattern text-zinc-100">
      <Navigation name={personal.name} items={navigationItems} />
      
      <HeroSection personal={personal} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} clients={clients} />
      <SkillsSection skills={skills} articles={articles} />
      <ContactSection personal={personal} />
      
      <Footer name={personal.name} />
    </div>
  )
}
