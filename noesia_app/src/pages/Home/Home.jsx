import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

import Cursor from "../../components/Cursor/Cursor";
import AvailableSoon from "../../components/AvailableSoon/AvailableSoon";
import Button from "../../components/Button/Button";

import { useDeleteUser } from "../../hooks/user/useDeleteUser";
import { useGetUser } from "../../hooks/user/useGetUser";

import Background from '../../assets/images/background.jpg';

import "./Home.scss";


const Home = () => {
  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);
  const current_user = data?.user;
  const { mutate: deleteUser } = useDeleteUser('users/sign_out', auth_token);
  const logged = auth_token ? true : false;

  const [showCursor, setShowCursor] = useState(true);
  const [story, setStory] = useState(false)

  const handleLogout = (e) => {
    localStorage.removeItem('Authorization_token');
    deleteUser(auth_token);
  }

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
      const home = document.querySelector(".home")
      if (home) {
        home.setAttribute("data-active-index", index);
      }
    });
    item.addEventListener("mouseout", () => {
      item.classList.remove("active");
    });
  });

  return (
    <>
      <Cursor />
      <div className="home-background">
        { logged ? (
          <div className="home">
            <div className="home-items" >
              <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <Link to='/tutoriel'>
                  Jouer
                </Link>
              </div>
              <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <AvailableSoon />
                Paramètres
              </div>
              <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                <Link onClick={handleLogout}>
                  Se déconnecter
                </Link>
              </div>
            </div>
            <div className="home-background-pattern"></div>
            <img className="home-background-image" src={Background} alt=''></img>
          </div>  
        ) : ( 
          <>
            { story ? (
              <div className="story-overlay">
                <div className="story-content">
                  <div className='story-title'>
                    <h1>Noesia</h1>
                  </div>
                  <div className='story-plot'>
                    <p>Hello, Salut les gars, deuxième jour de cette semaine au top ! On va tout plier je vous le dis, force à vous bruh bruh bruh. Bon j'arrête d'accaparer le prompt y'a une histoire à raconter let's gooooo.</p>
                    <p><TypeAnimation
                      sequence={[
                        9000,
                        "Au milieu d'un désert aride et désolé, un portail mystérieux venait d'apparaître. Les scientifiques, fascinés par cette étrange apparition, se rassemblèrent autour du portail pour en étudier les propriétés. À chaque nouvelle connexion, le portail multipliait les chemins, offrant de nouvelles perspectives aux chercheurs. Mais la connaissance ne se suffit pas à elle seule pour prospérer. Les intentions de ceux qui l'utilisent peuvent la rendre utile ou dangereuse. Certains voulaient exploiter le portail pour en tirer profit, tandis que d'autres cherchaient à comprendre les secrets de cet univers fantastique." // Types 'One'
                      ]}
                      wrapper="strong"
                      cursor={true}
                      repeat={Infinity}
                      style={{ fontSize: '1em', paddingLeft: '5px' }}
                      /></p>
                  </div>
                  <div className='story-btn'>
                    <Button onClick={handleStory} content='Skip'/>
                  </div>
                </div>
                <img className="story-background-image" src={Background} alt=''></img>
              </div>
              ) : (
              <div className="home">
                <div className="home-items" >
                  <div className="home-item" onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                    <Link to='/tutoriel'>
                      Jouer
                    </Link>
                  </div>
                  <div className="home-item"  onMouseEnter={() => setShowCursor(false)} onMouseLeave={() => setShowCursor(true)}>
                    <AvailableSoon />
                    Paramètres
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
            )}     
          </>    
        )}    
      </div>
    </>
  );
};

export default Home;
