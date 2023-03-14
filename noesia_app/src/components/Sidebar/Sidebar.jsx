import React from 'react'
import { useNavigate } from "react-router-dom";

import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Button from '../../components/Button/Button'


import { useDeleteUser } from "../../hooks/user/useDeleteUser";
import { useGetUser } from "../../hooks/user/useGetUser";

import "./Sidebar.scss"


export default function Sidebar() {

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
    <>
      <div className='sidebar'>
        {logged ? (
          <>
            <ButtonLink content="Profil" path={`/profil/${current_user?.id}`}/>
            <Button content="Se déconnecter" onClick={handleLogout} />
          </>
          ) : (
          <>
            <ButtonLink content="Se connecter" path="/connexion"/>
            <ButtonLink content="S'inscrire" path="/inscription"/>
          </>
          )
        }
          <ButtonLink content="Retour au menu" path="/"/>
      </div>
    </>
  )
}
