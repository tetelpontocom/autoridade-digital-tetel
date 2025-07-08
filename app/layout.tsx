import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Autoridade Digital Tetel - Construa Sua Presença Digital Estratégica",
  description:
    "Transforme-se em uma autoridade digital reconhecida com a metodologia comprovada do Tetel. 30+ anos de experiência ajudando líderes políticos e empresariais.",
  keywords: "autoridade digital, marketing político, presença digital, Tetel, Alagoas, consultoria digital",
  authors: [{ name: "Tetel" }],
  openGraph: {
    title: "Autoridade Digital Tetel - Construa Sua Presença Digital Estratégica",
    description: "Metodologia comprovada para líderes que querem se destacar no digital",
    url: "https://autoridadedigital.tetel.online",
    siteName: "Autoridade Digital Tetel",
    images: [
      {
        url: "/tetel-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Tetel - Autoridade Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoridade Digital Tetel",
    description: "Construa sua autoridade digital estratégica",
    images: ["/tetel-photo.jpg"],
  },
  robots: { index: true, follow: true },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
