'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Gift } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { trackEvent, events } from '@/lib/analytics'

export function FinalCta() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-mint/10 via-sky/10 to-gold/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Ready to join the{' '}
            <span className="text-gradient-mint">future of income</span>?
          </h2>

          <p className="text-xl text-warm/80 mb-10 max-w-2xl mx-auto">
            Whether you donate to build the treasury or enter to receive dividends,
            every action brings us closer to universal AI-driven basic income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="xl"
              className="group"
              onClick={() => trackEvent(events.ENTER_CLICK, { location: 'final_cta' })}
            >
              <Link href="/enter">
                <Gift className="mr-2 h-5 w-5" />
                Enter This Week's Draw
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="xl"
              variant="outline"
              onClick={() => trackEvent(events.DONATE_CLICK, { location: 'final_cta' })}
            >
              <Link href="/donate">
                Donate USDT
              </Link>
            </Button>
          </div>

          <p className="text-sm text-warm/60">
            100% transparent • Provably fair • Open-source
          </p>
        </motion.div>
      </div>
    </section>
  )
}
