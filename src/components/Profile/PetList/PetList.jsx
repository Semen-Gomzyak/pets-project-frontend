import {
  PetInfo,
  PetImgContainer,
  PetData,
  P,
  Span,
  DeletePetButton,
} from './PetList.styled';
import { HiTrash } from 'react-icons/hi2';

// import { theme } from 'services/theme';

const convertDate = date => {
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('en-GB', dateOptions);
  return dateString.replaceAll('/', '.');
};

export const PetList = ({ petsList, deletePet }) => {
  const onDeleteClick = event => {
    const index = Number(event.currentTarget.dataset.index);

    const petId = petsList[index]._id;
    const newUserPets = [...petsList];
    newUserPets.splice(index, 1);

    deletePet(petId, newUserPets);
  };

  return (
    <ul>
      {petsList.map((pet, index) => (
        <PetInfo key={pet._id}>
          <PetImgContainer>
            {pet.avatarURL ? (
              <img src={pet.avatarURL} alt="avatar" width={240} />
            ) : (
              <img
                src="images/services/notAvailable.png"
                alt="avatar"
                width={240}
              />
            )}
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
