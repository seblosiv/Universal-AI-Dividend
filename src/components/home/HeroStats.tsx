'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { formatUSDT, formatNumber } from '@/lib/utils'
import type { LiveStats } from '@/types'

export function HeroStats() {
  const [stats, setStats] = useState<LiveStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats/live')
        if (res.ok) {
          const data = await res.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Failed to fetch live stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="glass-effect rounded-full px-6 py-3 animate-pulse"
          >
            <div className="h-4 w-32 bg-white/10 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (!stats) return null

  const statsData = [
    {
      label: 'Treasury Balance',
      value: formatUSDT(stats.treasuryBalance),
      color: 'text-mint',
    },
    {
      label: "This Week's Prize",
      value: formatUSDT(stats.thisWeekPrize),
      color: 'text-gold',
    },
    {
      label: 'Entries So Far',
      value: formatNumber(stats.entriesSoFar, 0),
      color: 'text-sky',
    },
  ]

  return (
    <div className="flex flex-wrap gap-4 justify-center" role="region" aria-label="Live statistics">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect rounded-full px-6 py-3 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-warm/70">{stat.label}:</span>
            <span className={`text-lg font-semibold ${stat.color}`} aria-live="polite">
              {stat.value}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
