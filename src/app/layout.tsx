import type { Metadata } from "next"
import { Orbitron, Ubuntu_Mono } from "next/font/google"
import localFont from 'next/font/local'

import "./globals.css"

// define google fonts
const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ubuntu-mono"
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron"
})

const kodeMono = localFont({
  src: './KodeMono-VariableFont_wght.ttf',
  variable: '--font-kode'
})

// default meta data
export const metadata: Metadata = {
  metadataBase: new URL('https://illium.org'),
  title: "Illium: The Endgame Blockchain",
  description: "Powered by zero knowledge tech. Making payments and smart contracts fast, cheap, and private. Launching 2024.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${ubuntuMono.variable} ${kodeMono.variable}`}>{children}</body>
    </html>
  )
}
