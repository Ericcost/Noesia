import { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
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
            <div className='story-title'>
              <h1>NOESIA</h1>
            </div>
            <div className='story-plot'>
              <p><TypeAnimation
                sequence={[
                  1000,
                  'Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue Intrigue', // Types 'One'
                  1000, 
                  'Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot Plot',
                  1000,
              
                ]}
                wrapper="strong"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
              /></p>
            </div>
            <div className='story-btn'>
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
