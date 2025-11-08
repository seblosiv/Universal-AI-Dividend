'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Zap, CheckCircle, ExternalLink, Play, RotateCcw } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const TIMELINE_STEPS = [
  {
    icon: Lock,
    title: 'Pool Locked',
    description: 'Weekly draw period ends. Entry pool is frozen on-chain.',
    color: 'text-sky',
    duration: 0.5,
  },
  {
    icon: Zap,
    title: 'VRF Request',
    description: 'Chainlink VRF requested for provably random winner selection.',
    color: 'text-mint',
    duration: 1.5,
  },
  {
    icon: CheckCircle,
    title: 'Proof Generated',
    description: 'Cryptographic proof of randomness verified on-chain.',
    color: 'text-gold',
    duration: 1,
  },
  {
    icon: CheckCircle,
    title: 'Winner Paid',
    description: 'USDT automatically transferred to winner\'s wallet.',
    color: 'text-mint',
    duration: 0.5,
  },
]

export function VRFTimeline() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(-1)

  const handlePlay = () => {
    setIsPlaying(true)
    setCurrentStep(0)

    let step = 0
    const interval = setInterval(() => {
      step++
      if (step >= TIMELINE_STEPS.length) {
        clearInterval(interval)
        setTimeout(() => setIsPlaying(false), 1000)
      } else {
        setCurrentStep(step)
      }
    }, 1500)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(-1)
  }

  return (
    <GlassCard className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">
          <span className="text-gradient-sky">Verifiable RNG</span>
        </h3>
        <div className="flex gap-2">
          {!isPlaying && currentStep === -1 && (
            <Button
              onClick={handlePlay}
              size="sm"
              variant="outline"
              className="gap-2"
            >
              <Play className="w-4 h-4" />
              Play
            </Button>
          )}
          {currentStep >= 0 && !isPlaying && (
            <Button
              onClick={handleReset}
              size="sm"
              variant="outline"
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-1">
        {TIMELINE_STEPS.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0.4 }}
              animate={{
                opacity: isActive || isCompleted ? 1 : 0.4,
              }}
              className="relative"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                {/* Icon */}
                <div className={`flex-shrink-0 ${isActive || isCompleted ? step.color : 'text-warm/40'}`}>
                  <motion.div
                    animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-6 h-6" aria-hidden="true" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className={`font-semibold mb-1 ${isActive ? step.color : ''}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-warm/70">{step.description}</p>

                  {/* Progress bar for active step */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: step.duration, ease: 'linear' }}
                        className="h-1 bg-mint rounded-full mt-2"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Check mark for completed */}
                <AnimatePresence>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckCircle className="w-5 h-5 text-mint" aria-label="Completed" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Connecting line */}
              {index < TIMELINE_STEPS.length - 1 && (
                <div className="ml-7 h-4 w-0.5 bg-white/10" />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <Button
          variant="link"
          className="gap-2 text-mint hover:text-mint-600 p-0 h-auto"
          asChild
        >
          <a
            href="https://chain.link/vrf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span>Learn about Chainlink VRF</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </GlassCard>
  )
}
