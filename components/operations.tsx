export default function Operations() {
  const blockDetails = [
    {
      label: "Location",
      value: "Dahomey Basin, Offshore Nigeria",
      description: "Shallow offshore, 40-750 ft water depth",
    },
    {
      label: "Block Size",
      value: "1,182 sq km",
      description: "OPL 241 concession area",
    },
    {
      label: "Estimated Resources",
      value: "370 MMbbl STOOIP",
      description: "Plus 5 TCF of natural gas",
    },
    {
      label: "Discoveries",
      value: "2 Wells",
      description: "Epiya and Baba-1 hydrocarbon discoveries",
    },
  ]

  const partners = [
    { name: "Oilworld Ltd", stake: "70%", role: "Operator" },
    { name: "Owena Energy Ltd", stake: "30%", role: "Partner" },
  ]

  return (
    <section id="operations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">OPL 241 Block Overview</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A world-class offshore asset with significant hydrocarbon potential in Nigeria's prolific Dahomey Basin
          </p>
        </div>

        {/* Block Details Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {blockDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
              <p className="text-sm font-semibold text-accent mb-2">{detail.label}</p>
              <p className="text-2xl font-bold text-primary mb-2">{detail.value}</p>
              <p className="text-sm text-foreground/70">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Technical Evaluation</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/80">3-D seismic studies completed and interpreted</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/80">Schlumberger and PGS evaluations conducted</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/80">Tie-back potential to Agip's ABO FPSO</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/80">Proximity to ExxonMobil's Erha Field infrastructure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span className="text-foreground/80">Multiple development scenarios evaluated</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Partnership Structure</h3>
            <div className="space-y-6">
              {partners.map((partner, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-b-0">
                  <p className="font-semibold text-foreground mb-2">{partner.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-bold text-lg">{partner.stake}</span>
                    <span className="text-sm text-foreground/70">{partner.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground/80">
                <span className="font-semibold">Into Africa:</span> 2% equity stake in Oilworld Ltd
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-lg overflow-hidden border border-border">
          <img src="/map-of-nigeria-dahomey-basin-offshore.jpg" alt="OPL 241 Location Map" className="w-full h-96 object-cover" />
        </div>
      </div>
    </section>
  )
}
