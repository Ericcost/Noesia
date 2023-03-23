import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useFetchGet } from '../hooks/fetchData/useFetchData';

export default function PrivateRoutes() {
  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useFetchGet('member-data', 'user', auth_token);
  const logged = auth_token ? true : false;


  return (
    <>
      <div>
        {
          logged ? <Outlet /> : <Navigate to="connexion" /> 
        }
      </div>
    </>
  )
}
