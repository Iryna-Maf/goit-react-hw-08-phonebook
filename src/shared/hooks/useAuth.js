import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/auth/auth-selectors';

const useAuth = () => {
  const isAuth = useSelector(isLogin);
  return isAuth;
};
export default useAuth;
