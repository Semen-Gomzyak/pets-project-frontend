import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register, login } from 'redux/Auth/operations';
import { SecondRegisterFormSchema } from 'validations/SecondRegisterValidation';
import {
  Button,
  Error,
  InfoForm,
  Input,
  InputsList,
  Link,
  RegisterTitle,
  Text,
  ButtonContainer,
} from './RegisterForm.styled';
import { /*useLocation,*/ useNavigate } from 'react-router';

export const SecondRegisterForm = ({ data, onClick }) => {
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    cityRegion: '',
    mobilePhone: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const response = await dispatch(
      register({
        email: data.email,
        password: data.password,
        name: values.name,
        cityRegion: values.cityRegion,
        mobilePhone: values.mobilePhone,
      })
    );

    if (response.payload.status === 201) {
      const loginResponse = await dispatch(
        login({ email: data.email, password: data.password })
      );

      if (loginResponse.payload.status === 200) {
        navigate('/profile', { replace: true });
      } else {
        console.log('Something went wrong with login');
      }
    } else {
      console.log('Something went wrong with registration, please try again');
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SecondRegisterFormSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <InfoForm autoComplete="off" onSubmit={props.handleSubmit}>
          <RegisterTitle>Registration</RegisterTitle>
          <InputsList>
            <Error name="name" component="div" />
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={props.values.name}
              onChange={props.handleChange}
            />
            <Error name="cityRegion" component="div" />
            <Input
              type="text"
              name="cityRegion"
              placeholder="City, region"
              value={props.values.city}
              onChange={props.handleChange}
            />
            <Error name="mobilePhone" component="div" />
            <Input
              type="text"
              name="mobilePhone"
              placeholder="Mobile phone"
              value={props.values.mobilePhone}
              onChange={props.handleChange}
            />
          </InputsList>
          <ButtonContainer>
            <Button type="submit">Register</Button>
            <Button type="button" onClick={() => onClick()}>
              Back
            </Button>
          </ButtonContainer>
          <Text>
            Already have an account?
            <Link href="/login">Login</Link>
          </Text>
        </InfoForm>
      )}
    </Formik>
  );
};
