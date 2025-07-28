"use client"

import { NavigationItem } from "@/types/portfolio"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useScrollToSection } from "@/hooks/useScrollToSection"

interface NavigationProps {
  name: string
  items: NavigationItem[]
}

export default function Navigation({ name, items }: NavigationProps) {
  const sections = ["hero", ...items.map(item => item.id)]
  const activeSection = useActiveSection(sections)
  const scrollToSection = useScrollToSection()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-white">{name}</div>
          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
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
  )
}
