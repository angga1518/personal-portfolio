import { Client } from "@/types/portfolio"
import Image from "next/image"

interface ClientsSectionProps {
  clients: Client[]
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
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
  )
}
