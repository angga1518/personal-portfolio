import { PersonalInfo } from "@/types/portfolio"

interface HeroSectionProps {
  personal: PersonalInfo
}

export default function HeroSection({ personal }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-48 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center pb-8">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent break-words overflow-hidden pb-4">
          {personal.name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-semibold mb-8">{personal.title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
          {personal.description}
        </p>
      </div>
    </section>
  )
}
