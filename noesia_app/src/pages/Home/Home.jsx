import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

import Cursor from "../../components/Cursor/Cursor";
import AvailableSoon from "../../components/AvailableSoon/AvailableSoon";

import Background from '../../assets/images/prehome_background.png';

import "./Home.scss";


const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  const [story, setStory] = useState(false)

  useEffect(() => {
    setStory(true)
  }, [])

  function handleStory() {
    setStory(!story);
  }
  
  Array.from(document.getElementsByClassName("home-item"))
  .forEach((item, index) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("active");
      document.querySelector(".home").setAttribute("data-active-index", index);
    });
    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
    });
  });


  return (
    <>
      <Cursor />
      <div className="home-background">
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
                <button onClick={handleStory}>Skip</button>
              </div>
            </div>
            <img className="story-background-image" src={Background} alt=''></img>
          </div>
          :
          <div className="home">
            <div className="home-items" >
              <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <Link to="/tutoriel">
                Jouer
                </Link>
              </div>
              <div className="home-item"  onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <AvailableSoon />
                Plein écran
              </div>
              <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <Link to="/connexion">
                  Se connecter 
                </Link>
              </div>
            </div>
            <div className="home-background-pattern"></div>
            <img className="home-background-image" src={Background} alt=''></img>
          </div>
          
}
          
          
      
      </div>
    </>
  );
};

export default Home;
