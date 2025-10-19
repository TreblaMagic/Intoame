import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Into Africa - Oil & Gas Exploration",
  description:
    "Into Africa: Powering Nigeria's Energy Future. 2% equity stake in Oilworld Ltd, operator of OPL 241 offshore block in the Dahomey Basin.",
  keywords: "OPL 241, Nigeria, oil and gas, exploration, Dahomey Basin, Oilworld, energy investment",
  openGraph: {
    title: "Into Africa - Oil & Gas Exploration",
    description: "Sustainably driving oil & gas innovation in Nigeria",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
