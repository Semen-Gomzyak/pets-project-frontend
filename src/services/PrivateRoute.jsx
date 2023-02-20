// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectIsAuth } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  // const isLoggedIn = useSelector(selectIsAuth);
  const isLoggedIn = null
  return isLoggedIn ? children : <Navigate to="/login" />;
};
