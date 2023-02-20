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
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Please enter a valid name'),
  city: Yup.string()
    .required('City is required')
    .matches(
      /^[a-zA-Zа-яА-Я\s]*,\s*[a-zA-Zа-яА-Я\s]*$/,
      'Enter the city and region in the format "City, State"'
    ),
  mobilePhone: Yup.string()
    .required('Phone is required')
    .matches(
      /^\+380\d{9}$/,
      'Enter your mobile number in the format "+380*********"'
    ),
});
