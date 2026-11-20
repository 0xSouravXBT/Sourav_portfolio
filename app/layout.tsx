import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { contact, profile } from '@/lib/site-data'
import './globals.css'

const _geistSans = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

const description = `${profile.name} — ${profile.title}. ${profile.subtitle}`

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description,
  generator: 'v0.app',
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: contact.github }],
  keywords: [
    'Sourav Shaw',
    'Software Engineer Intern',
    'Computer Science undergraduate',
    'Python developer',
    'Node.js',
    'React.js',
    'MongoDB',
    'Machine Learning',
    'Backend development',
    'Portfolio',
  ],
  openGraph: {
    type: 'website',
    title: `${profile.name} — ${profile.title}`,
    description,
    siteName: `${profile.name} Portfolio`,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0B0F19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
