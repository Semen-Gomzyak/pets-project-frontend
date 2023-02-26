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
} from './RegisterForm.styled';

import React from 'react';

export const FirstRegisterForm = ({ data, onSubmit, onClick }) => {
  const initialValues = {
    email: data.email || '',
    password: data.password || '',
    confirmPassword: data.confirmPassword || '',
  };

  const saveFormValuesToLocalStorage = values => {
    localStorage.setItem('register1FormValues', JSON.stringify(values));
  };

  const getFormValuesFromLocalStorage = () => {
    const savedValues = localStorage.getItem('register1FormValues');
    return savedValues ? JSON.parse(savedValues) : initialValues;
  };

  const handleSubmit = values => {
    saveFormValuesToLocalStorage(values);
    console.log(values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={getFormValuesFromLocalStorage()}
      validationSchema={RegisterFormSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <InfoForm autoComplete="off" onSubmit={props.handleSubmit}>
          <RegisterTitle>Registration</RegisterTitle>
          <InputsList>
            <Error name="email" component="div" />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={props.values.email}
              onChange={props.handleChange}
            />
            <Error name="password" component="div" />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
            />
            <Error name="confirmPassword" component="div" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={props.values.confirmPassword}
              onChange={props.handleChange}
            />
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
