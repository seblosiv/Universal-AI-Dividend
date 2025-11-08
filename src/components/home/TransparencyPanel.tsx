'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Wallet, Clock, TrendingUp } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'
import { formatUSDT, formatWalletAddress, formatTimeRemaining } from '@/lib/utils'
import type { TreasuryData, WeeklyStats } from '@/types'
import { trackEvent, events } from '@/lib/analytics'

export function TransparencyPanel() {
  const [treasury, setTreasury] = useState<TreasuryData | null>(null)
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [treasuryRes, statsRes] = await Promise.all([
          fetch('/api/treasury/balance'),
          fetch('/api/stats/this-week'),
        ])

        if (treasuryRes.ok) {
          const data = await treasuryRes.json()
          setTreasury(data)
        }

        if (statsRes.ok) {
          const data = await statsRes.json()
          setWeeklyStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch transparency data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 60000) // Refresh every minute

    return () => clearInterval(interval)
  }, [])

  const handleExplorerClick = () => {
    trackEvent(events.TREASURY_VIEW, { location: 'transparency_panel' })
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-2xl p-8 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/2 mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-white/10 rounded" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-4" id="transparency">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            100% <span className="text-gradient-mint">Transparent</span>
          </h2>
          <p className="text-xl text-warm/70 max-w-2xl mx-auto">
            Every transaction is verifiable on-chain. See exactly where donations go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Treasury Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Wallet className="w-6 h-6 text-mint" />
                <h3 className="text-2xl font-bold">On-Chain Treasury</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-warm/70">Current Balance</span>
                  <span className="text-2xl font-bold text-mint">
                    {treasury ? formatUSDT(treasury.balanceUSDT) : '—'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-warm/70">Protocol Fee</span>
                  <span className="text-lg font-semibold text-sky">
                    0% <span className="text-sm text-warm/50">(→ 0.5% when AI dividends begin)</span>
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-warm/70">Weekly Inflow (avg)</span>
                  <span className="text-lg font-semibold text-gold">
                    {treasury ? formatUSDT(treasury.weeklyInflow) : '—'}
                  </span>
                </div>
              </div>

              {/* Recent Transactions */}
              {treasury?.lastTransactions && treasury.lastTransactions.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-warm/70 mb-3">Recent Transactions</h4>
                  <div className="space-y-2">
                    {treasury.lastTransactions.slice(0, 3).map((tx) => (
                      <a
                        key={tx.hash}
                        href={`https://etherscan.io/tx/${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleExplorerClick}
                        className="flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-xs text-warm/50">
                            {formatWalletAddress(tx.hash, 6)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-mint">
                            {tx.type === 'donation' ? '+' : '-'}{formatUSDT(tx.amount)}
                          </span>
                          <ExternalLink className="w-3 h-3 text-warm/40 group-hover:text-mint transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </motion.div>

          {/* This Week's Draw */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-bold">This Week's Draw</h3>
              </div>

              {weeklyStats ? (
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-br from-gold/10 to-mint/10 rounded-xl">
                    <p className="text-sm text-warm/70 mb-2">Prize Pool</p>
                    <p className="text-4xl font-bold text-gold mb-1">
                      {formatUSDT(weeklyStats.prize)}
                    </p>
                    <p className="text-sm text-warm/60">
                      Week #{weeklyStats.weekNumber}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-warm/70">Total Entries</span>
                      <span className="text-lg font-semibold text-sky">
                        {weeklyStats.entries.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-white/10">
                      <span className="text-warm/70">Draw Ends In</span>
                      <span className="text-lg font-semibold text-mint">
                        {formatTimeRemaining(new Date(weeklyStats.endAt))}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-warm/70">Started</span>
                      <span className="text-sm text-warm/50">
                        {new Date(weeklyStats.startAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="/enter"
                      className="block w-full py-3 px-4 bg-mint text-jet text-center font-semibold rounded-lg hover:bg-mint-600 transition-colors"
                    >
                      Enter This Week's Draw
                    </a>
                  </div>
                </div>
              ) : (
                <p className="text-warm/50 text-center py-8">No active draw</p>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
