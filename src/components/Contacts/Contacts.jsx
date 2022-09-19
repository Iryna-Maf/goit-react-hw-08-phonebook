import PropTypes from 'prop-types';
import s from './contacts.module.css';

const Contacts = ({ phoneList, onDeletePhoneListItem, onClick }) => {
  return (
    <ul className={s.list}>
      {phoneList.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.nameText}>{name}</p>
          <p className={s.phoneNumber}>{number}</p>
          <button className={s.btn} onClick={() => onDeletePhoneListItem(id)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  Contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletePhoneListItem: PropTypes.func,
};
