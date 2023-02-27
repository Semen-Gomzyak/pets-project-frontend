import { Formik } from 'formik';
import { RegisterFormSchema } from 'validations/RegisterFormValidation';
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
  InputDiv,
} from './RegisterForm.styled';

import React from 'react';

export const FirstRegisterForm = ({ data, onSubmit, onClick }) => {
  const initialValues = {
    email: data.email || '',
    password: data.password || '',
    confirmPassword: data.confirmPassword || '',
  };

  const handleSubmit = values => {
    console.log(values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterFormSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <InfoForm autoComplete="off" onSubmit={props.handleSubmit}>
          <RegisterTitle>Registration</RegisterTitle>
          <InputsList>
            <InputDiv>
              <Error name="email" component="div" />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={props.values.email}
                onChange={props.handleChange}
              />
            </InputDiv>
            <InputDiv>
              <Error name="password" component="div" />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={props.values.password}
                onChange={props.handleChange}
              />
            </InputDiv>
            <InputDiv>
              <Error name="confirmPassword" component="div" />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={props.values.confirmPassword}
                onChange={props.handleChange}
              />
            </InputDiv>
          </InputsList>
          <ButtonContainer>
            <Button type="submit" disabled={!onClick ? false : true}>
              Next
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
