import axios from 'axios';
import { useQuery } from "react-query";

import { API_URL } from '../../services/API_URL';

export function useGetUser(endpoint, dataToSend) {
  return useQuery(['user', endpoint, dataToSend], async () =>
     await axios.get(`${API_URL}/${endpoint}`, { headers: 
      {
        'Content-Type': 'application/json',
        'Authorization': dataToSend
      }
    })
    .then(response => response.data)
  );
}
