import React from 'react';

import Carousel from '../../../components/Carousel/Carousel';
import CarouselCard from '../../../components/CarouselCard/CarouselCard';
import CardImg01 from '../../../assets/images/discover01.png';
import CardImg02 from '../../../assets/images/discover02.png';
import CardImg03 from '../../../assets/images/discover03.png';
import CardImg04 from '../../../assets/images/discover04.png';

import './Enigma2.scss';

export default function Enigma2() {
  const CARDS = 4;
  const images = [CardImg01, CardImg02, CardImg03, CardImg04];

  return (
    <>
      <div className='enigma2'>
        <div className='enigma2-top'>
          Enigma2-top
        </div>
        <div className='enigma2-bottom'>
          <div className='enigma2-bottom-left'>
            <div className='buttons'>
              Buttons
            </div>
          </div>
          <div className='enigma2-bottom-right'>
          <Carousel>
            {[...new Array(CARDS)].map((_, i) => (
              <CarouselCard img={images[i]}/>
            ))}
          </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
