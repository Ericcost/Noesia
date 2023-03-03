import { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import './PreHome.scss'

export default function PreHome() {
  const [story, setStory] = useState(false)

  useEffect(() => {
    setStory(true)
  }, [])

  function handleStory() {
    setStory(!story);
  }
  
  return (
    <div className='prehome-background'>
      { story ? 
        <div className="story-overlay">
          <div className="story-content">
            <div>
              <h1>NOESIA</h1>
            </div>
            <div>
              <p>Intrigue</p>
            </div>
            <div>
              <button onClick={handleStory}>Close</button>
            </div>
          </div>
        </div>
        :
        <div className='prehome'>
          <div className="prehome-content">
            {/* <h2>Bienvenue à Noesia</h2>
            <p>Blabla présentation du projet/univers by Ericu.</p> */}
            <Link to='/'>
              <button>Découvrir Noesia</button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
