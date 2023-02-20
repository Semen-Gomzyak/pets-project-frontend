// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsAuth } from 'redux/Auth/authSelectors';

// export const PublicRoute = ({ children, restricted = false }) => {
//   const isLoggedIn = useSelector(selectIsAuth);
//   const shouldRedirect = isLoggedIn && restricted;
//   return shouldRedirect ? <Navigate to="/user" /> : children;
// };
