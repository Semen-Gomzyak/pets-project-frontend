import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = null;
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/user" /> : children;
};
