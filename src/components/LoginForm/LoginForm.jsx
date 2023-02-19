import { useState } from 'react';
import axios from 'axios';

export const LoginForm = () => {
  const initCredendials = {
    email: '',
    password: '',
  };
  const [credentials, setCredentials] = useState(initCredendials);

  const loginUser = async event => {
    event.preventDefault();
    try {
      const loginResponse = await axios.post(
        `http://localhost:3000/api/users/login`,
        credentials
      );
      console.log(loginResponse.data);
      setCredentials(initCredendials);
    } catch (error) {
      console.log(error.message);
    }
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
        width: '300px',
        height: '200px',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // zIndex: 1300,
      }}
    >
      <form
        onSubmit={loginUser}
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
