import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { usePostUser } from "../../hooks/user/usePostUser";

import Cursor from "../../components/Cursor/Cursor";
import ButtonLink from '../../components/ButtonLink/ButtonLink'

import './Login.scss'

const Login = () => {

  const { mutate, isLoading, isSuccess, isError, error } = usePostUser('users/sign_in');

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = { "user": formData }
    mutate(formDataToSend)
    navigate("/")
  }

  return (
    <>
      <Cursor />
      <div className='login'>
        <div className="login-wrapper">
          <div className="login-form">
            <form action="" onSubmit={handleSubmit}>
              <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
              <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
              <button type="submit">Se connecter</button>
              {isLoading && <div>Loading ...</div>}
              {isError && <div>Une erreur s'est produite : {error.message}</div>}
              {isSuccess && <div>Connection réussie!</div>}
            </form>
          </div>
          <div className="login-side">
            <img src="./src/assets/images/background.jpg" />
            <ButtonLink content="Créer un nouveu compte" path="/inscription"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
