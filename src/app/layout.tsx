import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Universal AI Dividend | Basic income for the AI age",
  description: "Donated today. Transparent on-chain. Weekly USDT dividends to real people. Join this week's draw or donate to support the future of AI dividends.",
  keywords: ["AI dividend", "universal basic income", "UBI", "blockchain", "USDT", "donations", "philanthropy"],
  authors: [{ name: "Universal AI Dividend Foundation" }],
  creator: "Universal AI Dividend",
  publisher: "Universal AI Dividend Foundation",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://universalaidividend.org'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Universal AI Dividend | Basic income for the AI age",
    description: "Donated today. Transparent on-chain. Weekly USDT dividends to real people.",
    siteName: "Universal AI Dividend",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Universal AI Dividend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal AI Dividend | Basic income for the AI age",
    description: "Donated today. Transparent on-chain. Weekly USDT dividends to real people.",
    images: ["/og-image.png"],
    creator: "@UniversalAIDivd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
