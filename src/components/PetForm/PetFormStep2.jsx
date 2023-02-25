import { ErrorMessage, Formik, useField } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { ReactComponent as CrossPic } from './cros.svg';
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
} from './PetForm.styled';

const validationSchema = Yup.object({
  avatarURL: Yup.mixed().required(`Please upload your pet's photo`),
  comments: Yup.string()
    .min(8, 'Please enter at least 8 characters')
    .max(120, 'Comments should be 120 characters or less')
    .required('Please enter some comments'),
});

const PetFormStep2 = ({ data, next, back }) => {
  const handleSubmit = values => {
    next(values, true);
  };
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <FormStyled encType="multipart/form-data">
          <ImageLabel>Add photo and some comments</ImageLabel>

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
                  <CrossPic width="48" height="48" fill="none" />
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

export default PetFormStep2;

// import { useState } from 'react';
// // import './ContactFormStyles.scss';
// import shortid from 'shortid';
// import Notiflix from 'notiflix';

// import { addPets } from '../../redux/pets/petsOperations';
// import { getPets } from '../../redux/pets/petsReduser';

// import defaultIMG from './default-avatar.png';
// import { useDispatch, useSelector } from 'react-redux';

// const startState = {
//   name: '',
//   date: '',
//   breed: '',
//   comments: '',
//   favorite: '',
//   avatarURL: '',
//   seks: '',
//   owner: '',
// };

// export default function PetForm({ onSubmit }) {
//   const [
//     { name, date, breed, favorite, avatarURL, seks, owner, comments },
//     setState,
//   ] = useState(startState);
//   const pets = useSelector(getPets);
//   const dispatch = useDispatch();

//   const avatarURLInputId = shortid.generate();
//   const commentsInputId = shortid.generate();

//   const handleChangeAvatarURL = e => {
//     setState(prevState => {
//       return { ...prevState, avatarURL: e.target.value };
//     });
//   };

//   const handleChangeComments = e => {
//     setState(prevState => {
//       return { ...prevState, comments: e.target.value };
//     });
//   };

//   const addPat = ( comments, avatarURL) => {
//     const newPet = {
//       id: shortid.generate(),
//       avatarURL,
//       comments,
//     };

//     if (pets.some(pet => pet.avatarURL === newPet.avatarURL)) {
//       Notiflix.Notify.warning(`❌ ${newPet.avatarURL} is already is contacts`, {
//         timeout: 3000,
//       });

//       return false;
//     }
//     dispatch(addPets(newPet));

//     return true;
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     addPat( avatarURL, comments);
//     setState({
//       avatarURL: defaultIMG,
//       comments: '',
//     });
//   };

//   return (
//     <div class="Backdrop is-hidden" data-modal>
//       <div class="Modalbox">
//         <a data-modal-close href=" " class="LinkClose">
//           <svg class="icon-close" with="18" height="18">
//             <use href="./sprite.svg#icon-close"></use>
//           </svg>
//         </a>
//         <form class="PetsForm" onSubmit={handleSubmit}>
//           <p class="GroupTitle">Add pet</p>

//           <div class="FormField">
//             <label htmlFor={avatarURLInputId}>
//               Add photo and some comments
//             </label>
//             <div class="InputSvg">
//               <input
//                 type="image"
//                 alt="image"
//                 name="image"
//                 value={avatarURL}
//                 id={avatarURLInputId}
//                 onChange={handleChangeAvatarURL}
//                 title="avatarURL may contain only image in jpg or png fotmat"
//                 required
//               />
//             </div>
//           </div>

//           <div class="FormField">
//             <label htmlFor={commentsInputId}>Comments</label>
//             <textarea
//               name="comments"
//               id={commentsInputId}
//               value={comments}
//               onChange={handleChangeComments}
//               rows="6"
//               placeholder="Type comments"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Comments may contain only text "
//               required
//             ></textarea>
//           </div>
//           <div>
//             <button type="button" class="SendBtn" onClick={() => onBack()}>
//               Back
//             </button>
//             <button type="submit" class="SendBtn">
//               Done
//             </button>
//           </div>
//         </form>
//       </div>
//       <script src="./js/modal.js"></script>
//     </div>

//   );
// }
