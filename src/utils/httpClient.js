import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

client.interceptors.request.use((config) => {
  if (config.url === '/auth/signup' || config.url === '/auth/signin') {
    return config;
  }

  if (localStorage.getItem('token') && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return config;
});

export default client;
