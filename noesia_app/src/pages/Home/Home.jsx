import React from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home-content">
        <div className="home-title">
          <h1>Jeux</h1>
        </div>
        <div className="home-game">
          <img src="src/assets/images/test-game.png" alt="image du jeu" />
          <a href="#" className="home-btn">
            ALLER AU JEU
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
