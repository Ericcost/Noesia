import { Routes, Route } from 'react-router-dom'

//SCSS
import './styles/style.scss'

//Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Door from "./pages/Door/Door";
import Map from "./pages/Map/Map";

//Components
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className='App'>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/porte' element={<Door />} />
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
