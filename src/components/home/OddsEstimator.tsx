'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { calculateOdds, formatNumber } from '@/lib/utils'
import { trackEvent, events } from '@/lib/analytics'

interface Props {
  initialMyEntries?: number
  initialPoolEntries?: number
}

export function OddsEstimator({ initialMyEntries = 1, initialPoolEntries = 1000 }: Props) {
  const [myEntries, setMyEntries] = useState(initialMyEntries)
  const [poolEntries, setPoolEntries] = useState(initialPoolEntries)

  const odds = calculateOdds(myEntries, poolEntries)
  const oddsRatio = poolEntries / myEntries

  const handleChange = () => {
    trackEvent(events.ESTIMATOR_USED, {
      myEntries,
      poolEntries,
      odds,
    })
  }

  // Calculate gauge percentage (capped at 100)
  const gaugePercentage = Math.min(odds, 100)

  return (
    <GlassCard className="p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">
        <span className="text-gradient-mint">Odds Calculator</span>
      </h3>

      <div className="space-y-8">
        {/* My Entries Slider */}
        <div>
          <div className="flex justify-between mb-3">
            <label htmlFor="my-entries" className="text-sm font-medium text-warm/80">
              Your Weekly Entries
            </label>
            <span className="text-mint font-semibold">{myEntries}</span>
          </div>
          <Slider
            id="my-entries"
            min={1}
            max={15}
            step={1}
            value={[myEntries]}
            onValueChange={(value) => {
              setMyEntries(value[0])
              handleChange()
            }}
            aria-label="Your weekly entries"
          />
        </div>

        {/* Pool Entries Slider */}
        <div>
          <div className="flex justify-between mb-3">
            <label htmlFor="pool-entries" className="text-sm font-medium text-warm/80">
              Total Pool Entries
            </label>
            <span className="text-sky font-semibold">{formatNumber(poolEntries, 0)}</span>
          </div>
          <Slider
            id="pool-entries"
            min={myEntries}
            max={10000}
            step={100}
            value={[poolEntries]}
            onValueChange={(value) => {
              setPoolEntries(value[0])
              handleChange()
            }}
            aria-label="Total pool entries"
          />
        </div>

        {/* Results Display */}
        <div className="mt-8 p-6 bg-white/5 rounded-xl border border-mint/20">
          <p className="text-sm text-warm/60 mb-2 text-center">Your Odds</p>

          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* Gauge Ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="8"
              />
              {/* Foreground circle (animated) */}
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#51F8C5"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                animate={{
                  strokeDashoffset: 2 * Math.PI * 40 * (1 - gaugePercentage / 100),
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-mint">
                {formatNumber(odds, 2)}%
              </span>
            </div>
          </div>

          <div className="text-center space-y-1">
            <p className="text-warm/80">
              <span className="font-semibold text-gold">1 in {formatNumber(oddsRatio, 0)}</span> chance
            </p>
            <p className="text-xs text-warm/50">
              {odds > 10 ? 'Great odds!' : odds > 1 ? 'Good luck!' : 'Every entry counts!'}
            </p>
          </div>
        </div>

        <p className="text-xs text-warm/50 text-center italic">
          * Illustrative calculation based on current inputs. Actual odds vary by weekly participation.
        </p>
      </div>
    </GlassCard>
  )
}
