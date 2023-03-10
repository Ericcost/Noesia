import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({content}) {
  return (
    <div>
      <Link to='/home'>
        <button>{content}</button>
      </Link>
    </div>
  )
}
