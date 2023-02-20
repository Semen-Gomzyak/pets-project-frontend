
import { useState } from 'react';
// import './ContactFormStyles.scss';
import shortid from 'shortid';
import Notiflix from 'notiflix';


import { addPets } from '../../redux/pets/petsOperations';
import { getPets } from '../../redux/pets/petsReduser';

import defaultIMG from "./default-avatar.png";
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

export default function PetForm ({onSubmit}) {

  const [{name, date, breed, favorite, avatarURL, seks, owner, comments }, setState] = useState(startState);
  const pets = useSelector(getPets);
  const dispatch = useDispatch();



  const nameInputId = shortid.generate();
  const dateInputId = shortid.generate();
  const breedInputId = shortid.generate();
  const avatarURLInputId = shortid.generate();
  const commentsInputId = shortid.generate();



  const handleChangeName = e => {
    setState(prevState => {
      return { ...prevState, name: e.target.value }});
    }


  const handleChangeDate= e => {
    setState(prevState => {
      return { ...prevState, date: e.target.value }});
  };

  const handleChangeBreed= e => {
    setState(prevState => {
      return { ...prevState, breed: e.target.value }});
  };

  const handleChangeAvatarURL= e => {
    setState(prevState => {
      return { ...prevState, avatarURL: e.target.value }});
  };

  const handleChangeComments= e => {
    setState(prevState => {
      return { ...prevState, comments: e.target.value }});
  };


  const addPat = (name, date, breed, comments, avatarURL ) => {
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
    setState({ name: '', date: '', breed: '', favorite: '', avatarURL: defaultIMG, comments: ''});
  };


    return (
      <form className="FormEditor" onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name:
          <input
            className="FormEditorName"
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            id={nameInputId}
            placeholder="Name Surname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>


        <label htmlFor={dateInputId}>
          Date of birth:
          <input
            className="FormEditorNumber"
            type="text"
            name="date"
            value={date}
            onChange={handleChangeDate}
            id={dateInputId}
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-  .\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Date must be digits "
            required
          />
        </label>

        <label htmlFor={breedInputId}>
        Breed:
          <input
            className="FormEditorNumber"
            type="text"
            name="breed"
            value={breed}
            onChange={handleChangeBreed}
            id={breedInputId}
            placeholder="123-45-67"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Breed may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>


        <label htmlFor={breedInputId}>
        Add photo and some comments:
          <input
            className="FormEditorNumber"
            type="image"
            alt='image'
            name="avatarURL"
            value={avatarURL}
            onChange={handleChangeAvatarURL}
            id={avatarURLInputId}
            placeholder="123-45-67"
            title="avatarURL may contain only image in jpg or png fotmat, apostrophe"
            required
          />
        </label>

        <label htmlFor={breedInputId}>
        Comments
          <input
            className="FormEditorNumber"
            type="text"
            alt='comments'
            name="comments"
            value={comments}
            onChange={handleChangeComments}
            id={commentsInputId}
            placeholder="Comments"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Comments may contain only text "
            required
          />
        </label>

        <button type="submit" className="FormEditor__button">
          Add pat
        </button>
      </form>
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