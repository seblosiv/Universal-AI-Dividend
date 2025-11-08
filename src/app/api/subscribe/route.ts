import { NextResponse } from 'next/server'
import type { NewsletterSubscription } from '@/types'

export async function POST(request: Request) {
  try {
    const body = await request.json() as NewsletterSubscription

    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // In production:
    // - Validate email format
    // - Check for duplicates in database
    // - Store in database
    // - Send confirmation email via Resend or similar
    // - Add to email marketing platform (e.g., Mailchimp, ConvertKit)

    console.log('New newsletter subscription:', {
      email: body.email,
      source: body.source,
      utm: {
        campaign: body.utmCampaign,
        source: body.utmSource,
        medium: body.utmMedium,
      },
    })

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
