import React, { useState} from "react";
import { Link } from "react-router-dom";

import Cursor from "../../components/Cursor/Cursor";
import AvailableSoon from "../../components/AvailableSoon/AvailableSoon";

import Background from '../../assets/images/prehome_background.png';

import "./Home.scss";


const Home = () => {
  const [showCursor, setShowCursor] = useState(true);
  
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
        <div className="home">
          <div className="home-items" >
            <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
              Jouer
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
      </div>
    </>
  );
};

export default Home;
