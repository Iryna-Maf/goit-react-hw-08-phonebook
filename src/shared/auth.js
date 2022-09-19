import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = (token = '') => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
};

export const signup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/users/logout');
  setToken('');
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data: result } = await instance.get('/users/current');
    return result;
  } catch (error) {
    setToken('');
    throw error;
  }
};
