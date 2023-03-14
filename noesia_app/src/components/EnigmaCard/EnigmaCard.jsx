import React from 'react'
import './EnigmaCard.scss'

export default function EnigmaCard({enigma}) {
  return (
    <>
      <div className='enigma-card'>
        <p>{enigma.id}</p>
      </div>
    </>
  )
}
