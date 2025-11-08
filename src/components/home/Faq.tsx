'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { trackEvent, events } from '@/lib/analytics'

const faqs = [
  {
    question: 'Is this legal in my country?',
    answer:
      'UAD operates as a donation-funded grant system, not a lottery or gambling service. However, legal frameworks vary by jurisdiction. We recommend consulting local laws regarding online grants and donations. UAD is structured as a non-profit foundation with transparent, verifiable payouts.',
  },
  {
    question: 'Is UAD a charity or non-profit?',
    answer:
      'Yes, UAD is structured as a non-profit foundation dedicated to distributing AI-driven wealth. 100% of donations currently go to prize pools. Once corporate AI dividends begin, a small protocol fee (0.5%) will cover operational costs, with the rest distributed to recipients.',
  },
  {
    question: 'Which blockchain networks are supported?',
    answer:
      'UAD currently operates on Ethereum mainnet using USDT (Tether) for maximum stability and global accessibility. We may expand to additional EVM-compatible chains in the future based on community demand and gas efficiency.',
  },
  {
    question: 'How are winners chosen?',
    answer:
      'Winners are selected using Chainlink VRF (Verifiable Random Function), a provably fair and transparent randomness solution. Every week, the entry pool is locked, VRF generates cryptographic proof of randomness, and the winner is automatically paid. All steps are verifiable on-chain.',
  },
  {
    question: 'Can I donate anonymously?',
    answer:
      'Yes! Blockchain transactions are pseudonymous. You can donate from any wallet without providing personal information. Your wallet address will be visible on-chain, but it is not directly linked to your identity unless you choose to share it.',
  },
  {
    question: 'How do I earn entries without donating?',
    answer:
      'While donations are the primary way to support UAD and earn entries, we also offer alternative entry methods such as community participation, referrals, and social engagement. Check our "Enter" page for current opportunities to earn free entries.',
  },
  {
    question: 'What happens if I win?',
    answer:
      'If you win, USDT is automatically transferred to your wallet within minutes of the draw. You will also be invited (optionally) to share your story and join our community of winners. All payouts are instant, transparent, and verifiable on-chain.',
  },
  {
    question: 'When will AI dividends actually start?',
    answer:
      'AI dividends will begin when corporations commit to contributing a portion of their AI-driven profits. We are actively negotiating with potential partners and will announce updates as agreements are finalized. Subscribe to our newsletter to stay informed.',
  },
  {
    question: 'How is UAD different from traditional UBI?',
    answer:
      'Traditional UBI is government-funded. UAD is funded by donations now and will transition to corporate AI dividends, creating a sustainable, decentralized income stream. It is transparent, global, and not dependent on any single government or tax system.',
  },
  {
    question: 'Can I verify the smart contracts?',
    answer:
      'Absolutely! UAD is fully open-source. All smart contracts are verified on Etherscan and available on our GitHub. We encourage technical review and welcome security audits from the community.',
  },
]

export function Faq() {
  const handleFaqClick = (question: string) => {
    trackEvent(events.FAQ_EXPAND, { question })
  }

  return (
    <section className="py-20 px-4" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-sky">Questions</span>
          </h2>
          <p className="text-xl text-warm/70">
            Everything you need to know about UAD.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  onClick={() => handleFaqClick(faq.question)}
                  className="text-left"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-warm/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-warm/60">
            Still have questions?{' '}
            <a href="/contact" className="text-mint hover:text-mint-600 underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
