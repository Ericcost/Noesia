import { usePostUser } from "../../hooks/user/usePostUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/connexion")
    } else {
      setIsPasswordInvalid(true);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <input type="password" name='password_confirmation' placeholder='Confirmer votre mot de passe' value={formData.password_confirmation} onChange={handleChange}/>
        <button type="submit">S'inscrire</button>
      </form>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Une erreur s'est produite : {error.message}</div>}
      {isSuccess && <div>Inscription réussie!</div>}
      {isPasswordInvalid && <div>Les mots de passe ne correspondent pas.</div>}
    </div>
  );
};

export default Register;
