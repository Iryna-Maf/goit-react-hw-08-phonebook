import { useEffect } from 'react';
import FormAddPhone from './FormAddPhone/FormAddPhone';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import s from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/contacts/contacts-operations';
import { addFilter } from 'redux/filter/filter-actions';
import { getContactsList } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector(getContactsList);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const phoneList = useSelector(store => {
    const filteredContact = store.contacts.items.filter(item =>
      item.name.toLowerCase().includes(store.filter.toLocaleLowerCase())
    );
    return filteredContact;
  });

  const onAddContact = data => {
    const action = addItems(data);
    dispatch(action);
  };

  const onDelContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  const onChangeFilter = e => {
    const action = addFilter(e.currentTarget.value);
    dispatch(action);
  };

  return (
    <>
      <FormAddPhone className={s.container} onSubmit={onAddContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <Contacts phoneList={phoneList} onDeletePhoneListItem={onDelContact} />
    </>
  );
}

export default App;
