import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import s from './form-add-phone.module.css';

function FormAddPhone({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
      name,
      number,
    };
    onSubmit(data);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onClickSubmit} className={s.container}>
      <div className={s.formGroup}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <br></br>
        <input
          onChange={hendleInputChange}
          value={name}
          className={s.input}
          type="text"
          name="name"
          placeholder="Введите имя и фамилию"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
        />
      </div>
      <div className={s.formGroup}>
        <label htmlFor={numberInputId} className={s.label}>
          Number
        </label>
        <br></br>
        <input
          onChange={hendleInputChange}
          value={number}
          className={s.input}
          type="tel"
          name="number"
          placeholder="Введите номер телефона"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
        />
        <div className={s.formGroup}>
          <button className={s.btn} type="submit">
            Add contact
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormAddPhone;

FormAddPhone.defaultProps = {
  onSubmit: () => {},
};

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func,
};
