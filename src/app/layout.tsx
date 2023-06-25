import '@/app/globals.scss'
import { Press_Start_2P, Bangers, Libre_Barcode_39, Redacted_Script, Major_Mono_Display, Lilita_One, Poppins } from 'next/font/google'

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-press-start-2p'
})

const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-bangers'
})

const libreBarcode39 = Libre_Barcode_39({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-libre-barcode-39'
})

const redactedScript = Redacted_Script({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-redacted-script'
})

const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-major-mono-display'
})

const lilitaOne = Lilita_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-lilita-one'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins'
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
      className={`${pressStart2P.variable} ${bangers.variable} ${libreBarcode39.variable} ${redactedScript.variable} ${majorMonoDisplay.variable} ${lilitaOne.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
