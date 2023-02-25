import * as Yup from 'yup';

export const NoticeSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is a required field')
    .min(2, 'Title must be at least 2 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid title')
    .max(48, 'Title must not exceed 48 characters'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must not exceed 16 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid name'),
  birthdate: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .typeError('Enter a valid date in format DD.MM.YYYY'),
  breed: Yup.string()
    .min(2, 'Breed must be at least 2 characters')
    .max(24, 'Breed must not exceed 24 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid breed'),
  location: Yup.string().matches(/^[a-zA-Zа-яА-ЯЁё]+,\s*[a-zA-Zа-яА-ЯЁё]+$/, {
    message: 'Enter the city and region in the format "City, Region"',
    excludeEmptyString: true,
  }),
  comments: Yup.string()
    .required('Comments is a required field')
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must not exceed 120 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid comments'),
  price: Yup.number()
    .required('Price is a required field')
    .typeError('Price must be a number')
    .positive('Price must be a positive number')
    .integer('Price must be an integer')
    .min(1, 'Price must not start with zero'),
});
