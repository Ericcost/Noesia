import { useRef, useState } from "react";
import { Link } from "react-router-dom"

import "./Home.scss";


const Home = () => {
  
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
    <div className="home-background">
      <div className="home">
        <div className="home-items" >
          <div className="home-item">
            Play
          </div>
          <div className="home-item">
            Settings
          </div>
          <div className="home-item">
              Quit
          </div>
        </div>
        <div className="home-background-pattern"></div>
      </div>
    </div>
  );
};

export default Home;
