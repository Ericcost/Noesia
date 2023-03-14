import { useState } from 'react'
import { useGetUser } from '../../hooks/user/useGetUser';
import Button from '../../components/ButtonLink/ButtonLink';

import './EditProfile.scss'

const EditProfile = () => {

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);

  const current_user = data?.user;

  const [formData, setFormData] = useState(
    {
      username: current_user?.username,
      email: current_user?.email,
      actual_password: "",
      new_password: "",
      new_password_confirmation: ""
    }
  )

  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isNewPasswordInvalid, setIsNewPasswordInvalid] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    console.log(formData.actual_password)
    console.log(current_user)
    e.preventDefault();
    if (formData.actual_password === current_user.password) {
      setIsPasswordInvalid(false)
    } else {
      setIsPasswordInvalid(true)
    }
    


  }

  return (
    <div className="edit-wrapper">
      <div className="edit-form">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/>
          <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
          <input type="password" name='actual_password' placeholder='Mot de passe actuel' value={formData.actual_password} onChange={handleChange}/>
          <input type="password" name='new_password' placeholder='Nouveau mot de passe' value={formData.new_password} onChange={handleChange}/>
          <input type="password" name='new_password_confirmation' placeholder='Confirmer le mot de passe' value={formData.new_password_confirmation} onChange={handleChange}/>
          <button type="submit">Editer le profil</button>
          {isLoading && <div>Loading ...</div>}
          {isError && <div>Une erreur s'est produite : {error.message}</div>}
          {isPasswordInvalid && <div>Mot de passe incorrect.</div>}
        </form>
      </div>
      <div className="edit-side">
        <img src="../../src/assets/images/background.jpg" />
        <Button content="Retour au profil" path={`/profil/${current_user?.id}`}/>
      </div>
    </div>
  )
}

export default EditProfile
