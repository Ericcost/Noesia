import { Routes, Route } from 'react-router-dom'

//SCSS
import './App.scss'

//Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import PreHome from "./pages/PreHome/PreHome";

//Components
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
      <div className='App'>
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/inscription" element={<Register />} />
              <Route path="/profil/:id" element={<Profile />} />
              <Route path='/prehome' element={<PreHome />}/>
            </Routes>
        </main>
        <footer>

        </footer>
      </div>
  )
}

export default App
