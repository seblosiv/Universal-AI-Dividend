import { Hero } from '@/components/home/Hero'
import { SocialProof } from '@/components/home/SocialProof'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Interactives } from '@/components/home/Interactives'
import { TransparencyPanel } from '@/components/home/TransparencyPanel'
import { WinnerCarousel } from '@/components/home/WinnerCarousel'
import { FutureDividend } from '@/components/home/FutureDividend'
import { Faq } from '@/components/home/Faq'
import { FinalCta } from '@/components/home/FinalCta'
import { Footer } from '@/components/Footer'
import { trackEvent, events } from '@/lib/analytics'

export default function HomePage() {
  // Track page view on client-side via useEffect in a client component
  // or use PostHog's automatic pageview tracking

  return (
    <main className="min-h-screen">
      {/* Hero Section - Above the fold */}
      <Hero />

      {/* Social Proof */}
      <SocialProof />

      {/* How It Works */}
      <HowItWorks />

      {/* Interactive Demos */}
      <Interactives />

      {/* Transparency Panel */}
      <TransparencyPanel />

      {/* Recent Winners */}
      <WinnerCarousel />

      {/* Future Vision */}
      <FutureDividend />

      {/* FAQ */}
      <Faq />

      {/* Final CTA */}
      <FinalCta />

      {/* Footer */}
      <Footer />
    </main>
  )
}
