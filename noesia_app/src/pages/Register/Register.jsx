import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePostUser } from "../../hooks/user/usePostUser";

import ButtonLink from '../../components/ButtonLink/ButtonLink'

import './Register.scss'

const Register = () => {

  const { mutate, isLoading, isSuccess, isError, error } = usePostUser('users');

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.password_confirmation) {
      setIsPasswordInvalid(false);
      const { password_confirmation, ...DataWithoutPasswordConfirmation } = formData;
      const dataToSend = { user: DataWithoutPasswordConfirmation };
      mutate(dataToSend);
    } else {
      setIsPasswordInvalid(true);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/connexion');
    }
  }, [isSuccess, navigate]);

  return (
    <div className="register-wrapper">
      <div className="register-form">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/><br />
          <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/><br />
          <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/><br />
          <input type="password" name='password_confirmation' placeholder='Confirmer votre mot de passe' value={formData.password_confirmation} onChange={handleChange}/><br />
          <button type="submit">S'inscrire</button>
          {isLoading && <div>Loading ...</div>}
          {isError && <div>Une erreur s'est produite : {error.message}</div>}
          {isSuccess && <div>Inscription réussie!</div>}
          {isPasswordInvalid && <div>Les mots de passe ne correspondent pas.</div>}
        </form>
      </div>
      <div className="register-side">
        <img src="./src/assets/images/background.jpg" />
        <ButtonLink content="J'ai déjà un compte" path="/connexion"/>
      </div>
    </div>
  );
};

export default Register;
