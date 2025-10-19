export default function News() {
  const newsItems = [
    {
      date: "October 2024",
      title: "OPL 241 Development Plans Advance",
      excerpt:
        "Oilworld Ltd announces progress on development strategy for the OPL 241 block with enhanced production forecasts.",
      category: "Operations",
    },
    {
      date: "September 2024",
      title: "Into Africa Strengthens Investment Position",
      excerpt:
        "Strategic review confirms Into Africa's commitment to long-term value creation in Nigerian offshore sector.",
      category: "Corporate",
    },
    {
      date: "August 2024",
      title: "Sustainability Report Released",
      excerpt: "Comprehensive report detailing environmental and community initiatives across all operational areas.",
      category: "Sustainability",
    },
  ]

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">News & Updates</h2>
          <p className="text-lg text-foreground/70">Latest developments in our operations and industry insights</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-semibold text-accent mb-2">{item.category}</p>
                  <p className="text-3xl font-bold text-primary/30">📰</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-foreground/60 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-foreground/80 mb-4">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
