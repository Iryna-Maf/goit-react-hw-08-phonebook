import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/auth-operations';

import Navbar from './Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}
export default App;
