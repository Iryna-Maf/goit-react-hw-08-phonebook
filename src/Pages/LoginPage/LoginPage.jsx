import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import useAuth from 'shared/hooks/useAuth';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
