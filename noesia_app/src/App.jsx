import { Routes, Route } from 'react-router-dom'

//SCSS
import './styles/main.scss'

//Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Door from "./pages/Door/Door";
import DiscoverMap from "./pages/Maps/DiscoverMap/DiscoverMap";
import Parameters from "./pages/Parameters/Parameters";
import Enigma1 from "./pages/Enigmas/Enigma1/Enigma1";
import Enigma2 from "./pages/Enigmas/Enigma2/Enigma2";

//Components
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className='App'>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/porte' element={<Door />} />
              <Route path="/découverte" element={<DiscoverMap />} />
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
