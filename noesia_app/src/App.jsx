<<<<<<< HEAD
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react';
=======
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
>>>>>>> 94a293159e8961428aa9687b7af3be6e9c163603

import { useFetchGet } from './hooks/fetchData/useFetchData';

//SCSS
import './styles/main.scss'

//Pages
import Home from "./pages/Home/Home";
import Admin from './pages/Admin/Admin';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
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

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useFetchGet('member-data', 'user', auth_token);
  const current_user = data?.user;
  const logged = auth_token ? true : false;

  const handleUnlockSuccess = () => {
    setAchievementUnlocked(true);
  };

  const handleAchievementTitle = (title) => {
    setAchievementTitle(title);
  };

  function Layout() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }

  function ProtectedRoute({ children }) {
    if (!logged) {
      return <Navigate to="/connexion" />;
    };

    return children;
  } 

  return (
      <div className='App'>
        <main>
            {achievementUnlocked && <AchievementPopUp 
              text={achievementTitle} 
              onClose={() => setAchievementUnlocked(false)} 
            />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/découverte" element={<DiscoverMap />} />
              <Route path='/porte' element={<Door onUnlockSuccess={handleUnlockSuccess} onAchievementTitle={handleAchievementTitle} />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
                children= {[
                  <Route key="admin" path="/admin" element={<Admin />} />,
                  <Route key="profil" path="/profil/:id" element={<Profile />} />,
                  <Route key="profil/editer" path="/profil/:id/editer" element={<EditProfile />} />,
                  <Route key="paramètres" path="/paramètres" element={<Parameters/>} />,
                  <Route key="enigme/1" path="/enigme/1" element={<Enigma1 />} />,
                  <Route key="enigme/2" path="/enigme/2" element={<Enigma2 />} />
                ]}
              />
            </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}

export default App;
