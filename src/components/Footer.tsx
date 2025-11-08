import Link from 'next/link'
import { Github, Twitter, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'How It Works', href: '/#how-it-works' },
      { name: 'Enter Draw', href: '/enter' },
      { name: 'Donate', href: '/donate' },
      { name: 'Transparency', href: '/#transparency' },
      { name: 'Winners', href: '/#winners' },
    ],
    resources: [
      { name: 'Whitepaper', href: '/whitepaper.pdf' },
      { name: 'Smart Contracts', href: '/contracts' },
      { name: 'FAQ', href: '/#faq' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Responsible Gaming', href: '/responsible' },
    ],
    community: [
      { name: 'Discord', href: 'https://discord.gg/uad' },
      { name: 'Twitter', href: 'https://twitter.com/UniversalAIDivd' },
      { name: 'GitHub', href: 'https://github.com/universal-ai-dividend' },
      { name: 'Forum', href: 'https://forum.universalaidividend.org' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/UniversalAIDivd', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/universal-ai-dividend', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://discord.gg/uad', label: 'Discord' },
    { icon: Mail, href: 'mailto:hello@universalaidividend.org', label: 'Email' },
  ]

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold">
                <span className="text-gradient-mint">UAD</span>
              </h3>
            </Link>
            <p className="text-sm text-warm/60 mb-6">
              Basic income for the AI age. Donated today, distributed fairly, verified on-chain.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm/60 hover:text-mint transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm/60 hover:text-mint transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm/60 hover:text-mint transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm/60 hover:text-mint transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-warm/50">
            © {new Date().getFullYear()} Universal AI Dividend Foundation. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/#transparency"
              className="text-sm text-warm/60 hover:text-mint transition-colors flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              Treasury: Live on-chain
            </Link>

            <a
              href={`https://etherscan.io/address/${process.env.NEXT_PUBLIC_TREASURY_ADDRESS || '0x...'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm/60 hover:text-mint transition-colors"
            >
              Verify Contracts
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
