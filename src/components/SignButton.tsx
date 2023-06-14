'use client'

import React from 'react'

const SignButton = () => {
  return (
    <button
      type="button"
      className="rounded-lg bg-purple-600 px-6 py-3 text-xl font-bold text-white hover:bg-purple-800"
      onClick={() => console.log('clicked')}
    >
      Heck yeah! I&apos;m in!
    </button>
  )
}

export default SignButton
