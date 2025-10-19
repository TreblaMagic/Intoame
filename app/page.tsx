import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Operations from "@/components/operations"
import Sustainability from "@/components/sustainability"
import News from "@/components/news"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Operations />
      <Sustainability />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
