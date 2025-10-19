export default function Sustainability() {
  const commitments = [
    {
      title: "Environmental Stewardship",
      description:
        "Committed to minimizing environmental impact through best practices in offshore operations and marine ecosystem protection.",
      icon: "🌍",
    },
    {
      title: "Community Development",
      description:
        "Supporting host communities through employment opportunities, infrastructure development, and social investment programs.",
      icon: "👥",
    },
    {
      title: "Operational Excellence",
      description: "Maintaining highest standards of safety, health, and operational efficiency across all activities.",
      icon: "⚙️",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Full adherence to Nigerian petroleum regulations and international best practices in governance and reporting.",
      icon: "✓",
    },
  ]

  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sustainability & Community</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our commitment to responsible energy development and positive impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{commitment.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{commitment.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            To be a responsible energy partner that contributes meaningfully to Nigeria's economic development while
            maintaining the highest standards of environmental protection and community engagement. We believe
            sustainable energy development is essential for Africa's future prosperity.
          </p>
        </div>
      </div>
    </section>
  )
}
