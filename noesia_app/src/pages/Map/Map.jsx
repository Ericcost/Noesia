import { useState, useRef, useEffect } from 'react';

import { useFetchGet } from '../../hooks/fetchData/useFetchData';

import './Map.scss';

import Sidebar from '../../components/Sidebar/Sidebar'
import EnigmaCard from '../../components/EnigmaCard/EnigmaCard'

export default function Map() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const { isLoading, data: enigmas, } = useFetchGet('enigmas', 'enigmas');
  const enigmasRef = useRef(null);

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
      <div className='map' onMouseMove={handleMouseMove}>
        <div className='enigmas' ref={enigmasRef}>
          { enigmas ? (enigmas.map(enigma => (
            <EnigmaCard enigma={enigma} key={enigma.id} path={`/enigme/${enigma.id}`}/>
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
