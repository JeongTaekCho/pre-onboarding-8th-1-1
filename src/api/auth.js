import client from '../utils/httpClient';

export const authAPI = {
  signup: async (userInfo) => {
    try {
      const res = await client.post('/auth/signup', userInfo);
      return res;
    } catch (err) {
      return err;
    }
  },
  signin: async (userInfo) => {
    try {
      const res = await client.post('/auth/signin', userInfo);
      return res;
    } catch (err) {
      return err;
    }
  },
};
