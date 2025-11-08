# Universal AI Dividend (UAD) Landing Page

A beautiful, modern landing page for the Universal AI Dividend project - basic income for the AI age.

## Features

✨ **Premium Design**
- Modern glass morphism effects
- Smooth animations with Framer Motion
- Fully responsive mobile-first design
- Custom UAD brand color palette

🎯 **Interactive Demos**
- **Odds Calculator**: See your chances of winning based on entries
- **Treasury Impact**: Visualize how donations accelerate payouts
- **VRF Timeline**: Animated explainer of the verifiable draw process

📊 **Live Transparency**
- Real-time treasury balance
- Recent on-chain transactions
- Weekly draw statistics
- Winner carousel with verification links

🚀 **Performance & SEO**
- Server-side rendering with Next.js 14
- Optimized for Lighthouse scores (90+ across all metrics)
- SEO-ready with meta tags and structured data
- PostHog analytics integration

♿ **Accessibility**
- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Animation**: Framer Motion
- **Analytics**: PostHog
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- (Optional) Environment variables for API integrations

### Installation

1. Clone the repository:
```bash
git clone https://github.com/seblosiv/Universal-AI-Dividend.git
cd Universal-AI-Dividend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
NEXT_PUBLIC_TREASURY_ADDRESS=0x...
# Add other variables as needed
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   │   ├── stats/         # Live stats and weekly data
│   │   │   ├── treasury/      # Treasury balance and transactions
│   │   │   ├── winners/       # Winner data
│   │   │   └── subscribe/     # Newsletter subscription
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   ├── page.tsx           # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── home/              # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroStats.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Interactives.tsx
│   │   │   ├── OddsEstimator.tsx
│   │   │   ├── TreasuryImpact.tsx
│   │   │   ├── VRFTimeline.tsx
│   │   │   ├── TransparencyPanel.tsx
│   │   │   ├── WinnerCarousel.tsx
│   │   │   ├── FutureDividend.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── FinalCta.tsx
│   │   │   └── SocialProof.tsx
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Footer.tsx
│   │   └── Providers.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── analytics.ts       # PostHog integration
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Key Components

### Hero Section
The flagship section with:
- Large, impactful headline
- Live statistics (treasury, prize, entries)
- Primary CTAs (Enter / Donate)
- Trust badges (Chainlink VRF, Open-source, etc.)

### Interactive Demos
- **Odds Estimator**: Calculate win probability with sliders
- **Treasury Impact**: See donation effects with visual feedback
- **VRF Timeline**: Animated step-by-step draw process

### Transparency Panel
- Live treasury balance
- Recent on-chain transactions
- Weekly draw countdown
- Protocol fee information

### Winner Carousel
- Showcase recent winners
- Wallet addresses/ENS names
- Winner quotes and amounts
- On-chain verification links

## API Endpoints

All endpoints return JSON and include appropriate cache headers.

### `GET /api/stats/live`
Returns current live statistics:
```typescript
{
  treasuryBalance: number
  thisWeekPrize: number
  entriesSoFar: number
  nextDrawAt: string
}
```

### `GET /api/stats/this-week`
Returns current week's draw information:
```typescript
{
  prize: number
  entries: number
  startAt: string
  endAt: string
  weekNumber: number
}
```

### `GET /api/treasury/balance`
Returns treasury data and recent transactions:
```typescript
{
  balanceUSDT: number
  weeklyInflow: number
  lastTransactions: Transaction[]
}
```

### `GET /api/winners/latest?limit=10`
Returns recent winners:
```typescript
Winner[] // Array of winner objects
```

### `POST /api/subscribe`
Subscribe to newsletter:
```typescript
{
  email: string
  source?: string
  utmCampaign?: string
  utmSource?: string
  utmMedium?: string
}
```

## Customization

### Brand Colors
Edit `tailwind.config.ts` to modify the color palette:
```typescript
colors: {
  jet: '#0C0C0D',      // Primary dark
  mint: '#51F8C5',     // Primary accent
  sky: '#8BC7FF',      // Secondary accent
  warm: '#FBFBF9',     // Text/light
  gold: '#F6C667',     // Tertiary accent
}
```

### Analytics
Configure PostHog in `.env.local`:
```env
NEXT_PUBLIC_POSTHOG_KEY=your_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

Events tracked:
- `lp_view` - Landing page view
- `estimator_used` - Odds calculator interaction
- `donate_click` - Donate button clicks
- `enter_click` - Enter draw button clicks
- `share_click` - Winner share clicks
- `signup_newsletter` - Newsletter subscriptions
- `faq_expand` - FAQ accordion clicks

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
Build the production bundle:
```bash
npm run build
npm start
```

## Development

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Production Integration

Replace mock data in API routes with:

1. **Blockchain Integration**
   - Connect to Ethereum RPC
   - Query treasury contract for balance
   - Fetch transaction history
   - Integrate Chainlink VRF data

2. **Database**
   - Store winner records
   - Track weekly stats
   - Manage newsletter subscriptions

3. **Email Service**
   - Integrate Resend/SendGrid
   - Send confirmation emails
   - Newsletter distribution

## Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is part of the Universal AI Dividend Foundation.

## Support

- **Website**: https://universalaidividend.org
- **Discord**: https://discord.gg/uad
- **Twitter**: [@UniversalAIDivd](https://twitter.com/UniversalAIDivd)
- **Email**: hello@universalaidividend.org

---

Built with ❤️ for the future of universal basic income.
