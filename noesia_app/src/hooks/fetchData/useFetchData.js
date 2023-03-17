import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from "react-query";

import { API_URL } from '../../services/API_URL';

export function useFetchGet(endpoint, query, dataToSend) {
  return useQuery(query, async () =>
     await axios.get(`${API_URL}/${endpoint}`, { headers: 
      {
        'Content-Type': 'application/json',
        'Authorization': dataToSend
      }
    })
    .then(response => response.data)
  );
}

export function useFetchPost(endpoint, query) {
  const queryClient = useQueryClient();
  const postData = async (dataToSend) => {
    const response = await axios.post(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
      localStorage.setItem('Authorization_token', response.headers.authorization);
      return response.data;
    };

  return useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries(query);
    },
  });
}

export function useFetchDelete(endpoint, query) {
  const queryClient = useQueryClient();
  const deleteData = async (dataToSend) => {
    const response = await axios.delete(`${API_URL}/${endpoint}`, {
      headers: {
        Authorization: dataToSend,
      },
    });
    return response.data;
  };
  
  return useMutation(deleteData, {
    onSuccess: () => {
      queryClient.removeQueries(query);
    },
  });
}

export function useFetchPut(endpoint, query, auth_token) {
  const queryClient = useQueryClient();
  const patchData = async (dataToSend) => {
    const response = await axios.put(`${API_URL}/${endpoint}`, dataToSend, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth_token,
      },
    });
    return response.data;
  };

  return useMutation(patchData, {
    onSuccess: () => {
      queryClient.invalidateQueries(query);
    },
  });
}
