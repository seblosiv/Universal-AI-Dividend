import { NextResponse } from 'next/server'
import type { Winner } from '@/types'

// Mock data - replace with real database queries
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')

    // In production, fetch from database ordered by timestamp DESC

    const winners: Winner[] = [
      {
        id: '1',
        address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0',
        ensName: 'alice.eth',
        amount: 5000,
        transactionHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        weekNumber: 46,
        quote: "This will help me cover rent this month. Thank you UAD!",
      },
      {
        id: '2',
        address: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
        ensName: 'bob.eth',
        amount: 3500,
        transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
        timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        weekNumber: 45,
        quote: "I donated $50 and won! This system really works.",
      },
      {
        id: '3',
        address: '0x1234567890123456789012345678901234567890',
        amount: 4200,
        transactionHash: '0x7777777777777777777777777777777777777777777777777777777777777777',
        timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
        weekNumber: 44,
      },
      {
        id: '4',
        address: '0x9999999999999999999999999999999999999999',
        ensName: 'crypto-enthusiast.eth',
        amount: 6000,
        transactionHash: '0x8888888888888888888888888888888888888888888888888888888888888888',
        timestamp: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
        weekNumber: 43,
        quote: "The future of UBI is here. Proud to be part of this movement.",
      },
      {
        id: '5',
        address: '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        amount: 3000,
        transactionHash: '0x9999999999999999999999999999999999999999999999999999999999999999',
        timestamp: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
        weekNumber: 42,
      },
    ]

    return NextResponse.json(winners.slice(0, limit), {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error) {
    console.error('Error fetching winners:', error)
    return NextResponse.json(
      { error: 'Failed to fetch winners' },
      { status: 500 }
    )
  }
}
