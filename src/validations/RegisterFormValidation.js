import * as Yup from 'yup';

export const RegisterFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .min(10, 'Email must be at least 10 characters')
    .max(63, 'Email must be at most 63 characters')
    .email('Please enter a valid email address')
    .matches(
      /^[a-zA-Z0-9_]+([.-]?[a-zA-Z0-9_]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/^\S*$/, 'Password must not contain spaces')
    .matches(/^[^\s]+$/, 'Password cannot contain spaces'),
  confirmPassword: Yup.string()
    .required('Please enter your password again ')
    .matches(/^\S*$/, 'Password must not contain spaces')
    .oneOf(
      [Yup.ref('password'), null],
      'Password does not match. Please, try again'
    ),
});
