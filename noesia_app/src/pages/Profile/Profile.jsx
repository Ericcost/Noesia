import React from 'react'

import Cursor from '../../components/Cursor/Cursor'
import Button from '../../components/ButtonLink/ButtonLink';
import Sidebar from '../../components/Sidebar/Sidebar';

import { useGetUser } from '../../hooks/user/useGetUser';

import './Profile.scss'

export default function Profile() {

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);

  const current_user = data?.user;
  console.log(data?.user)

  return (
    <>
      <Cursor />
      <div className='profile'>
        <div className='profile-wrapper'>
          <div className='profile-left'>
            <div className='profile-left-top'>
              <img className='profile-picture' src="../src/assets/images/background.jpg" />
              <div class="profile-info">
                <h2 class="profile-name">Nom de l'utilisateur</h2>
                <Button content="Editer le profil" path="/profil/editer"/>
              </div>
            </div>
            <div className='profile-left-bottom'>
              <h2>Caractéristiques</h2>
              <p>Caract</p>
              <p>Caract</p>
              <p>Caract</p>
              <p>Caract</p>
              <p>Caract</p>
              <p>Caract</p>
            </div>
          </div>
          <div className='profile-right'>
            <div className='profile-right-header'>Historique des parties</div>
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
