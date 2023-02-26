import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/selectors';
import { logout } from 'redux/Auth/operations';

import {
  deleteUserPet,
  getUserData,
  updateUserData,
  uploadAvatar,
  addNewPet,
} from 'services/api/user';

import { useNavigate } from 'react-router';

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
} from './Profile.styled';
import { Modal } from 'components/Modal/Modal';
import { ConfirmLogout } from 'components/Profile/ConfirmLogout/ConfirmLogout';
import { Avatar } from 'components/Profile/Avatar/Avatar';
import { UserUpdateForm } from 'components/Profile/UserUpdateForm/UserUdateForm';
import PetForm from '../../components/PetForm/PetForm';
import { PetList } from 'components/Profile/PetList/PetList';

import { theme } from 'services/theme';

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
    document.body.classList.toggle('is-modal-open');
  };

  useEffect(() => {
    getUserData(token).then(response => {
      setUserData(response.data);

      if (response.data.pets) {
        setUserPets(response.data.pets);
      }
    });
  }, [token]);

  const updateUser = async data => {
    const response = await updateUserData(data, token);

    const key = Object.keys(data)[0];
    const updatedData = { [key]: response[key] };

    setUserData(prevState => ({ ...prevState, ...updatedData }));
  };

  const changeAvatar = async avatar => {
    const response = await uploadAvatar(avatar, token);
    setUserData(prevState => ({ ...prevState, avatarURL: response.avatarURL }));
  };

  const navigate = useNavigate();
  const logoutUser = () => {
    dispatch(logout());
    navigate('/', { replace: true });
  };

  const addPet = async newPet => {
    const pet = await addNewPet(newPet, token);
    setUserPets(prevState => [...prevState, pet]);
  };

  const deletePet = (petId, newPetsList) => {
    deleteUserPet(petId, token);
    setUserPets(newPetsList);
  };

  return (
    <>
      <Section>
        {/* ------------------------ USER PART ------------------------ */}
        <UserPart>
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
            <PetsPartTitle>My pets:</PetsPartTitle>
            <AddPetContainer>
              <AddPetText>Add Pet</AddPetText>
              <AddPetButton type="button" onClick={toggleModal}>
                <BsPlusCircleFill size={40} color={theme.colors.accent} />
              </AddPetButton>
            </AddPetContainer>
          </PetsHeader>

          <PetList petsList={userPets} deletePet={deletePet} />
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
