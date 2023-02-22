import * as Yup from 'yup';

export const RegisterFormSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/^[^\s]+$/, 'Password cannot contain spaces'),
  confirmPassword: Yup.string()
    .required('Please enter your password again ')
    .oneOf(
      [Yup.ref('password'), null],
      'Password does not match. Please, try again'
    ),
});
