import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { API_URL } from '../services/API_URL';

export function usePostUser(endpoint) {
  const queryClient = useQueryClient();
  const postUser = async (dataToSend) => {
    const response = await axios.post(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      localStorage.setItem('Authorization_token', response.headers.authorization);
      return response.data;
    };

  return useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });
}