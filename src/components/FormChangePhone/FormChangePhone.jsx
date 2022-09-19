import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { changeContactsItems } from 'redux/items/phone-book-items-operations';

import s from './form-change-phone.module.css';

const FormChangePhone = ({ findContact, onClose }) => {
  const [name, setName] = useState(findContact.name);
  const [number, setNumber] = useState(findContact.number);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const hendleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onClickSubmit = e => {
    e.preventDefault();
    const data = {
      id: findContact.id,
      name,
      number,
    };
    dispatch(changeContactsItems(data));
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onClickSubmit} className={s.container}>
      <div className={s.formGroup}>
        <label htmlFor={nameInputId} className={s.label}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Input name"
            className={s.input}
            value={name}
            onChange={hendleInputChange}
            id={nameInputId}
          />
        </label>
      </div>
      <div className={s.formGroup}>
        <label htmlFor={numberInputId} className={s.label}>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Input number"
            className={s.input}
            value={number}
            onChange={hendleInputChange}
            id={numberInputId}
          />
        </label>
      </div>
      <button type="submit" className={s.btn} onSubmit={onClickSubmit}>
        Change contact
      </button>
    </form>
  );
};

export default FormChangePhone;
