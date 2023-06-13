import React from 'react'
import { title, intro, principles, outro } from '@/data/manifesto'

const ManifestoContent = () => {
  return (
    <div>
      <h1 className="mb-6 text-center text-4xl font-bold">{title}</h1>
      <p className="mb-4">{intro}</p>
      <ol className="list-outside list-decimal pl-7">
        {principles.map((principle, index) => (
          <li key={index} className="mb-4">
            {principle}
          </li>
        ))}
      </ol>
      <p>{outro}</p>
    </div>
  )
}

export default ManifestoContent
