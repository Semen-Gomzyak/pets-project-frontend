import React from 'react';
// import './ContactListStyles.scss';
import { deletePets } from '../../redux/pets/petsOperations';
import { getPets } from '../../redux/pets/petsReduser';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/filterSlice';
const DEF_IMG = 'https://via.placeholder.com/200x150';

const ContactList = () => {
  const dispatch = useDispatch();
  const pets = useSelector(getPets);

  const filterPet = useSelector(getFilterValue);

  const constgetVisiblePets = () => {
    if (filterPet === '') {
      return false;
    }

    return pets.filter(pet =>
      pet.name.toLowerCase().includes(filterPet)
    );
  };

  const finishPets = constgetVisiblePets() ? constgetVisiblePets() : pets;

  
  return (
    <ul className="ContactList">
      {finishPets.map(({ id, name, date, breed, comments, avatarURL }) => (
        <li key={id} className="ContactList__item">
          <img  src={avatarURL ? avatarURL : DEF_IMG} alt={avatarURL} width="233" />
          <p className="TodoList__text">
            Name: {name};
            Date of birth: {date};
            Breed: {breed};
          </p>
          <button
            type="button"
            className="ContactList__btn"
            onClick={() => dispatch(deletePets(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
