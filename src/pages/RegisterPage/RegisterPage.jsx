import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register, login } from 'redux/Auth/operations';
import PropTypes from 'prop-types';

export const RegisterPage = () => {
  const initCredendials = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    cityRegion: '',
    mobilePhone: '',
  };
  const [credentials, setCredentials] = useState(initCredendials);

  const [isFirstPage, setIsFirstPage] = useState(true);
  const [nextBackButtonName, setNextBackButtonName] = useState('Next');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onInputChange = event => {
    const key = event.target.name;
    setCredentials(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const onNextBackClick = () => {
    if (credentials.password !== credentials.confirmPassword) {
      return;
    }
    if (
      credentials.email &&
      credentials.password &&
      credentials.confirmPassword
    ) {
      setIsFirstPage(prevStae => !prevStae);
      if (nextBackButtonName === 'Next') {
        setNextBackButtonName('Back');
      } else {
        setNextBackButtonName('Next');
      }
    }
  };

  const onRegisterClick = async event => {
    event.preventDefault();

    const isAllCredentialsPresented = () => {
      let result = true;
      Object.values(credentials).map(value => (result = result && value));
      return result;
    };
    if (!isAllCredentialsPresented()) return;

    const registerCredentials = { ...credentials };
    delete registerCredentials.confirmPassword;

    dispatch(register(registerCredentials));

    dispatch(
      login({ email: credentials.email, password: credentials.password })
    );
    setCredentials(initCredendials);
    navigate('/profile', { replace: true });
  };

  return (
    <div
      style={{
        width: '320px',
        height: '260px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <form
        onSubmit={onRegisterClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isFirstPage && (
          <>
            <input
              type="text"
              placeholder="email"
              name={'email'}
              value={credentials.email}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="password"
              name={'password'}
              value={credentials.password}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="confirm password"
              name={'confirmPassword'}
              value={credentials.confirmPassword}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
          </>
        )}

        {!isFirstPage && (
          <>
            <input
              type="text"
              placeholder="Name"
              name={'name'}
              value={credentials.name}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="City, Region"
              name={'cityRegion'}
              value={credentials.cityRegion}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Mobile phone"
              name={'mobilePhone'}
              value={credentials.mobilePhone}
              onChange={onInputChange}
              style={{ marginBottom: '10px' }}
            />
          </>
        )}

        <button type="submit" style={{ marginBottom: '10px' }}>
          Register
        </button>
        <button type="button" onClick={onNextBackClick}>
          {nextBackButtonName}
        </button>
      </form>
    </div>
  );
};

RegisterPage.propTypes = {
  closeModal: PropTypes.func,
};
