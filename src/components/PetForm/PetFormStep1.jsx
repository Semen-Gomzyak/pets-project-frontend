
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
            autofocus
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
            min="1950-01-01"
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

export default PetFormStep1;















// import { useState } from 'react';
// // import './ContactFormStyles.scss';
// import shortid from 'shortid';
// import Notiflix from 'notiflix';

// import { addPets } from '../../redux/pets/petsOperations';
// import { getPets } from '../../redux/pets/petsReduser';

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
//     { name, date, breed },
//     setState,
//   ] = useState(startState);
//   const pets = useSelector(getPets);
//   const dispatch = useDispatch();

//   const nameInputId = shortid.generate();
//   const dateInputId = shortid.generate();
//   const breedInputId = shortid.generate();

//   const handleChangeName = e => {
//     setState(prevState => {
//       return { ...prevState, name: e.target.value };
//     });
//   };

//   const handleChangeDate = e => {
//     setState(prevState => {
//       return { ...prevState, date: e.target.value };
//     });
//   };

//   const handleChangeBreed = e => {
//     setState(prevState => {
//       return { ...prevState, breed: e.target.value };
//     });
//   };

//   const addPat = (name, date, breed) => {
//     const newPet = {
//       id: shortid.generate(),
//       name,
//       date,
//       breed,
//     };

//     if (pets.some(pet => pet.name === newPet.name)) {
//       Notiflix.Notify.warning(`❌ ${newPet.name} is already is contacts`, {
//         timeout: 3000,
//       });

//       return false;
//     }
//     dispatch(addPets(newPet));

//     return true;
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     addPat(name, date, breed);
//     setState({
//       name: '',
//       date: '',
//       breed: '',
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
//             {/* <!-- На всякий случай в label нельзя вкладывать div, div можно заменить на span!!  --> */}
//             <label htmlFor={nameInputId}>Name:</label>
//             <div class="InputSvg">
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={handleChangeName}
//                 id={nameInputId}
//                 autofocus
//                 minlength="2"
//                 placeholder="Type name pet"
//                 pattern="[a-zA-zа-яА-я]+s[a-zA-Zа-яА-я]+$"
//                 title="Name may contain only letters, apostrophe, dash and spaces."
//                 required
//               />
//             </div>
//           </div>

//           <div class="FormField">
//             <label htmlFor={dateInputId}>Date of birth</label>
//             <div class="InputSvg">
//               {/* <!-- Позиционировать иконки можно только относительно парных тегов!! Инпут одинарный тег --> */}
//               <input
//                 type="text"
//                 name="date"
//                 value={date}
//                 id={dateInputId}
//                 onChange={handleChangeDate}
//                 placeholder="Type date of birth"
//                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
//                 title="Date must be digits"
//                 required
//               />
//             </div>
//           </div>

//           <div class="FormField">
//             <label htmlFor={breedInputId}>Breed</label>
//             <div class="InputSvg">
//               <input
//                 type="text"
//                 name="breed"
//                 value={breed}
//                 id={breedInputId}
//                 onChange={handleChangeBreed}
//                 placeholder="Type breed"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Breed may contain only letters, apostrophe, dash and spaces."
//                 required
//               />
//             </div>
//           </div>
//           <button type="cansel" class="SendBtn">
//             Cancel
//           </button>
//           <button type="submit" class="SendBtn">
//             Next
//           </button>
//         </form>
//       </div>
//       <script src="./js/modal.js"></script>
//     </div>
//   );
// }
