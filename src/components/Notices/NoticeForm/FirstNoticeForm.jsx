import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';

import {
  Button,
  ButtonContainer,
  InputDateStyled,
  LabelStyled,
  FormStyled,
  ErrorStyled,
  InputStyled,
  CategoryButton,
  CategoryContainer,
  CategoryRadio,
  CategoryLabel,
  LoremText,
} from './NoticeForm.styled';
import { NoticeSchemaFirst } from 'validations/NoticeFormValidation';

export const NoticeFormStep1 = ({ data, next, onCancel }) => {
  const today = new Date().toISOString().split('T')[0];
  const [selectedCategory, setSelectedCategory] = useState('lost_found');

  const handleSubmit = values => {
    next(values, false, selectedCategory);
  };

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Formik
      validationSchema={NoticeSchemaFirst}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormStyled>
          <LoremText>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur{' '}
          </LoremText>
          <CategoryContainer>
            <CategoryLabel>
              <CategoryButton
                type="radio"
                value="lost_found"
                id="category"
                checked={selectedCategory === 'lost_found'}
                onChange={handleCategoryChange}
              />
              <CategoryRadio>lost/found</CategoryRadio>
            </CategoryLabel>

            <CategoryLabel>
              <CategoryButton
                type="radio"
                value="in_good_hands"
                id="category"
                checked={selectedCategory === 'in_good_hands'}
                onChange={handleCategoryChange}
              />
              <CategoryRadio>in good hands</CategoryRadio>
            </CategoryLabel>

            <CategoryLabel>
              <CategoryButton
                type="radio"
                value="sell"
                id="category"
                checked={selectedCategory === 'sell'}
                onChange={handleCategoryChange}
              />
              <CategoryRadio>sell</CategoryRadio>
            </CategoryLabel>
          </CategoryContainer>
          <LabelStyled htmlFor="title">
            Tittle of ad<span style={{ color: `#F59256` }}>*</span>
          </LabelStyled>
          <InputStyled
            id="title"
            name="title"
            placeholder="Please, enter title"
          />
          <ErrorMessage
            name="title"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />
          <LabelStyled htmlFor="name">Name pet</LabelStyled>
          <InputStyled
            id="name"
            name="name"
            placeholder="Please, enter your pet`s name"
          />
          <ErrorMessage
            name="name"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />
          <LabelStyled htmlFor="birthdate">Date of birth</LabelStyled>
          <InputDateStyled
            id="birthdate"
            name="birthdate"
            type="date"
            min="1990-01-01"
            max={today}
            placeholder="01.01.2023"
          />
          <ErrorMessage
            name="birthdate"
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
