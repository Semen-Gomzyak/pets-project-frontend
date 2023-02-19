import React, { useState } from 'react';

import { SharedLayout } from '../SharedLayout/SaredLayout';
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
import { UpdateForm } from './UpdateForm';

import axios from 'axios';
import userInfo from './userData.json';
import { useEffect } from 'react';
const userId = '63ee26069ac5b92d9b405c03';
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWUyNjA2OWFjNWI5MmQ5YjQwNWMwMyIsImlhdCI6MTY3Njc0NjkzOCwiZXhwIjoxNjc2NzUwNTM4fQ.z6pUNBMpM3VpKv2bRRvcKOhpKIpJj99veY6PbfspZ5Q';

const getUserInfo = async () => {
  try {
    return await axios.get(
      `http://localhost:3000/api/users/userinfo/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const convertDate = date => {
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const dateString = new Date(date).toLocaleDateString('en-GB', dateOptions);
  return dateString.replaceAll('/', '.');
};

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userPets, setUserPets] = useState([]);

  useEffect(() => {
    getUserInfo().then(response => {
      setUserData({
        email: response.data.email,
        name: response.data.name,
        cityRegion: response.data.cityRegion,
        mobilePhone: response.data.mobilePhone,
        birthday: response.data.birthday,
      });

      setUserPets(response.data.userPets);
    });
  }, []);

  const onInputChange = event => {
    const key = event.target.name;
    setUserData(prevState => ({ ...prevState, [key]: event.target.value }));
  };

  const updateUserData = async event => {
    event.preventDefault();
    const key = event.target.getAttribute('data-name');

    try {
      await axios.patch(
        `http://localhost:3000/api/users/userinfo/${userId}`,
        { [key]: userData[key] },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
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
                <img src={userInfo.avatarURL} alt="avatar" />
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
              <UpdateForm
                name="name"
                label="Name: "
                value={userData.name}
                onInputChange={onInputChange}
                onSubmit={updateUserData}
              />
              <UpdateForm
                name="email"
                label="Email: "
                value={userData.email}
                onInputChange={onInputChange}
                onSubmit={updateUserData}
              />
              <UpdateForm
                name="birthday"
                label="Birthday: "
                value={userData.birthday}
                onInputChange={onInputChange}
                onSubmit={updateUserData}
              />
              <UpdateForm
                name="mobilePhone"
                label="Phone: "
                value={userData.mobilePhone}
                onInputChange={onInputChange}
                onSubmit={updateUserData}
              />
              <UpdateForm
                name="cityRegion"
                label="City: "
                value={userData.cityRegion}
                onInputChange={onInputChange}
                onSubmit={updateUserData}
              />
            </UserDataContainer>

            {/* ------------------- LOG OUT --------------------- */}

            <LogOutContainer>
              <LogOutButton type="button">
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
