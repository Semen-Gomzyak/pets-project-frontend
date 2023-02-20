import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from 'redux/Auth/operations';
import PropTypes from 'prop-types';

export const LoginPage = () => {
  const initCredendials = {
    email: '',
    password: '',
  };
  const [credentials, setCredentials] = useState(initCredendials);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onInputChange = event => {
    const key = event.target.name;
    setCredentials(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  //   const onEmailChange = event => {
  //     setCredentials(prevState => ({ ...prevState, email: event.target.value }));
  //   };
  //   const onPasswordChange = event => {
  //     setCredentials(prevState => ({
  //       ...prevState,
  //       password: event.target.value,
  //     }));
  //   };

  const onLoginClick = async event => {
    event.preventDefault();
    dispatch(login(credentials));
    setCredentials(initCredendials);
    navigate('/profile', { replace: true });
  };

  return (
    <div
      style={{
        width: '320px',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <form
        onSubmit={onLoginClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          placeholder="email"
          value={credentials.email}
          onChange={onInputChange}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="password"
          value={credentials.password}
          onChange={onInputChange}
          style={{ marginBottom: '10px' }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  closeModal: PropTypes.func,
};
