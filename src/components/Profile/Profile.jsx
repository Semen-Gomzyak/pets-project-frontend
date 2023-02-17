import { SharedLayout } from '../SharedLayout/SaredLayout';
import { HiCamera, HiPencil, HiTrash } from 'react-icons/hi2';
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
  Form,
  Label,
  Input,
  InputButton,
  LogOutContainer,
  LogOutButton,
  LogOutText,
  PetsHeader,
  AddPetContainer,
  AddPetButton,
  AddPetText,
  PetInfo,
  PetDataList,
  PetItem,
  PetImgContainer,
  DeletePetButton,
  Span,
  PetData,
} from './Profile.styled';

export const Profile = () => {
  return (
    <>
      <SharedLayout />
      <Section>
        {/* ------------------------ USER ------------------------ */}

        <div>
          <H2>My information:</H2>
          <UserInfo>
            <AvatarContainer>
              <div style={{ width: '230px' }}>
                <Avatar>
                  <img src="https://i.ibb.co/rZcNXyG/photo1.jpg" alt="avatar" />
                </Avatar>
                <EditAvatarContainer>
                  <AvatarButton type="button">
                    <HiCamera size={20} color={'#F59256'} />
                  </AvatarButton>
                  <EditAvatarText>Edit photo</EditAvatarText>
                </EditAvatarContainer>
              </div>
            </AvatarContainer>

            <UserDataContainer>
              <Form>
                <Label htmlFor="">Name:</Label>
                <Input type="text" value={'Ivan'} />
                <InputButton type="submit">
                  <HiPencil size={10} color={'#F59256'} />
                </InputButton>
              </Form>
              <Form>
                <Label htmlFor="">Email:</Label>
                <Input type="text" value={'example@email.com'} />
                <InputButton type="submit">
                  <HiPencil size={10} color={'#F59256'} />
                </InputButton>
              </Form>
              <Form>
                <Label htmlFor="">Birthday:</Label>
                <Input type="text" value={'11.11.2000'} />
                <InputButton type="submit">
                  <HiPencil size={10} color={'#F59256'} />
                </InputButton>
              </Form>
              <Form>
                <Label htmlFor="">Phone:</Label>
                <Input type="text" value={'+3800000000'} />
                <InputButton type="submit">
                  <HiPencil size={10} color={'#F59256'} />
                </InputButton>
              </Form>
              <Form>
                <Label htmlFor="">City:</Label>
                <Input type="text" value={'Lviv'} />
                <InputButton type="submit">
                  <HiPencil size={10} color={'#F59256'} />
                </InputButton>
              </Form>
            </UserDataContainer>
            <LogOutContainer>
              <LogOutButton type="button">
                <HiOutlineLogout size={25} color={'#F59256'} />
              </LogOutButton>
              <LogOutText>Log Out</LogOutText>
            </LogOutContainer>
          </UserInfo>
        </div>

        {/* ------------------------ PETS --------------------------- */}

        <div>
          <PetsHeader>
            <H2 style={{ marginBottom: '0px' }}>My pets:</H2>
            <AddPetContainer>
              <AddPetText>Add Pet</AddPetText>
              <AddPetButton type="button">
                <BsPlusCircleFill size={40} color={'#F59256'} />
              </AddPetButton>
            </AddPetContainer>
          </PetsHeader>
          <ul>
            <PetInfo>
              <ul>
                <PetItem>
                  <PetImgContainer>
                    <img
                      src="https://i.ibb.co/rZcNXyG/photo1.jpg"
                      alt="avatar"
                    />
                  </PetImgContainer>
                  <PetDataList style={{ position: 'relative' }}>
                    <ul>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Name: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Date of birth: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Breed: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Comments: </Span> Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Possimus distinctio quo
                          praesentium? Repellendus debitis laborum quis natus
                          obcaecati, soluta impedit! Obcaecati voluptatibus eos
                          accusamus exercitationem quaerat, sequi esse veniam
                          beatae, nesciunt ad hic illo nostrum est pariatur ex
                          et odit?
                        </PetData>
                      </li>
                    </ul>
                    <DeletePetButton type="button">
                      <HiTrash size={20} color={'#111111a0'} />
                    </DeletePetButton>
                  </PetDataList>
                </PetItem>
              </ul>
            </PetInfo>
            <PetInfo>
              <ul>
                <PetItem>
                  <PetImgContainer>
                    <img
                      src="https://i.ibb.co/rZcNXyG/photo1.jpg"
                      alt="avatar"
                    />
                  </PetImgContainer>
                  <div style={{ position: 'relative' }}>
                    <ul>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Name: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Date of birth: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Breed: </Span>data
                        </PetData>
                      </li>
                      <li style={{ display: 'flex' }}>
                        <PetData>
                          <Span>Comments: </Span> Lorem ipsum dolor, sit amet
                          consectetur adipisicing elit. Rem, molestias iste!
                          Dicta totam, quam molestias consequatur saepe possimus
                          voluptate adipisci enim eius quae perspiciatis
                          officiis animi ullam aperiam sapiente, commodi
                          aspernatur tempore odit ipsam nostrum ad ipsum unde!
                          Tempora iure alias dicta, culpa illo molestias
                          officiis labore quod at! Nostrum praesentium
                          voluptatum iste dicta, facilis eius in porro incidunt
                          maxime.
                        </PetData>
                      </li>
                    </ul>
                    <DeletePetButton type="button">
                      <HiTrash size={20} color={'#111111a0'} />
                    </DeletePetButton>
                  </div>
                </PetItem>
              </ul>
            </PetInfo>
          </ul>
        </div>
      </Section>
    </>
  );
};
