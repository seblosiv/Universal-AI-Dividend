import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Enter Draw | Universal AI Dividend',
  description: 'Enter this week\'s draw for a chance to win USDT dividends.',
}

export default function EnterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Enter <span className="text-gradient-mint">This Week's Draw</span>
        </h1>
        <p className="text-xl text-warm/70 mb-8">
          This page is under construction. Connect your wallet to enter the weekly draw.
        </p>
        <div className="glass-effect rounded-2xl p-12">
          <p className="text-warm/60">
            Coming soon: Wallet connection, entry submission, and history tracking.
          </p>
        </div>
      </div>
    </div>
  )
}
