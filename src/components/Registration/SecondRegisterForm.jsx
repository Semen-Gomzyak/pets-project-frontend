import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';
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

export const SecondRegisterForm = ({ data, onClick }) => {
  const initialValues = {
    name: '',
    cityRegion: '',
    mobilePhone: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {
     dispatch(
        register({
          email: data.email,
          password: data.password,
          name: values.name,
          cityRegion: values.cityRegion,
          mobilePhone: values.mobilePhone,
        })
    );
    
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

