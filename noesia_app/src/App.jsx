import { Routes, Route } from 'react-router-dom'

//SCSS
import './App.scss'

//Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";

//Components
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className='App'>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
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
