import axios from 'axios';

const API_URL = "http://localhost:3000";

async function getFetch(endpoint) {
  const response = await axios.get(`${API_URL}/${endpoint}`);
  return response.data;
}

async function postFetch(endpoint, data) {
  const response = await axios.post(`${API_URL}/${endpoint}`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  })
}

export const authAPI = {
  register: (data) => postFetch("users", data)
}