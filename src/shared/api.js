import { instance } from './auth';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const delContacts = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};
export const changeContacts = async data => {
  await instance.patch(`/contacts/${data.id}`, {
    name: data.name,
    number: data.number,
  });
  return data;
};
