import React from 'react'
import Marquee from 'react-fast-marquee'

const Title = () => {
  return (
    <div className="flex w-full items-center border-b-4 border-black bg-yellow-400 bg-[url('/patterns/contour_line_pattern.svg')] bg-[50vw_auto] bg-repeat">
      <Marquee speed={120} autoFill={true} className="h-[calc(13vh-4px)]">
        <div className="flex select-none px-[2.5vh] font-lilita-one text-[8vh] leading-none text-white text-shadow">
          KNIGHTS OF THE DIGITAL REALM
        </div>
      </Marquee>
    </div>
  )
}

export default Title
