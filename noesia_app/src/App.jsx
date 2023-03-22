import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

//SCSS
import './styles/main.scss'

//Pages
import Home from "./pages/Home/Home";
import Admin from './pages/Admin/Admin';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Door from "./pages/Door/Door";
import DiscoverMap from "./pages/Maps/DiscoverMap/DiscoverMap";
import Parameters from "./pages/Parameters/Parameters";
import AchievementPopUp from './components/AchievementPopUp/AchievementPopUp';
import Enigma1 from "./pages/Enigmas/Enigma1/Enigma1";
import Enigma2 from "./pages/Enigmas/Enigma2/Enigma2";

//Components
import Footer from "./components/Footer/Footer";

function App() {

  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  const [achievementTitle, setAchievementTitle] = useState('');

  const handleUnlockSuccess = () => {
    setAchievementUnlocked(true);
  };

  const handleUAchievementTitle = (title) => {
    setAchievementTitle(title);
  };

  return (
      <div className='App'>
        <main>
            {achievementUnlocked && <AchievementPopUp 
              text={achievementTitle} 
              onClose={() => setAchievementUnlocked(false)} 
            />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path='/porte' element={<Door />} />
              <Route path="/découverte" element={<DiscoverMap />} />
              <Route path='/porte' element={<Door onUnlockSuccess={handleUnlockSuccess} onAchievementTitle={handleUAchievementTitle} />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route path="/profil/:id" element={<Profile />} />
              <Route path="/paramètres" element={<Parameters/>} />
              <Route path="/enigme/1" element={<Enigma1 />} />
              <Route path="/enigme/2" element={<Enigma2 />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App;
