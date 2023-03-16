import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../../services/API_URL';

export function useGetAchievements(endpoint) {
  return useQuery('achievements', async () => {
    const response = await axios.get(`${API_URL}/${endpoint}`)
    return response.data;
  })
};
