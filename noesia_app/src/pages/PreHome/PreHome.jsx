import React from 'react'
import{ Link } from 'react-router-dom'
import './PreHome.scss'

export default function PreHome() {
  return (
    <div className='prehome-background'>
      <div className='prehome'>
        <div className="prehome-content">
          <h1>Welcome to Noesia</h1>
          <p>Blabla présentation du projet/univers by Ericu.</p>
          <Link to='/'>
            <button>Découvrir Noesia</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
