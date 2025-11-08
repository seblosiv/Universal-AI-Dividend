import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num)
}

export function formatUSDT(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatWalletAddress(address: string, length: number = 4): string {
  if (!address || address.length < length * 2) return address
  return `${address.slice(0, length)}...${address.slice(-length)}`
}

export function calculateOdds(myEntries: number, totalEntries: number): number {
  if (totalEntries === 0) return 0
  return (myEntries / totalEntries) * 100
}

export function estimatePayoutDate(
  currentTreasury: number,
  targetPrize: number,
  weeklyInflow: number,
  additionalDonation: number = 0
): number {
  const needed = Math.max(0, targetPrize - currentTreasury)
  const totalWeeklyInflow = weeklyInflow + (additionalDonation / 7) // Spread donation over a week

  if (totalWeeklyInflow === 0) return Infinity

  return Math.max(0, Math.ceil(needed / totalWeeklyInflow))
}

export function formatTimeRemaining(endDate: Date): string {
  const now = new Date()
  const diff = endDate.getTime() - now.getTime()

  if (diff <= 0) return "Draw ended"

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (days > 0) return `${days}d ${hours}h`
  if (hours > 0) return `${hours}h ${minutes}m`
  return `${minutes}m`
}
