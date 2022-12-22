import axios from 'axios';
import client from '../utils/httpClient';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const headers = { headers: { 'Content-Type': 'application/json' } };
export const postSignup = async (data) => {
  try {
    const res = await axios.post(`${SERVER_URL}/auth/signup`, data, headers);
    if (res) localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const postLogin = async (data) => {
  try {
    const res = await axios.post(`${SERVER_URL}/auth/signin`, data, headers);
    if (res) localStorage.setItem('access_token', `Bearer ${res.data.access_token}`);
    return res;
  } catch (err) {
    return err;
  }
};

// export const authAPI = {
//   signup: (email, password) => {
//     return client.post('/auth/signup', { email, password });
//   },
//   signin: (email, password) => {
//     return client.post('/auth/signin', { email, password });
//   },
// };
