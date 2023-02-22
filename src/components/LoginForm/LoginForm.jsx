import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { LoginSchema } from 'validations/LoginFormValidation';
import { getIsLoggedIn } from '../../redux/Auth/selectors';
import { useLocation } from 'react-router-dom';

import {
  InfoForm,
  InputsList,
  Input,
  Button,
  LoginTitle,
  Error,
  Text,
  Link,
} from './LoginForm.styled';
import { login } from 'redux/Auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islogin = useSelector(getIsLoggedIn);
  const initialValues = {
    email: '',
    password: '',
  };

  const location = useLocation();

  const handleSubmit = async (values, { resetForm }) => {
    const response = await dispatch(login(values));

    response.payload.status === 200
      ? navigate('/profile', { replace: true })
      : console.log('Something went wrong, please try again');
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <InfoForm autoComplete="off">
          <LoginTitle>Login</LoginTitle>
          <InputsList>
            <Input placeholder="Email" type="email" name="email" />
            <Error name="email" component="div" />

            <Input placeholder="Password" type="password" name="password" />
            <Error name="password" component="div" />
          </InputsList>
          <Button type="submit">Login</Button>
          <Text>
            Don't have an account?
            <Link to={'/register'} state={{ from: location }}>
              Register
            </Link>
          </Text>
        </InfoForm>
      </Formik>
    </>
  );
};
