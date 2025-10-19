"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70">
            Contact us for investor relations, partnerships, or general inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 border border-border text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Address</h3>
            <p className="text-foreground/70">Abuja, Nigeria</p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70">ame@intoame.ng</p>
          </div>

          <div className="bg-white rounded-lg p-8 border border-border text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70">02093203005</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </form>

          <div className="bg-white rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Why Contact Us?</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">
                  <strong>Investor Relations:</strong> Learn about investment opportunities and financial performance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">
                  <strong>Partnerships:</strong> Explore collaboration opportunities in the energy sector
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">
                  <strong>Operations:</strong> Technical inquiries about OPL 241 and our activities
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">
                  <strong>Community:</strong> Information about community development initiatives
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">→</span>
                <span className="text-foreground/80">
                  <strong>Media:</strong> Press inquiries and corporate communications
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
