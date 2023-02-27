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
  ShowPass,
  ShowConfirmPass,
} from './RegisterForm.styled';

import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const FirstRegisterForm = ({ data, onSubmit, onClick }) => {
  const initialValues = {
    email: data.email || '',
    password: data.password || '',
    confirmPassword: data.confirmPassword || '',
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const showPass = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  const showConfirmPass = () => {
    setShowConfirmPassword(prevShowConfirmPassword => !prevShowConfirmPassword);
  };

  const handleSubmit = values => {
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

/*
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
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
            />
            <ShowPass onClick={showPass}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </ShowPass>
            <Error name="confirmPassword" component="div" />
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={props.values.confirmPassword}
              onChange={props.handleChange}
            />
            <ShowConfirmPass onClick={showConfirmPass}>
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </ShowConfirmPass>
            */

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
