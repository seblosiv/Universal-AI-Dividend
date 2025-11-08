import { NextResponse } from 'next/server'
import type { WeeklyStats } from '@/types'

// Mock data - replace with real database queries
export async function GET() {
  try {
    // In production, fetch from database based on current week

    const startOfWeek = new Date()
    startOfWeek.setHours(0, 0, 0, 0)
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 7)

    const stats: WeeklyStats = {
      prize: 5000,
      entries: 2847,
      startAt: startOfWeek.toISOString(),
      endAt: endOfWeek.toISOString(),
      weekNumber: 47, // Calculate based on year
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Error fetching weekly stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weekly stats' },
      { status: 500 }
    )
  }
}
