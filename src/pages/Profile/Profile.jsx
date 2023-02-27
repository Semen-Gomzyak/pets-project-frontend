import React, { useState, useEffect } from 'react';

import { HiTrash } from 'react-icons/hi2';
import { HiOutlineLogout } from 'react-icons/hi';
import { BsPlusCircleFill } from 'react-icons/bs';
import {
  Section,
  UserPart,
  UserPartTitle,
  UserInfo,
  UserData,
  LogOutContainer,
  LogOutButton,
  LogOutText,
  PetsPart,
  PetsHeader,
  PetsPartTitle,
  AddPetContainer,
  AddPetButton,
  AddPetText,
  PetInfo,
  PetData,
  PetImgContainer,
  DeletePetButton,
  Span,
  P,
} from './Profile.styled';
import { Modal } from 'components/Modal/Modal';
import { ConfirmLogout } from 'components/Profile/ConfirmLogout/ConfirmLogout';
import { Avatar } from 'components/Profile/Avatar/Avatar';
import { UserUpdateForm } from 'components/Profile/UserUpdateForm/UserUdateForm';
import { useDispatch, useSelector } from 'react-redux';

import PetForm from '../../components/PetForm/PetForm';

import { selectToken } from 'redux/Auth/selectors';
import {
  deleteUserPet,
  getUserData,
  updateUserData,
  uploadAvatar,
  addNewPet,
} from 'services/api/user';

import { logout } from 'redux/Auth/operations';
import { useNavigate } from 'react-router';
import { theme } from 'services/theme';

const convertDate = date => {
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('en-GB', dateOptions);
  return dateString.replaceAll('/', '.');
};

export const Profile = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [userPets, setUserPets] = useState([]);

  const [showModal, setShowModal] = useState(false);

  
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
    document.body.classList.toggle('is-modal-open');
  };

  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirm = () => {
    setShowConfirm(prevState => !prevState);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getUserData(token).then(response => {
      setUserData({
        email: response.data.email,
        name: response.data.name,
        city: response.data.cityRegion,
        phone: response.data.mobilePhone,
        birthday: response.data.birthday,
        avatarURL: response.data.avatarURL,
      });

      if (response.data.pets) {
        setUserPets(response.data.pets);
      }
    });
  }, [token]);

  const updateUser = (data, token) => {
    updateUserData(data, token);
    setUserData(prevState => ({ ...prevState, ...data }));
  };

  const changeAvatar = async (avatar, avatarUrl) => {
    const response = await uploadAvatar(avatar, token);
    setUserData(prevState => ({ ...prevState, avatarURL: response.avatarURL }));
  };

  const logoutUser = () => {
    // event.preventDefault();
    dispatch(logout());
    navigate('/', { replace: true });
  };

  const deletePet = event => {
    const index = Number(event.currentTarget.dataset.index);

    const petId = userPets[index]._id;
    deleteUserPet(petId, token);

    const newUserPets = [...userPets];
    newUserPets.splice(index, 1);
    setUserPets(newUserPets);
  };

  const addPet = async newPet => {
    const pet = await addNewPet(newPet, token);
    setUserPets(prevState => [...prevState, pet]);
  };

  // const deletePet = (petId, newPetsList) => {
  //   deleteUserPet(petId, token);
  //   setUserPets(newPetsList);
  // };

  return (
    <>
      <Section>
        {/* ------------------------ USER PART ------------------------ */}
        <UserPart style={{ alignSelf: 'flex-start' }}>
          <UserPartTitle>My information:</UserPartTitle>
          <UserInfo>
            <Avatar
              avatarURL={userData.avatarURL}
              changeAvatar={changeAvatar}
            />

            <UserData>
              {Object.keys(userData).length !== 0 && (
                <UserUpdateForm
                  data={userData}
                  updateData={updateUser}
                  token={token}
                />
              )}
            </UserData>

            <LogOutContainer>
              <LogOutButton type="button" onClick={toggleConfirm}>
                <HiOutlineLogout size={25} color={theme.colors.accent} />
              </LogOutButton>
              <LogOutText>Log Out</LogOutText>
            </LogOutContainer>
          </UserInfo>
        </UserPart>

        {/* ------------------------ PETS PART ------------------------ */}

        <PetsPart>
          <PetsHeader>
            <PetsPartTitle style={{ marginBottom: '0px' }}>
              My pets:
            </PetsPartTitle>
            <AddPetContainer>
              <AddPetText>Add Pet</AddPetText>

              {/* <AddPetButton type="button" onClick={PetForm}> */}
              <AddPetButton type="button" onClick={toggleModal}>
                <BsPlusCircleFill size={40} color={theme.colors.accent} />
              </AddPetButton>
            </AddPetContainer>
          </PetsHeader>

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
                    onClick={deletePet}
                    data-index={index}
                  >
                    <HiTrash size={20} color={'#111111A0'} />
                  </DeletePetButton>
                </PetData>
              </PetInfo>
            ))}
          </ul>
        </PetsPart>
      </Section>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <PetForm onCancel={toggleModal} addPet={addPet} />
        </Modal>
      )}
      {showConfirm && (
        <Modal closeModal={toggleConfirm}>
          <ConfirmLogout cancel={toggleConfirm} accept={logoutUser} />
        </Modal>
      )}
    </>
  );
};
