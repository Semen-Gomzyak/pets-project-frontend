import React, { useState } from 'react';

import { SharedLayout } from 'components/SharedLayout/SaredLayout';
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

import axios from 'axios';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/Auth/selectors';
import { getUserInfo } from 'services/api';
import { logout } from 'redux/Auth/operations';
import { useNavigate } from 'react-router';

const convertDate = date => {
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('en-GB', dateOptions);
  return dateString.replaceAll('/', '.');
};

export const Profile = () => {
  const user = useSelector(getUser);
  const token = user.token;

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const [userPets, setUserPets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo(token).then(response => {
      setUserData({
        email: response.data.email,
        name: response.data.name,
        cityRegion: response.data.cityRegion,
        mobilePhone: response.data.mobilePhone,
        birthday: response.data.birthday,
        avatarURL: response.data.avatarURL,
      });

      if (response.data.pets) {
        setUserPets(response.data.pets);
      }
    });
  }, [token]);

  // console.log(userData);
  // console.log(userPets);

  const updateUserData = async data => {
    try {
      await axios.put(`http://localhost:3000/api/users/update`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }
  };

  const logoutUser = event => {
    event.preventDefault();
    dispatch(logout());
    navigate('/', { replace: true });
  };

  return (
    <>
      <SharedLayout />
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
                <UserUpdateForm data={userData} updateData={updateUserData} />
              )}
            </UserDataContainer>

            {/* ------------------- LOG OUT --------------------- */}

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
              <AddPetButton type="button">
                <BsPlusCircleFill size={40} color={'#F59256'} />
              </AddPetButton>
            </AddPetContainer>
          </PetsHeader>

          {/* ---------------------PET AVATAR --------------------- */}

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

                  <DeletePetButton type="button">
                    <HiTrash size={20} color={'#111111a0'} />
                  </DeletePetButton>
                </PetData>
              </PetInfo>
            ))}
          </ul>
        </section>
      </Section>
    </>
  );
};