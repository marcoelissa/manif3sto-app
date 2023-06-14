import '@/app/globals.scss'
import { Anonymous_Pro } from 'next/font/google'
import Nav from '@/components/Nav'

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
      <body className="py-12">
        <div className="container flex min-h-screen flex-col items-center justify-between">
          <Nav />
          <main className="content mx-auto min-h-[29.7cm] w-[21cm] max-w-full bg-white p-[0.75cm] shadow-lg md:p-[1.5cm]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
