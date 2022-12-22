import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

client.interceptors.request.use((config) => {
  if (config.url === '/auth/signup' || config.url === '/auth/signin') {
    return config;
  }

  if (localStorage.getItem('access_token') && config.headers) {
    config.headers.Authorization = `${localStorage.getItem('access_token')}`;
  }
  return config;
});

export default client;
