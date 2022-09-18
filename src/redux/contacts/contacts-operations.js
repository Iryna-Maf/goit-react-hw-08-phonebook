import * as actions from './contacts-actions';
import { getContacts, delContacts, addContacts } from '../../shared/api';

export const fetchContacts = () => {
  const func = async dispatch => {
    dispatch(actions.fetchContactsRequest());
    try {
      const data = await getContacts();
      dispatch(actions.fetchContactsSucces(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
  };
  return func;
};

export const deleteContacts = id => {
  const func = async dispatch => {
    dispatch(actions.delContactRequest());
    try {
      const data = await delContacts(id);
      dispatch(actions.delContactSucces(data.id));
    } catch (error) {
      dispatch(actions.delContactError(error.message));
    }
  };
  return func;
};

export const addItems = data => {
  const func = async (dispatch, getState) => {
    const { contacts } = getState();
    const isDublicate = contacts.items.find(
      item => item.name === data.name || item.phone === data.phone
    );
    if (isDublicate) {
      return alert(
        `Name Such ${data.name} or phone ${data.phone} is already in the phone book!`
      );
    }
    dispatch(actions.addContactRequest);
    try {
      const result = await addContacts(data);
      dispatch(actions.addContactSucces(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };
  return func;
};
