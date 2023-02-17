import { NavLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav style={{ margin: '20px 0px' }}>
        <NavLink to="/" style={{ margin: 20 }}>
          Home
        </NavLink>
        <NavLink to="/profile" style={{ margin: 20 }}>
          Profile
        </NavLink>
      </nav>
    </div>
  );
};
