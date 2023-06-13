import '@/app/globals.scss'
import { Anonymous_Pro } from 'next/font/google'

const monospace = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-monospace'
})

export const metadata = {
  title: 'Web3 Manif3sto',
  description:
    'Embrace Web3: Decentralized, Empowered, and Trustworthy. Join the Revolution!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${monospace.variable}`}>
      <body>{children}</body>
    </html>
  )
}
