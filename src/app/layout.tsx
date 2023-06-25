import '@/app/globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto'
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
    <html
      lang="en"
      className={`${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
