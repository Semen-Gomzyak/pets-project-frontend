import * as Yup from 'yup';

export const UpdateUserFormSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name must be at least 3 characters'),
  email: Yup.string().email('Please enter a valid email address'),
  birthday: Yup.string().matches(
    /(3[01]|[12][0-9]|0[1-9]).(1[0-2]|0[1-9]).[0-9]{4}$/,
    'Birthday must be in format DD.MM.YYYY'
  ),
  phone: Yup.string().matches(
    /^\+380\d{9}$/,
    'Phone number must be in format +380XXXXXXXXX'
  ),
  city: Yup.string().matches(
    /^[A-Za-z]+,[\sA-Za-z]+$/,
    'This field mus be in format "City, Region"'
  ),
});
