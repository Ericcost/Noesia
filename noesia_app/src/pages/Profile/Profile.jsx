import React from 'react'
import { useGetUser } from '../../hooks/useGetUser';

export default function Profile() {

  const auth_token = localStorage.getItem('Authorization_token');
  const { isLoading, data, isError, error } = useGetUser('member-data', auth_token);

  const current_user = data?.user;

  return (
    <>
      <div>{current_user?.username}</div>
      <div>{current_user?.email}</div>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Une erreur s'est produite : {error.message}</div>}
    </>

  )
}
