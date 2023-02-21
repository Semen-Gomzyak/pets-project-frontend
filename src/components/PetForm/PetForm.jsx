import { useState } from 'react';
// import './ContactFormStyles.scss';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { addPets } from '../../redux/pets/petsOperations';
import { getPets } from '../../redux/pets/petsReduser';

import defaultIMG from './default-avatar.png';
import { useDispatch, useSelector } from 'react-redux';

const startState = {
  name: '',
  date: '',
  breed: '',
  comments: '',
  favorite: '',
  avatarURL: '',
  seks: '',
  owner: '',
};

export default function PetForm({ onSubmit }) {
  const [
    { name, date, breed, favorite, avatarURL, seks, owner, comments },
    setState,
  ] = useState(startState);
  const pets = useSelector(getPets);
  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const dateInputId = shortid.generate();
  const breedInputId = shortid.generate();
  const avatarURLInputId = shortid.generate();
  const commentsInputId = shortid.generate();

  const handleChangeName = e => {
    setState(prevState => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleChangeDate = e => {
    setState(prevState => {
      return { ...prevState, date: e.target.value };
    });
  };

  const handleChangeBreed = e => {
    setState(prevState => {
      return { ...prevState, breed: e.target.value };
    });
  };

  const handleChangeAvatarURL = e => {
    setState(prevState => {
      return { ...prevState, avatarURL: e.target.value };
    });
  };

  const handleChangeComments = e => {
    setState(prevState => {
      return { ...prevState, comments: e.target.value };
    });
  };

  const addPat = (name, date, breed, comments, avatarURL) => {
    const newPet = {
      id: shortid.generate(),
      name,
      date,
      breed,
      avatarURL,
      comments,
    };

    if (pets.some(pet => pet.name === newPet.name)) {
      Notiflix.Notify.warning(`❌ ${newPet.name} is already is contacts`, {
        timeout: 3000,
      });

      return false;
    }
    dispatch(addPets(newPet));

    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();

    addPat(name, date, breed, favorite, avatarURL, seks, owner, comments);
    setState({
      name: '',
      date: '',
      breed: '',
      favorite: '',
      avatarURL: defaultIMG,
      comments: '',
    });
  };

  return (
    <div class="backdrop is-hidden" data-modal>
      <div class="modal">
        <a data-modal-close href=" " class="link-close">
          <svg class="icon-close" with="18" height="18">
            <use href="./sprite.svg#icon-close"></use>
          </svg>
        </a>
        <form class="speaker-form" onSubmit={handleSubmit}>
          <p class="group-title">Add pet</p>
          <div class="form-field">
            {/* <!-- На всякий случай в label нельзя вкладывать div, div можно заменить на span!!  --> */}
            <label htmlFor={nameInputId}>Name:</label>
            <div class="input-svg">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChangeName}
                id={nameInputId}
                autofocus
                minlength="2"
                placeholder="Type name pet"
                pattern="[a-zA-zа-яА-я]+s[a-zA-Zа-яА-я]+$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
              />
            </div>
          </div>

          <div class="form-field">
            <label htmlFor={dateInputId}>Date of birth</label>
            <div class="input-svg">
              {/* <!-- Позиционировать иконки можно только относительно парных тегов!! Инпут одинарный тег --> */}
              <input
                type="text"
                name="date"
                value={date}
                id={dateInputId}
                onChange={handleChangeDate}
                placeholder="Type date of birth"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                title="Date must be digits"
                required
              />
            </div>
          </div>

          <div class="form-field">
            <label htmlFor={breedInputId}>Breed</label>
            <div class="input-svg">
              <input
                type="text"
                name="breed"
                value={breed}
                id={breedInputId}
                onChange={handleChangeBreed}
                placeholder="Type breed"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Breed may contain only letters, apostrophe, dash and spaces."
                required
              />
            </div>
          </div>

          <button type="submit" class="send-btn">
            Cancel
          </button>
          <button type="submit" class="send-btn">
            Next
          </button>

{/* ======================================= */}

          <div class="form-field">
            <label htmlFor={avatarURLInputId}>
              Add photo and some comments
            </label>
            <div class="input-svg">
              <input
                type="image"
                alt="image"
                name="image"
                value={avatarURL}
                id={breedInputId}
                onChange={handleChangeAvatarURL}
                title="avatarURL may contain only image in jpg or png fotmat"
                required
              />
            </div>
          </div>

          <div class="form-field">
            <label htmlFor={commentsInputId}>Comments</label>
            <textarea
              name="comments"
              id={commentsInputId}
              value={comments}
              onChange={handleChangeComments}
              rows="6"
              placeholder="Type comments"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Comments may contain only text "
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" class="send-btn">
              Back
            </button>
            <button type="submit" class="send-btn">
              Done
            </button>
          </div>
        </form>
      </div>
      <script src="./js/modal.js"></script>
    </div>

    // =====================================
  );
}

// ===== Старая версия на классах =====

// import React, { Component } from 'react';
// import './ContactFormStyles.scss';
// import shortid from 'shortid';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChangeName = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleChangeNumber = e => {
//     this.setState({ number: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.name, this.state.number);
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className="FormEditor" onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputId}>
//           Name:
//           <input
//             className="FormEditorName"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChangeName}
//             id={this.nameInputId}
//             placeholder="Name Surname"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label htmlFor={this.numberInputId}>
//           Number:
//           <input
//             className="FormEditorNumber"
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleChangeNumber}
//             id={this.numberInputId}
//             placeholder="123-45-67"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-  .\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>

//         <button type="submit" className="FormEditor__button">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
