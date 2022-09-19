import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  const { email } = useSelector(getUser);
  return (
    <div>
      <span className={s.userName}>{email}</span>
      <button onClick={onLogout} className={s.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
