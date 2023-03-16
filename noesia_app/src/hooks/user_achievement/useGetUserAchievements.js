import axios from 'axios';
import { useQuery } from 'react-query';
import { API_URL } from '../../services/API_URL';

export function useGetUserAchievements(endpoint, user_id) {
  return useQuery('user_achievements', async () => {
    const response = await axios.get(`${API_URL}/${endpoint}?user_id=${user_id}`)
    return response.data;
  })
};
