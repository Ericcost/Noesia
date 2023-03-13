import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteUser } from "../../hooks/user/useDeleteUser";
import { useGetUser } from "../../hooks/user/useGetUser";

const Navbar = () => {

  const navigate = useNavigate();

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);
  const current_user = data?.user;
  const { mutate: deleteUser } = useDeleteUser('users/sign_out', auth_token);
  const logged = auth_token ? true : false;
  

  const handleLogout = (e) => {
    localStorage.removeItem('Authorization_token');
    deleteUser(auth_token);
    navigate('/');
  }

  return (
    <div>
      {logged ? (
        <div>
          <Link to={{
            pathname: `/profil/${current_user?.id}`,
            state: {
              user: current_user
            }
          }}>Profil</Link>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <div>
          <Link to="/inscription">S'inscrire</Link>
          <Link to="/connexion">Se connecter</Link>
        </div>
      )}
    </div>
  )

}

export default Navbar
