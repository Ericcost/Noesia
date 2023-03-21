import './AchievementPopUp.scss';
import { useEffect } from 'react';

import { FaTrophy } from 'react-icons/fa';


function AchievementPopUp({ text, onClose }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className='achievement-popup'>
      <div className='achievement-popup-icon'>
        <FaTrophy />
      </div>
      <div className='achievement-popup-text'>
        <h2>Succès déverrouillé !</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default AchievementPopUp;
