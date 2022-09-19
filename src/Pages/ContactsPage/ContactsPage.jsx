import { useEffect, useState } from 'react';
import Contacts from '../../components/Contacts/Contacts';
import FormAddPhone from '../../components/FormAddPhone/FormAddPhone';
import Filter from '../../components/Filter/Filter';

import FormChangePhone from 'components/FormChangePhone/FormChangePhone';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/items/phone-book-items-operations';
import { addFilter } from 'redux/filter/phoneBookFilter-actions';
import { getContactsList } from 'redux/items/phone-book-items-selector';
import { getFilter } from 'redux/filter/phoneBookFilter-selector';

import s from './contacts-page.module.css';

const ContactsPage = () => {
  const [findContact, setFindContact] = useState({});
  const { loading } = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

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

  const findIdContact = e => {
    const searchContact = phoneList.find(
      contact => contact.id.toString() === e.currentTarget.id
    );
    setFindContact(searchContact);
  };
  return (
    <div>
      <FormAddPhone onSubmit={onAddContact} />
      <Filter value={filter} onChange={onChangeFilter} />
      {loading && <p>...Loading</p>}
      <Contacts
        phoneList={phoneList}
        onDeletePhoneListItem={onDelContact}
        onClick={findIdContact}
      />
    </div>
  );
};

export default ContactsPage;
