'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatUSDT, estimatePayoutDate } from '@/lib/utils'
import { trackEvent, events } from '@/lib/analytics'

const PRESET_AMOUNTS = [25, 100, 500]

export function TreasuryImpact() {
  const [donationAmount, setDonationAmount] = useState(100)
  const [treasuryData, setTreasuryData] = useState({
    currentBalance: 50000,
    targetPrize: 100000,
    weeklyInflow: 5000,
  })

  useEffect(() => {
    // Fetch actual treasury data
    async function fetchTreasury() {
      try {
        const res = await fetch('/api/treasury/balance')
        if (res.ok) {
          const data = await res.json()
          setTreasuryData({
            currentBalance: data.balanceUSDT,
            targetPrize: data.targetPrize || 100000,
            weeklyInflow: data.weeklyInflow || 5000,
          })
        }
      } catch (error) {
        console.error('Failed to fetch treasury data:', error)
      }
    }

    fetchTreasury()
  }, [])

  const additionalEntries = Math.floor(donationAmount / 10) // Example: $10 = 1 entry
  const daysAccelerated = estimatePayoutDate(
    treasuryData.currentBalance,
    treasuryData.targetPrize,
    treasuryData.weeklyInflow,
    donationAmount
  )

  const progressPercentage = Math.min(
    ((treasuryData.currentBalance + donationAmount) / treasuryData.targetPrize) * 100,
    100
  )

  return (
    <GlassCard className="p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">
        <span className="text-gradient-gold">Impact Calculator</span>
      </h3>

      <div className="space-y-6">
        {/* Preset Amounts */}
        <div>
          <p className="text-sm font-medium text-warm/80 mb-3">Select donation amount</p>
          <div className="grid grid-cols-3 gap-3">
            {PRESET_AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant={donationAmount === amount ? 'default' : 'outline'}
                onClick={() => {
                  setDonationAmount(amount)
                  trackEvent(events.DONATE_CLICK, { amount, location: 'impact_calculator' })
                }}
                className="w-full"
              >
                {formatUSDT(amount)}
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Amount Input */}
        <div>
          <label htmlFor="custom-amount" className="text-sm font-medium text-warm/80 mb-2 block">
            Or enter custom amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-warm/60">$</span>
            <input
              id="custom-amount"
              type="number"
              min="1"
              max="100000"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full pl-8 pr-4 py-2 bg-white/5 border border-white/20 rounded-md focus:ring-2 focus:ring-mint focus:border-transparent"
              aria-label="Custom donation amount"
            />
          </div>
        </div>

        {/* Impact Results */}
        <motion.div
          key={donationAmount}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gradient-to-br from-gold/10 to-mint/10 rounded-xl border border-gold/20 space-y-4"
        >
          <div className="flex items-start gap-3">
            <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h4 className="font-semibold text-gold mb-2">Your Impact</h4>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-warm/70">Additional entries:</span>
                  <span className="font-bold text-mint">+{additionalEntries}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-warm/70">Treasury boost:</span>
                  <span className="font-bold text-sky">{formatUSDT(donationAmount)}</span>
                </div>

                {daysAccelerated > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-warm/70">Accelerates payout by:</span>
                    <span className="font-bold text-gold">~{daysAccelerated} days</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-warm/60 mb-2">
                  <span>Treasury Progress</span>
                  <span>{progressPercentage.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gold to-mint"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-warm/50 text-center italic">
          * Illustrative calculation. Actual impact depends on total community participation.
        </p>
      </div>
    </GlassCard>
  )
}
