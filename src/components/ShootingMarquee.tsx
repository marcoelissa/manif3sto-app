'use client'

import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

const Title = () => {
  const text = 'KNIGHTS OF THE DIGITAL REALM'.split('')
  const [flipped, setFlipped] = useState<boolean[]>(
    Array.from({ length: text.length }, () => false)
  )

  return (
    <div className="flex w-full cursor-crosshair items-center bg-yellow-400">
      <Marquee speed={400} autoFill={true} className="h-[25vh] overflow-y-hidden">
        <div className="flex items-center gap-x-1 px-[2.5vw] font-lilita-one text-[10vw] leading-none">
          {text.map((char, index) => (
            <div
              key="index"
              className={`shootable-letter relative select-none rounded-[1vw] bg-white px-3 ${
                char === ' ' ? 'w-[5vh]' : ''
              } ${flipped[index] ? 'shot' : ''}`}
              onClick={() => {
                if (char === ' ' || flipped[index]) return
                const newFlipped = [...flipped]
                newFlipped[index] = !newFlipped[index]
                setFlipped(newFlipped)
              }}
            >
              {char}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default Title
