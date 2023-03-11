import { useState, useEffect } from 'react'
import{ Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';
import preHomeBackground from '../../assets/images/prehome_background.png'
import Cursor from '../../components/Cursor/Cursor'
import Button from '../../components/Button/Button'
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
    <>
      <Cursor />
      <div className='prehome-background'>
        <img src={preHomeBackground} alt="" className='prehome-background-img'/>
        { story ? 
          <div className="story-overlay">
            <div className="story-content">
              <div className='story-title'>
                <h1>Noesia</h1>
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
              <Link to="/accueil"> 
                <Button content="Découvrir Noesia"/>
              </Link>
            </div>
          </div>
        }
      </div>
    </>
  )
}
