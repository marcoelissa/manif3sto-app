/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      'press-start-2p': ['var(--font-press-start-2p)'],
      bangers: ['var(--font-bangers)'],
      'libre-barcode-39': ['var(--font-libre-barcode-39)'],
      'redacted-script': ['var(--font-redacted-script)'],
      'major-mono-display': ['var(--font-major-mono-display)'],
      'lilita-one': ['var(--font-lilita-one)'],
      poppins: ['var(--font-poppins)']
    },
    extend: {
      cursor: {
        auto: 'url(/cursors/cursors_standard.png), auto',
        pointer: 'url(/cursors/cursors_pointer.png), pointer',
        active: 'url(/cursors/cursors_active.png), pointer',
        crosshair: 'url(/cursors/cursors_crosshair.png) 40 40, crosshair'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0.25rem 0.25rem 0 #000000'
        }
      })
    })
  ]
}
