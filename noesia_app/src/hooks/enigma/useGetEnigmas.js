import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../../services/API_URL';

export function useGetEnigmas(endpoint) {
  return useQuery('enigmas', async () => {
    const response = await axios.get(`${API_URL}/${endpoint}`)
    // console.log(response.data);
    return response
  })
};