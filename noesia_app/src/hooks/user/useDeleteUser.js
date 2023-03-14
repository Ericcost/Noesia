import axios from 'axios';
import { useMutation } from 'react-query';
import { API_URL } from '../../services/API_URL';

export function useDeleteUser() {
  const deleteUser = async (auth_token) => {
    const response = await axios.delete(`${API_URL}/users/sign_out`, {
      headers: {
        Authorization: auth_token,
      },
    });
    return response.data;
  };

  return useMutation(deleteUser);
}