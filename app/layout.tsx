import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Crypto Trading Signals - 100% Accurate',
  description: 'Real-time AI-powered buy and sell signals for cryptocurrency trading',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
