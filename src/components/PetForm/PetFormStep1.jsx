import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import {
  Button,
  ButtonContainer,
  InputDateStyled,
  LabelStyled,
  FormStyled,
  ErrorStyled,
  InputStyled,
} from './PetForm.styled';

const inputReGeX = /^[aA-zZ\s]+$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Please enter at least 3 characters')
    .max(12, 'Name should be 12 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
    .required(`Please enter your pet's name`),
  date: Yup.date()
    .typeError('Please choose the date')
    .required(`Please enter your pet's date of birth`),
  breed: Yup.string()
    .min(3, 'Please enter at least 3 characters')
    .max(12, 'Breed should be 12 characters or less')
    .matches(inputReGeX, `Please enter a valid value using English characters`)
    .required(`Please enter your pet's breed`),
});

const PetFormStep1 = ({ data, next, onCancel }) => {
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormStyled>
          <LabelStyled htmlFor="name">Pet`s name</LabelStyled>
          <InputStyled
            id="name"
            name="name"
            // autofocus={true}
            placeholder="Please, enter your pet`s name"
          />
          <ErrorMessage
            name="name"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <LabelStyled htmlFor="date">Date of birth</LabelStyled>
          <InputDateStyled
            id="date"
            name="date"
            type="date"
            min="1950-01-01"
            max={today}
            placeholder="01.01.2023"
          />
          <ErrorMessage
            name="date"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <LabelStyled htmlFor="breed">Breed</LabelStyled>
          <InputStyled
            id="breed"
            name="breed"
            placeholder="Please, enter your pet`s breed"
          />
          <ErrorMessage
            name="breed"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <ButtonContainer>
            <Button type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Next</Button>
          </ButtonContainer>
        </FormStyled>
      )}
    </Formik>
  );
};

export default PetFormStep1;
