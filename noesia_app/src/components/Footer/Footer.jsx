import { useState, useEffect } from "react";
import "./Footer.scss";
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';

export default function Footer() {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleFullScreenChange = () => {
    if (!document.fullscreenElement) {
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
  
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <div className="footer">
      <p>Noesia © 2023</p>
      { isFullScreen ? 
          <RxExitFullScreen onClick={handleFullScreenClick} /> 
          :
          <RxEnterFullScreen onClick={handleFullScreenClick} />
      }
    </div>
  );
}
