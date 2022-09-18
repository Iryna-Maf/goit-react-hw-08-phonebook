import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contacts:</h1>
      <label className={s.input}>
        Filter:{' '}
        <input type="text" name="name" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
