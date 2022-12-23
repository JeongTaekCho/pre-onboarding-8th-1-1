import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    config.headers['Content-Type'] = 'application/json';
    return config;
  }

  if (accessToken && config.headers) {
    config.headers.Authorization = accessToken;
    config.headers['Content-Type'] = 'application/json';
    return config;
  }
});

export default client;
