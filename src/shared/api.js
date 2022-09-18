import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63219f6cfd698dfa29fb6d2b.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const delContacts = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};
