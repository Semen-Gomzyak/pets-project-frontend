import React, { useState } from 'react';

// import { SharedLayout } from 'components/SharedLayout/SaredLayout';
import { HiCamera, HiTrash } from 'react-icons/hi2';
import { HiOutlineLogout } from 'react-icons/hi';
import { BsPlusCircleFill } from 'react-icons/bs';
import {
  Section,
  H2,
  UserInfo,
  AvatarContainer,
  Avatar,
  EditAvatarContainer,
  AvatarButton,
  EditAvatarText,
  UserDataContainer,
  LogOutContainer,
  LogOutButton,
  LogOutText,
  PetsHeader,
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
import { UserUpdateForm } from 'components/UserUpdateForm/UserUdateForm';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from 'redux/Auth/selectors';
// import { getUserInfo } from 'services/api';
import PetForm  from '../../components/PetForm/PetForm'

import { selectToken } from 'redux/Auth/selectors';
import { getUserData, updateUserData } from 'services/api/user';

import { logout } from 'redux/Auth/operations';
import { useNavigate } from 'react-router';
import { Modal } from 'components/Modal/Modal';

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

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const updateUser = (data, token) => {
    updateUserData(data, token);
    setUserData(prevState => ({ ...prevState, ...data }));
  };

  const logoutUser = event => {
    event.preventDefault();
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <>
      <Section>
        {/* ------------------------ USER ------------------------ */}

        <section>
          <H2>My information:</H2>
          <UserInfo>
            {/* -------------------- AVATAR ---------------------- */}

            <AvatarContainer>
              <Avatar>
                <img src={userData.avatarURL} alt="avatar" />
              </Avatar>
              <EditAvatarContainer>
                <AvatarButton type="button">
                  <HiCamera size={20} color={'#F59256'} />
                </AvatarButton>
                <EditAvatarText>Edit photo</EditAvatarText>
              </EditAvatarContainer>
            </AvatarContainer>

            {/* ------------------- USER INFO --------------------- */}

            <UserDataContainer>
              {Object.keys(userData).length !== 0 && (
                <UserUpdateForm
                  data={userData}
                  updateData={updateUser}
                  token={token}
                />
              )}
            </UserDataContainer>

            {/* ------------------ LOG OUT BTN --------------------- */}

            <LogOutContainer>
              <LogOutButton type="button" onClick={logoutUser}>
                <HiOutlineLogout size={25} color={'#F59256'} />
              </LogOutButton>
              <LogOutText>Log Out</LogOutText>
            </LogOutContainer>
          </UserInfo>
        </section>

        {/* ------------------------ PETS ------------------------ */}

        <section>
          <PetsHeader>
            <H2 style={{ marginBottom: '0px' }}>My pets:</H2>
            <AddPetContainer>
              <AddPetText>Add Pet</AddPetText>

              <AddPetButton type="button" />

              <AddPetButton type="button" onClick={toggleModal}>

                <BsPlusCircleFill size={40} color={'#F59256'} />
              </AddPetButton>
            </AddPetContainer>
          </PetsHeader>

          {/* -------------------- PET AVATAR --------------------- */}

          <ul>
            {userPets.map(pet => (
              <PetInfo key={pet._id}>
                <PetImgContainer>
                  <img src={pet.avatarURL} alt="avatar" />
                </PetImgContainer>

                {/* -------------- PET INFO ----------------------- */}

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

                  {/* -------------DELETE PET BTN */}

                  <DeletePetButton type="button">
                    <HiTrash size={20} color={'#111111a0'} />
                  </DeletePetButton>
                </PetData>
              </PetInfo>
            ))}
          </ul>
        </section>
      </Section>
      {showModal && (
        <Modal closeModal={toggleModal}>
            <PetForm/>
        </Modal>
      )}
    </>
  );
};
