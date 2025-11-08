'use client'

import { motion } from 'framer-motion'

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-warm/60 text-sm mb-6">AS SEEN ON</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {/* Placeholder for future press badges */}
            <div className="text-warm/40 text-lg font-semibold">TechCrunch</div>
            <div className="text-warm/40 text-lg font-semibold">Forbes</div>
            <div className="text-warm/40 text-lg font-semibold">Wired</div>
            <div className="text-warm/40 text-lg font-semibold">Bloomberg</div>
          </div>
          <p className="text-mint/80 text-lg font-medium mt-8">
            100% of donations go to prizes until AI dividends unlock.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
