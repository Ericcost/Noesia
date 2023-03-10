import { usePostUser } from "../../hooks/usePostUser";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <button type="submit">Se connecter</button>
      </form>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Une erreur s'est produite : {error.message}</div>}
      {isSuccess && <div>Connection réussie!</div>}
    </div>
  )
}

export default Login
