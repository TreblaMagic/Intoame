"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/offshore-oil-platform-in-ocean.jpg" alt="Offshore oil platform" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center items-center text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-accent/20 border border-accent rounded-full">
            <span className="text-accent font-semibold text-sm">Powering Nigeria's Energy Future</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Into Africa</h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Strategic investment in Nigeria's offshore oil and gas sector. 2% equity stake in Oilworld Ltd, operator of
            the OPL 241 block in the Dahomey Basin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Learn More
            </button>
            <button className="px-8 py-3 bg-white/20 text-white border border-white rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm">
              Investor Relations
            </button>
          </div>
        </div>

        <div className={`absolute bottom-8 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </div>
      </div>
    </section>
  )
}
