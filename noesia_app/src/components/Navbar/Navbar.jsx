import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <div>
        <Link to="/register">S'inscrire</Link>
      </div>
    </div>
  )

}

export default Navbar