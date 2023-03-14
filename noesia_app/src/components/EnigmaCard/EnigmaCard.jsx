import React from 'react'
import './EnigmaCard.scss'

import AvailableSoon from '../../components/AvailableSoon/AvailableSoon'

export default function EnigmaCard({enigma}) {
  return (
    <>
      <div className='enigma-card'>
        <AvailableSoon />
        <div className='enigma-content'>
          <p className='enigma-id'>{enigma.id}</p>
        </div>
      </div> 
    </>
  )
}
