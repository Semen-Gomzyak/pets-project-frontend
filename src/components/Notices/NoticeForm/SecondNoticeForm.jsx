import { ErrorMessage, Formik, useField } from 'formik';
import { useRef, useState } from 'react';
import {
  Button,
  ButtonContainer,
  Image,
  ImageBtn,
  ImageExample,
  ImageLabel,
  ImageWrapper,
  LabelStyled,
  PhotoPetText,
  FormStyled,
  ErrorStyled,
  TextAreaInput,
  CategoryContainer,
  GenderLabel,
  IconFemale,
  IconMale,
  TheSexLabelStyled,
  InputStyled,
  IconPlus,
  TheSexItem,
  GenderButton,
} from './NoticeForm.styled';
import { NoticeSchemaSecond } from 'validations/NoticeFormValidation';

export const NoticeFormStep2 = ({ data, next, back }) => {
  const [image, setImage] = useState(null);

  const fileRef = useRef(null);

  const handleSubmit = values => {
    next(values, true);
  };

  return (
    <Formik
      validationSchema={NoticeSchemaSecond}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <FormStyled encType="multipart/form-data">
          <TheSexLabelStyled>
            The sex<span style={{ color: `#F59256` }}>*</span>:
          </TheSexLabelStyled>
          <CategoryContainer>
            <TheSexItem>
              <GenderButton
                name="theSex"
                type="radio"
                value="male"
                id="male"
                checked={formProps.values.theSex === 'male'}
                onChange={formProps.handleChange}
              />
              <GenderLabel htmlFor="male">
                <IconMale />
                Male
              </GenderLabel>
            </TheSexItem>

            <TheSexItem>
              <GenderButton
                name="theSex"
                type="radio"
                value="female"
                id="female"
                checked={formProps.values.theSex === 'female'}
                onChange={formProps.handleChange}
              />
              <GenderLabel htmlFor="female">
                <IconFemale />
                Female
              </GenderLabel>
            </TheSexItem>
          </CategoryContainer>
          <ErrorMessage
            name="theSex"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />
          <LabelStyled htmlFor="location">
            Location<span style={{ color: `#F59256` }}>*</span>:
          </LabelStyled>
          <InputStyled
            id="location"
            name="location"
            // autofocus={true}
            placeholder="Please, enter location"
          />
          <ErrorMessage
            name="location"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <LabelStyled htmlFor="price">
            Price<span style={{ color: `#F59256` }}>*</span>:
          </LabelStyled>
          <InputStyled
            id="price"
            name="price"
            // autofocus={true}
            placeholder="Please, enter price"
          />
          <ErrorMessage
            name="price"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <ImageLabel>Load the pet’s image:</ImageLabel>

          <ImageWrapper>
            <div>
              <PhotoPetText
                ref={fileRef}
                hidden
                id="avatarURL"
                name="avatarURL"
                type="file"
                accept=".png, .jpg, .jpeg"
                value={undefined}
                onChange={e => {
                  const { files } = e.currentTarget;
                  if (!files || !files[0]) {
                    return;
                  } else {
                    setImage(URL.createObjectURL(files[0]));
                    formProps.setFieldValue('avatarURL', files[0]);
                  }
                }}
              />
              <ImageBtn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                {formProps.values.avatarURL ? (
                  <ImageExample>
                    <Image
                      alt="pet"
                      src={
                        image === null
                          ? URL.createObjectURL(formProps.values.avatarURL)
                          : image
                      }
                    />
                  </ImageExample>
                ) : (
                  <IconPlus />
                )}
              </ImageBtn>
            </div>
          </ImageWrapper>
          <ErrorMessage
            name="avatarURL"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <LabelStyled htmlFor="comments">Comments</LabelStyled>
          <MyFormikTextareaField fieldName={'comments'} />
          <ErrorMessage
            name="comments"
            render={message => (
              <ErrorStyled style={{ color: 'red' }}>{message}</ErrorStyled>
            )}
          />

          <ButtonContainer>
            <Button
              type="button"
              onClick={() => {
                back(formProps.values);
              }}
            >
              Back
            </Button>
            <Button type="submit">Done</Button>
          </ButtonContainer>
        </FormStyled>
      )}
    </Formik>
  );
};

export function MyFormikTextareaField({ fieldName }) {
  const [field, meta] = useField(fieldName);

  return (
    <TextAreaInput
      value={meta.value}
      onChange={field.onChange}
      placeholder={`Please, enter your comment here`}
      id={fieldName}
      name={fieldName}
    />
  );
}
