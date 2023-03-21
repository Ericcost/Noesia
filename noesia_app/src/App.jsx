import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';

//SCSS
import './styles/main.scss'

//Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Door from "./pages/Door/Door";
import Map from "./pages/Map/Map";
import AchievementPopUp from './components/AchievementPopUp/AchievementPopUp';

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
              <Route path='/porte' element={<Door onUnlockSuccess={handleUnlockSuccess} onAchievementTitle={handleUAchievementTitle} />} />
              <Route path="/carte" element={<Map />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route path="/profil/:id" element={<Profile />} />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App;
