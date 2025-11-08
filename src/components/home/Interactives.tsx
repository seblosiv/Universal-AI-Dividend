'use client'

import { motion } from 'framer-motion'
import { OddsEstimator } from './OddsEstimator'
import { TreasuryImpact } from './TreasuryImpact'
import { VRFTimeline } from './VRFTimeline'

export function Interactives() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-white/5" id="demos">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Your <span className="text-gradient-mint">Impact</span>
          </h2>
          <p className="text-xl text-warm/70 max-w-2xl mx-auto">
            Interactive tools to understand your odds, impact, and the verifiable draw process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <OddsEstimator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <TreasuryImpact />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <VRFTimeline />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
