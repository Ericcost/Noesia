import React, { useState} from "react";
import { Link } from "react-router-dom"

import Cursor from "../../components/Cursor/Cursor"

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
      {showCursor && <Cursor />}
      <div className="home-background">
        <div className="home">
          <div className="home-items" >
            <div className="home-item no-cursor" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
              Play
            </div>
            <div className="home-item no-cursor" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
              Settings
            </div>
            <div className="home-item no-cursor" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                Quit
            </div>
          </div>
          <div className="home-background-pattern"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
