import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from 'redux/Auth/authOperations';
import PropTypes from 'prop-types';

export const LoginForm = ({ closeModal }) => {
  const initCredendials = {
    email: '',
    password: '',
  };
  const [credentials, setCredentials] = useState(initCredendials);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onLoginClick = async event => {
    event.preventDefault();
    dispatch(login(credentials));
    setCredentials(initCredendials);
    closeModal();
    navigate('/profile', { replace: true });
  };

  const onEmailChange = event => {
    setCredentials(prevState => ({ ...prevState, email: event.target.value }));
  };
  const onPasswordChange = event => {
    setCredentials(prevState => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  return (
    <div
      style={{
        width: '320px',
        height: '200px',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
          onChange={onEmailChange}
          style={{ marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="password"
          value={credentials.password}
          onChange={onPasswordChange}
          style={{ marginBottom: '10px' }}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  closeModal: PropTypes.func,
};
