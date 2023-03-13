import { useState, useRef, useEffect } from 'react';

import { useGetEnigmas } from "../../hooks/enigma/useGetEnigmas";

import './Map.scss';

import Sidebar from '../../components/Sidebar/Sidebar'
import EnigmaCard from '../../components/EnigmaCard/EnigmaCard'
import Cursor from '../../components/Cursor/Cursor';

export default function Map() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const { isLoading, data, isError, error } = useGetEnigmas('enigmas');
  const enigmasRef = useRef(null);
  
  const Data = data?.data;
  // console.log(Data);


  const handleMouseMove = e => {
    const ref = enigmasRef.current;
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
    const maxX = ref.scrollWidth - window.innerWidth;
    const maxY = ref.scrollHeight - window.innerHeight;
    const panX = maxX * mousePosition.x * -1;
    const panY = maxY * mousePosition.y * -1;
    ref.style.transform = `translate(${panX}px, ${panY}px)`;
  };

  return (
    <>
      <Cursor />
      <div className='map' onMouseMove={handleMouseMove}>
        <div className='enigmas' ref={enigmasRef}>
          { Data ? (Data.map(enigma => (
            <EnigmaCard enigma={enigma} key={enigma.id}/>
          ))
          ) : (
            <div>
              {isLoading}
            </div>
          )
          }
        </div>
        <Sidebar />
      </div>
    </>
  )
}
