import * as Yup from 'yup';

export const AddPetSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name can have a maximum of 16 characters')
    .required('Name is required'),
  date: Yup.date()
    .typeError('Date must be in the format DD.MM.YYYY')
    .required('Date is required'),
  breed: Yup.string()
    .min(2, 'Breed must be at least 2 characters')
    .max(16, 'Breed can have a maximum of 16 characters')
    .required('Breed is required'),
  comments: Yup.string()
    .min(8, 'Comments must be at least 8 characters')
    .max(120, 'Comments can have a maximum of 120 characters')
    .required('Comments are required'),
});
