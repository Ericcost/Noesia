import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GiExitDoor, GiReturnArrow } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { BsBook } from "react-icons/bs";

import ButtonLink from '../../components/ButtonLink/ButtonLink';
import Button from '../../components/Button/Button'


import { useDeleteUser } from "../../hooks/user/useDeleteUser";
import { useGetUser } from "../../hooks/user/useGetUser";


import "./Sidebar.scss"


export default function Sidebar() {
  const [isProfileHovering, setIsProfileHovering] = useState(false);
  const [isDisconnectHovering, setIsDisconnectHovering] = useState(false);
  const [isConnectHovering, setIsConnectHovering] = useState(false);
  const [isSubscribeHovering, setIsSubscribeHovering] = useState(false);
  const [isGetBackHovering, setIsGetBackHovering] = useState(false);

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
        <div className='sidebar-items'>
          {logged ? (
            <>
              <div className='sidebar-item' onMouseEnter={() => setIsProfileHovering(true)} onMouseLeave={() => setIsProfileHovering(false)}>
                <Link to={`/profil/${current_user?.id}`}><CgProfile /></Link>
                {isProfileHovering ? (
                  <ButtonLink content="Profil" path={`/profil/${current_user?.id}`}/>
                ) : 
                  null
                }
              </div>
              <div className='sidebar-item' onMouseEnter={() => setIsDisconnectHovering(true)} onMouseLeave={() => setIsDisconnectHovering(false)}>
                <Link onClick={handleLogout}><GiExitDoor /></Link>
                {isDisconnectHovering ? (
                  <Button content="Se déconnecter" onClick={handleLogout} />
                ) : 
                  null
                }
              </div>
            </>
            ) : (
              <>
              <div className='sidebar-item' onMouseEnter={() => setIsConnectHovering(true)} onMouseLeave={() => setIsConnectHovering(false)}>
              <Link to="/connexion"><FaConnectdevelop /></Link>
                {isConnectHovering ? (
                  <ButtonLink content="Se connecter" path="/connexion"/>
                ) : 
                  null
                }
              </div>
              <div className='sidebar-item' onMouseEnter={() => setIsSubscribeHovering(true)} onMouseLeave={() => setIsSubscribeHovering(false)}>
                <Link to="/inscription"><BsBook /></Link>
                { isSubscribeHovering ? (
                  <ButtonLink content="S'inscrire" path="/inscription"/>
                ) : 
                  null
                }
              </div>
            </>
            )
          }
          <div className='sidebar-item' onMouseEnter={() => setIsGetBackHovering(true)} onMouseLeave={() => setIsGetBackHovering(false)}>
            <Link to='/'><GiReturnArrow /></Link>
            { isGetBackHovering ? (
              <ButtonLink content="Retour au menu" path="/"/>
            ) : 
              null
            }
          </div>
        </div>
      </div>
    </>
  )
}
