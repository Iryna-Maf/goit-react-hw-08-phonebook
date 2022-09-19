import s from './text-field.module.css';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';

const TextField = ({
  label,
  name,
  value,
  placeholder,
  required,
  type,
  pattern,
  title,
  onChange,
}) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={s.block}>
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}:
          <input
            className={s.input}
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            required={required}
            value={value}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
};

export default TextField;

TextField.defaultProps = {
  type: 'text',
  required: false,
};
