export interface TreasuryData {
  balanceUSDT: number
  lastTransactions: Transaction[]
  weeklyInflow: number
}

export interface Transaction {
  hash: string
  amount: number
  timestamp: string
  type: 'donation' | 'payout'
  from?: string
  to?: string
}

export interface WeeklyStats {
  prize: number
  entries: number
  startAt: string
  endAt: string
  weekNumber: number
}

export interface Winner {
  id: string
  address: string
  ensName?: string
  amount: number
  transactionHash: string
  timestamp: string
  weekNumber: number
  quote?: string
  avatar?: string
}

export interface LiveStats {
  treasuryBalance: number
  thisWeekPrize: number
  entriesSoFar: number
  nextDrawAt: string
}

export interface NewsletterSubscription {
  email: string
  source?: string
  utmCampaign?: string
  utmSource?: string
  utmMedium?: string
}

export interface OddsCalculation {
  myEntries: number
  totalEntries: number
  percentage: number
  odds: string // e.g., "1 in 100"
}

export interface ImpactEstimate {
  donation: number
  additionalEntries: number
  daysAccelerated: number
  newPayoutDate: string
}
