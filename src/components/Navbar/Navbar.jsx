import { Route, Routes, NavLink } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import useAuth from 'shared/hooks/useAuth';

import UserMenu from 'components/UserMenu/UserMenu';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

import s from './navbar.module.css';

const Home = lazy(() => import('../Home/Home'));
const NotFoundPage = lazy(() =>
  import('../../Pages/NotFoundPage/NotFoundPage')
);
const RegisterPage = lazy(() =>
  import('../../Pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../Pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../Pages/ContactsPage/ContactsPage')
);

const getClassName = ({ isActive }) => {
  return isActive ? `${s.active} ${s.headerNav}` : s.headerNav;
};

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <div className="navifation">
            <NavLink to="/" className={getClassName}>
              Home
            </NavLink>
            {isLogin && (
              <NavLink to="/contacts" className={getClassName}>
                Contacts
              </NavLink>
            )}
          </div>
          {!isLogin ? (
            <div className={s.register}>
              <NavLink to="/login" className={getClassName}>
                Login
              </NavLink>
              <NavLink to="/register" className={getClassName}>
                Register
              </NavLink>
            </div>
          ) : (
            <UserMenu />
          )}
        </nav>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Navbar;
