import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { LoginSchema } from 'validations/LoginFormValidation';
import {getIsLoggedIn} from '../../redux/Auth/selectors'
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

  const handleSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
     await dispatch(login(email, password));

    islogin
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
            <Link href="/register">Register</Link>
          </Text>
        </InfoForm>
      </Formik>
    </>
  );
};
