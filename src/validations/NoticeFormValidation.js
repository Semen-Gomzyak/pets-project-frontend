import * as Yup from 'yup';

export const NoticeSchemaFirst = Yup.object().shape({
  title: Yup.string()
    .required('Title is a required field')
    .min(2, 'Title must be at least 2 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid title')
    .max(48, 'Title must not exceed 48 characters'),
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must not exceed 16 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s']*$/, 'Please enter a valid name'),
  birthdate: Yup.date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .typeError('Enter a valid date in format DD.MM.YYYY'),
  breed: Yup.string()
    .min(2, 'Breed must be at least 2 characters')
    .max(24, 'Breed must not exceed 24 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid breed'),
});

export const NoticeSchemaSecond = Yup.object().shape({
  theSex: Yup.string()
    .oneOf(['male', 'female'], 'Please select your gender')
    .required('Please select your gender'),
  location: Yup.string()
    .required('Please enter your location')
    .matches(/^[a-zA-Zа-яА-ЯЁё]+,\s*[a-zA-Zа-яА-ЯЁё]+$/, {
      message: 'Enter the city and region in the format "City, Region"',
      excludeEmptyString: true,
    }),
  comments: Yup.string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments must not exceed 120 characters')
    .matches(/^[a-zA-Zа-яА-ЯіІїЇєЄёЁ\s]*$/, 'Please enter a valid comments'),
  price: Yup.number().default(1).typeError('Price must be a number'),
  // .positive('Price must be a positive number')
  // .integer('Price must be an integer')
  // .min(0, 'Price must not start with zero'),
});
