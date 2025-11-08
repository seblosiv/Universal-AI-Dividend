'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Share2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatUSDT, formatWalletAddress } from '@/lib/utils'
import type { Winner } from '@/types'
import { trackEvent, events } from '@/lib/analytics'

export function WinnerCarousel() {
  const [winners, setWinners] = useState<Winner[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWinners() {
      try {
        const res = await fetch('/api/winners/latest?limit=10')
        if (res.ok) {
          const data = await res.json()
          setWinners(data)
        }
      } catch (error) {
        console.error('Failed to fetch winners:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWinners()
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + winners.length) % winners.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % winners.length)
  }

  const handleShare = (winner: Winner) => {
    trackEvent(events.SHARE_CLICK, {
      winner: winner.address,
      amount: winner.amount,
    })

    if (navigator.share) {
      navigator.share({
        title: 'UAD Winner',
        text: `${winner.ensName || formatWalletAddress(winner.address)} just won ${formatUSDT(winner.amount)} from Universal AI Dividend!`,
        url: `https://etherscan.io/tx/${winner.transactionHash}`,
      })
    }
  }

  if (loading) {
    return (
      <div className="glass-effect rounded-2xl p-8 animate-pulse">
        <div className="h-8 bg-white/10 rounded w-1/2 mb-6" />
        <div className="h-48 bg-white/10 rounded" />
      </div>
    )
  }

  if (winners.length === 0) {
    return null
  }

  const currentWinner = winners[currentIndex]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white/5 to-transparent" id="winners">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient-gold">Winners</span>
          </h2>
          <p className="text-xl text-warm/70">
            Real people receiving real dividends. Verifiable on-chain.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-mint to-sky flex items-center justify-center text-4xl font-bold text-jet">
                      {currentWinner.ensName
                        ? currentWinner.ensName[0].toUpperCase()
                        : currentWinner.address.slice(2, 4).toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">
                      {currentWinner.ensName || formatWalletAddress(currentWinner.address, 8)}
                    </h3>

                    <p className="text-4xl font-bold text-gold mb-3">
                      Won {formatUSDT(currentWinner.amount)}
                    </p>

                    <p className="text-sm text-warm/60 mb-4">
                      Week #{currentWinner.weekNumber} •{' '}
                      {new Date(currentWinner.timestamp).toLocaleDateString()}
                    </p>

                    {currentWinner.quote && (
                      <blockquote className="italic text-warm/80 border-l-2 border-mint pl-4 mb-4">
                        "{currentWinner.quote}"
                      </blockquote>
                    )}

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                      >
                        <a
                          href={`https://etherscan.io/tx/${currentWinner.transactionHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackEvent(events.WINNER_VIEW, { winner: currentWinner.address })}
                        >
                          View on-chain
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2"
                        onClick={() => handleShare(currentWinner)}
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {winners.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full md:left-4"
                onClick={handlePrev}
                aria-label="Previous winner"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full md:right-4"
                onClick={handleNext}
                aria-label="Next winner"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {winners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-mint w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to winner ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
