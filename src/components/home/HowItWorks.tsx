'use client'

import { motion } from 'framer-motion'
import { DollarSign, Ticket, Trophy } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'

export function HowItWorks() {
  const steps = [
    {
      icon: DollarSign,
      title: 'Donate',
      description: 'Anyone can donate USDT to the treasury. 100% goes to prizes.',
      details: 'Tax-deductible. Transparent on-chain. No platform fees.',
    },
    {
      icon: Ticket,
      title: 'Enter',
      description: 'Get weekly entries by donating or participating in the community.',
      details: 'No purchase necessary. Fair odds. Verifiable draw process.',
    },
    {
      icon: Trophy,
      title: 'Win',
      description: 'Winners are chosen by Chainlink VRF every week. Instant USDT payout.',
      details: 'Provably fair. Automatic distribution. Public verification.',
    },
  ]

  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-warm/70 max-w-2xl mx-auto">
            Three simple steps to participate in the future of universal basic income.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="p-8 h-full hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-mint/10 flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-mint" aria-hidden="true" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-warm/80 mb-4">{step.description}</p>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-sm text-warm/60">{step.details}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
