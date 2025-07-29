import { useState, useEffect } from "react"

export const useActiveSection = (sections: string[]) => {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      // Special case for page bottom to activate "Contact"
      const buffer = 50 // pixels
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - buffer

      if (isAtBottom) {
        // Force "Contact" to be active when at bottom of page
        setActiveSection("contact")
        return // Exit early, don't run the normal scroll-spy logic
      }

      // Original scroll-spy logic (only runs if NOT at bottom)
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
  }, [sections])

  return activeSection
}
