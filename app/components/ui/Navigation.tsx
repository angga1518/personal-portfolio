"use client"

import { useState } from "react"
import { NavigationItem } from "@/types/portfolio"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useScrollToSection } from "@/hooks/useScrollToSection"

interface NavigationProps {
  name: string
  items: NavigationItem[]
}

export default function Navigation({ name, items }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sections = ["hero", ...items.map(item => item.id)]
  const activeSection = useActiveSection(sections)
  const scrollToSection = useScrollToSection()

  const handleMenuItemClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-white truncate">{name}</div>
          
          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-zinc-300 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-zinc-950/95 backdrop-blur-md`}>
        <div className="px-4 py-6 space-y-3 border-t border-zinc-800">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className={`block w-full text-left py-4 px-4 text-base font-medium transition-all duration-200 rounded-lg ${
                activeSection === item.id 
                  ? "text-blue-400 bg-blue-400/10 border border-blue-400/20" 
                  : "text-zinc-300 hover:text-white hover:bg-zinc-800/50 active:bg-zinc-700/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}
