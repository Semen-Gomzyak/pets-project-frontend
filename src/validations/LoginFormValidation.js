import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^[a-zA-Z0-9._-]{2,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
      'Invalid email'
    )
    .min(10, 'Email must be at least 10 characters')
    .max(63, 'Email must be at most 63 characters')
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/^\S*$/, 'Password must not contain spaces')
    .required('Password is required'),
});
