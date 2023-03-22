import React from 'react'

export default function CarouselCard({ img }) {
  return (
    <div className='card'>
			<img className='card-background' src={img} />
    </div>
  )
}
