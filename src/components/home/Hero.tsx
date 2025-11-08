'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, CheckCircle2, Lock } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroStats } from './HeroStats'
import { trackEvent, events } from '@/lib/analytics'

export function Hero() {
  const trustBadges = [
    { icon: Shield, text: 'Chainlink VRF' },
    { icon: CheckCircle2, text: 'USDT' },
    { icon: Lock, text: 'Open-Source' },
    { icon: Shield, text: 'Non-Profit' },
  ]

  const handleEnterClick = () => {
    trackEvent(events.ENTER_CLICK, { location: 'hero' })
  }

  const handleDonateClick = () => {
    trackEvent(events.DONATE_CLICK, { location: 'hero' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-radial opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-mint/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="block text-balance">Basic income for</span>
            <span className="block text-gradient-mint text-balance">the AI age.</span>
          </h1>

          <p className="text-xl md:text-2xl text-warm/80 mb-8 max-w-3xl mx-auto text-balance">
            Donated today. Transparent on-chain. Weekly USDT dividends to real people.
          </p>

          {/* Live Stats */}
          <div className="mb-10">
            <HeroStats />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="xl"
              className="group"
              onClick={handleEnterClick}
            >
              <Link href="/enter">
                Enter this week's draw
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="xl"
              variant="outline"
              onClick={handleDonateClick}
            >
              <Link href="/donate">
                Donate USDT
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-6 justify-center items-center"
            role="list"
            aria-label="Trust indicators"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-warm/60"
                role="listitem"
              >
                <badge.icon className="h-5 w-5 text-mint" aria-hidden="true" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-mint/50 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-mint rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
