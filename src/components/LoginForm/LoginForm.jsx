import { useDispatch /*, useSelector*/ } from 'react-redux';
import { Formik } from 'formik';
import { LoginSchema } from 'validations/LoginFormValidation';
// import { getIsLoggedIn } from '../../redux/Auth/selectors';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ContainerPage from '../../components/Container/ContainerPage';

import {
  InfoForm,
  InputsList,
  Input,
  Button,
  LoginTitle,
  Error,
  Text,
  Link,
  ButtonContainer,
  LoginSection,
} from './LoginForm.styled';
import { login } from 'redux/Auth/operations';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const islogin = useSelector(getIsLoggedIn);
  const initialValues = {
    email: '',
    password: '',
  };

  const location = useLocation();

  const handleSubmit = async (values, { resetForm }) => {
    const response = await dispatch(
      login({ email: values.email, password: values.password })
    );

    response.payload.status === 200
      ? navigate('/profile', { replace: true })
      : console.log('Something went wrong, please try again');

    resetForm();
  };

  return (
    <>
      <LoginSection>
        <ContainerPage>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            <InfoForm autoComplete="off">
              <LoginTitle>Login</LoginTitle>
              <InputsList>
                <Error name="email" component="div" />
                <Input placeholder="Email" type="email" name="email" />
                <Error name="password" component="div" />
                <Input placeholder="Password" type="password" name="password" />
              </InputsList>
              <ButtonContainer>
                <Button type="submit">Login</Button>
              </ButtonContainer>
              <Text>
                Don't have an account?
                <Link to={'/register'} state={{ from: location }}>
                  Register
                </Link>
              </Text>
            </InfoForm>
          </Formik>
        </ContainerPage>
      </LoginSection>
    </>
  );
};
