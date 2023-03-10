import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

export default function Button({content}) {
  return (
    <div>
        <button>
          <span>
            {content}
          </span>
        </button>
    </div>
  )
}
