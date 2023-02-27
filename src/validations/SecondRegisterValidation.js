import * as Yup from 'yup';

export const SecondRegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid name')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be at most 16 characters'),
  cityRegion: Yup.string()
    .required('City is required')
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*,\s*[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/,
      'Enter in the format "City, State"'
    ),
  mobilePhone: Yup.string()
    .required('Phone is required')
    .matches(
      /^\+380\d{9}$/,
      'Enter in the format "+380*********"'
    ),
});