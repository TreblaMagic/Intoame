export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Into Africa</h2>
            <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
            Into Africa Mining and Exploration Nigeria Plc is a strategic investor in Nigeria's oil and gas sector, holding a 2% equity stake in Oilworld
              Ltd, the majority stakeholder and operator of the OPL 241 offshore block located in the Dahomey Basin.
            </p>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Our mission is to contribute to Nigeria's energy security and economic development through responsible,
              sustainable oil and gas exploration and production. We partner with experienced operators and stakeholders
              to unlock the potential of world-class hydrocarbon resources.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Strategic Partnership</h3>
                  <p className="text-foreground/70">Aligned with Oilworld Ltd's vision for sustainable development</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proven Expertise</h3>
                  <p className="text-foreground/70">Deep knowledge of Nigerian offshore operations</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable Growth</h3>
                  <p className="text-foreground/70">
                    Committed to environmental responsibility and community development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/oil-rig-offshore-platform.jpg" alt="Oil rig" className="rounded-lg shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
