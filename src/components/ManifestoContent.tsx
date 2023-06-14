import React from 'react'
import { useRemarkSync } from 'react-remark'
import ManifestoText from '@/data/manifesto'
import SignButton from '@/components/SignButton'

const ManifestoContent = () => {
  return (
    <>
      {useRemarkSync(ManifestoText)}
      <div className="mt-8 flex justify-center">
        <SignButton />
      </div>
    </>
  )
}

export default ManifestoContent
