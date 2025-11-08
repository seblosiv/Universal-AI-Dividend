'use client'

import { motion } from 'framer-motion'
import { Sparkles, Building2, Users, TrendingUp, FileText, Mail } from 'lucide-react'
import { GlassCard } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { trackEvent, events } from '@/lib/analytics'

export function FutureDividend() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'future_dividends' }),
      })

      if (res.ok) {
        setSubscribed(true)
        trackEvent(events.SIGNUP_NEWSLETTER, { source: 'future_dividends' })
      }
    } catch (error) {
      console.error('Failed to subscribe:', error)
    } finally {
      setLoading(false)
    }
  }

  const milestones = [
    {
      icon: Building2,
      title: 'Corporate Automation',
      description: 'Companies adopt AI to automate significant workforce functions.',
    },
    {
      icon: TrendingUp,
      title: 'AI Dividend Agreements',
      description: 'Corporations commit a portion of AI-driven profits to UAD.',
    },
    {
      icon: Users,
      title: 'Universal Distribution',
      description: 'AI dividends flow to people globally, creating true basic income.',
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="future">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-mint/5 via-transparent to-sky/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Sparkles className="w-4 h-4 text-mint" />
            <span className="text-sm font-medium">The Vision</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            The moment AI pays <br />
            <span className="text-gradient-mint">society back.</span>
          </h2>

          <p className="text-xl text-warm/70 max-w-3xl mx-auto mb-8">
            As industries automate, UAD will route a share of corporate AI dividends to people who need it most.
            What starts as donations today becomes sustainable basic income tomorrow.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mint/20 to-sky/20 flex items-center justify-center mx-auto mb-4">
                  <milestone.icon className="w-6 h-6 text-mint" />
                </div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-warm/70 text-sm">{milestone.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated on AI Dividends
            </h3>
            <p className="text-warm/70 mb-6">
              Get notified when corporations join the UAD network and AI dividends begin flowing.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                  aria-label="Email address"
                />
                <Button type="submit" disabled={loading} className="gap-2">
                  <Mail className="w-4 h-4" />
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            ) : (
              <div className="p-4 bg-mint/10 border border-mint/20 rounded-lg mb-6">
                <p className="text-mint font-semibold">✓ Subscribed! Check your email.</p>
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" asChild className="gap-2">
                <a href="/whitepaper.pdf" target="_blank">
                  <FileText className="w-4 h-4" />
                  Read the Whitepaper
                </a>
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
