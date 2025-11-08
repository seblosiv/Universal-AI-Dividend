import { NextResponse } from 'next/server'
import type { TreasuryData } from '@/types'

// Mock data - replace with real blockchain queries
export async function GET() {
  try {
    // In production:
    // - Query USDT balance from treasury contract
    // - Fetch recent transactions from blockchain
    // - Calculate weekly inflow from historical data

    const data: TreasuryData = {
      balanceUSDT: 127500.50,
      weeklyInflow: 8250.75,
      lastTransactions: [
        {
          hash: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0',
          amount: 500,
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          type: 'donation',
          from: '0x1234567890123456789012345678901234567890',
        },
        {
          hash: '0x3bA7A11b33a4d1C3E28f3f4C4a3b9B2A1234567',
          amount: 1000,
          timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
          type: 'donation',
          from: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
        },
        {
          hash: '0x9876543210987654321098765432109876543210',
          amount: 5000,
          timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          type: 'payout',
          to: '0x5555555555555555555555555555555555555555',
        },
        {
          hash: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          amount: 250,
          timestamp: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
          type: 'donation',
          from: '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        },
        {
          hash: '0xcccccccccccccccccccccccccccccccccccccccc',
          amount: 750,
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          type: 'donation',
          from: '0xdddddddddddddddddddddddddddddddddddddddd',
        },
      ],
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=60',
      },
    })
  } catch (error) {
    console.error('Error fetching treasury balance:', error)
    return NextResponse.json(
      { error: 'Failed to fetch treasury balance' },
      { status: 500 }
    )
  }
}
