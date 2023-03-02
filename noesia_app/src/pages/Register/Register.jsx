import React, { useState } from 'react'
import { authAPI } from '../../services/fetchData'

const Register = () => {

  const [formData, setFormData] = useState(
    {
      username: "",
      email: "",
      emailConfirmation: "",
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
    if (formData.email === formData.emailConfirmation) {
      const { emailConfirmation, ...formDataWithoutEmailConfirmation } = formData
      const formDataToSent = {"user": formDataWithoutEmailConfirmation}
      authAPI.register(formDataToSent)
    } else {
      return (
        <div>
          Les mots de passe ne correspondent pas.
        </div>
      )
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Nom d'utilisateur" value={formData.username} onChange={handleChange}/>
        <input type="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        <input type="email" name='emailConfirmation' placeholder='Confirmer votre email' value={formData.emailConfirmation} onChange={handleChange}/>
        <input type="password" name='password' placeholder='Mot de passe' value={formData.password} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}>S'inscrire</button>
      </form>
    </div>
  )

}

export default Register
