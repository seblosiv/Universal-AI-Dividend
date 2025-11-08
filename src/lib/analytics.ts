import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      },
    })
  }
}

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties)
  }
}

export const events = {
  LP_VIEW: 'lp_view',
  ESTIMATOR_USED: 'estimator_used',
  DONATE_CLICK: 'donate_click',
  ENTER_CLICK: 'enter_click',
  SHARE_CLICK: 'share_click',
  SIGNUP_NEWSLETTER: 'signup_newsletter',
  FAQ_EXPAND: 'faq_expand',
  WINNER_VIEW: 'winner_view',
  TREASURY_VIEW: 'treasury_view',
} as const
