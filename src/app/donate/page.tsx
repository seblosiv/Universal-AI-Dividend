import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate | Universal AI Dividend',
  description: 'Donate USDT to support the Universal AI Dividend treasury.',
}

export default function DonatePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Donate <span className="text-gradient-gold">to the Treasury</span>
        </h1>
        <p className="text-xl text-warm/70 mb-8">
          100% of your donation goes directly to prize pools. Fully transparent on-chain.
        </p>
        <div className="glass-effect rounded-2xl p-12">
          <p className="text-warm/60 mb-4">
            Coming soon: USDT donation interface with multiple payment options.
          </p>
          <p className="text-sm text-warm/50">
            For now, you can donate directly to the treasury contract at: <br />
            <code className="text-mint">0x... (contract address)</code>
          </p>
        </div>
      </div>
    </div>
  )
}
