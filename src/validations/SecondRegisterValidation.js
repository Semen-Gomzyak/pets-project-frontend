import * as Yup from 'yup';

export const SecondRegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-Я\s]*$/, 'Please enter a valid name'),
  cityRegion: Yup.string()
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