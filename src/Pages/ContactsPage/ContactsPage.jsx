import { useEffect, useState } from 'react';
import Contacts from '../../components/Contacts/Contacts';
import FormAddPhone from '../../components/FormAddPhone/FormAddPhone';
import Filter from '../../components/Filter/Filter';
import Modal from 'components/Modal/Modal';

import FormChangePhone from 'components/FormChangePhone/FormChangePhone';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContacts,
  addItems,
} from 'redux/contacts/contacts-operations';
import { addFilter } from 'redux/filter/filter-actions';
import { getContactsList } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import s from './contacts-page.module.css';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);
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
  // console.log('phoneList', phoneList);

  const onAddContact = data => {
    const action = addItems(data);
    dispatch(action);
  };

  const onDelContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };
  // console.log('onDelContact :>> ', onDelContact);

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

  const toggleModal = () => {
    setShowModal(!showModal);
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
      {showModal && (
        <Modal onClose={toggleModal}>
          <h2 className={s.title__change}>CHANGE CONTACT</h2>
          <div className={s.contact}>
            <p className={s.contact__name}>Name: {findContact.name}</p>
            <p className={s.contact__name}>Tel: {findContact.number}</p>
          </div>
          <button
            type="button"
            onClick={toggleModal}
            className={s.modal__close}
          >
            close
          </button>
          <FormChangePhone onClose={toggleModal} findContact={findContact} />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
