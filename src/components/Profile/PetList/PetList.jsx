import { useState } from 'react';

import {
  PetInfo,
  PetImgContainer,
  PetData,
  P,
  Span,
  DeletePetButton,
} from './PetList.styled';
import { HiTrash } from 'react-icons/hi2';

const convertDate = date => {
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('en-GB', dateOptions);
  return dateString.replaceAll('/', '.');
};

export const PetList = ({ petsList, deletePet }) => {
  const [userPets, setUserPets] = useState(petsList);

  const onDeleteClick = event => {
    const index = Number(event.currentTarget.dataset.index);

    const petId = userPets[index]._id;
    const newUserPets = [...userPets];
    newUserPets.splice(index, 1);
    deletePet(petId, newUserPets);
    setUserPets(newUserPets);
  };

  return (
    <ul>
      {userPets.map((pet, index) => (
        <PetInfo key={pet._id}>
          <PetImgContainer>
            <img src={pet.avatarURL} alt="avatar" width={240} />
          </PetImgContainer>

          <PetData>
            <P>
              <Span>Name: </Span> {pet.name}
            </P>
            <P>
              <Span>Date of birth: </Span> {convertDate(pet.date)}
            </P>
            <P>
              <Span>Breed: </Span> {pet.breed}
            </P>
            <P>
              <Span>Comments: </Span> {pet.comments}
            </P>

            <DeletePetButton
              type="button"
              onClick={onDeleteClick}
              data-index={index}
            >
              <HiTrash size={20} color={'#111111A0'} />
            </DeletePetButton>
          </PetData>
        </PetInfo>
      ))}
    </ul>
  );
};
