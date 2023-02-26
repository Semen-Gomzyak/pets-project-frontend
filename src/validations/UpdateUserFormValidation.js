import * as Yup from 'yup';

export const UpdateUserFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid name')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters')
    .test('no-numbers', 'Name cannot contain numbers', function (value) {
      return /^\D*$/.test(value);
    }),
  email: Yup.string()
    .required('Email is required')
    .min(10, 'Email must be at least 10 characters')
    .max(63, 'Email must be at most 63 characters')
    .email('Please enter a valid email address')
    .matches(
      /^[a-zA-Z0-9_]+([.-]?[a-zA-Z0-9_]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address'
    ),
  birthday: Yup.string()
    .matches(
      /(3[01]|[12][0-9]|0[1-9]).(1[0-2]|0[1-9]).[0-9]{4}$/,
      'Birthday must be in format DD.MM.YYYY'
    )
    .required('Birthday is required'),

  phone: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      'Enter your mobile number in the format "+380*********"'
    )
    .required('Phone is required'),

  city: Yup.string()
    .required('City is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*,\s*[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/,
      'Enter the city and region in the format "City, State"'
    ),
});
