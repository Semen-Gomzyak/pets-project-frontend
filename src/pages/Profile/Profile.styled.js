import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  padding-top: 0;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    /* height: 100vh;
    overflow: scroll; */
  }
`;

export const UserPart = styled.section`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1280px) {
    align-self: start;
  }
`;

export const UserPartTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 18px;

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 16);
    margin-bottom: calc(100vw / 17.77);
  }
  @media screen and (min-width: 480px) {
    font-size: 30px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
    margin-top: 10px;
  }
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 280px;
  padding: 20px 14px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
    margin-bottom: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: left;

    width: 736px;
    margin-bottom: 20px;
    padding-left: 0;
    margin-left: -32px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    width: 411px;
    margin-left: -16px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 27px;
  }
`;

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 25px;
    left: 30px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    bottom: 0;
    top: 0;
    margin-left: -16px;
    align-self: flex-start;
  }
`;

export const LogOutText = styled.span`
  margin-left: 8px;

  font-weight: 500;
  font-size: 16px;
  color: rgba(17, 17, 17, 0.6);

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 20);
  }
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LogOutButton = styled.button`
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

// ------------------------ PETS ------------------------

export const PetsPart = styled.section`
  @media screen and (min-width: 1280px) {
    margin-left: 32px;
  }
`;

export const PetsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 280px;
  margin-bottom: 18px;

  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
    margin-bottom: calc(100vw / 17.77);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: 768px) {
    width: 706px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const PetsPartTitle = styled.h2`
  margin-bottom: 18px;

  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const AddPetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
`;

export const AddPetButton = styled.button`
  margin-left: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: none;

  :hover {
    cursor: pointer;
  }
`;

export const AddPetText = styled.span`
  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const PetInfo = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 16px 20px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media screen and (min-width: 320px) {
    width: calc(100vw / 1.14);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 706px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const PetImgContainer = styled.div`
  display: flex;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    border-radius: 40px;
  }
`;

export const PetData = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    width: 470px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 590px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 22.86);
    line-height: calc(100vw / 14.5);
  }
  @media screen and (min-width: 480px) {
    font-size: 21px;
    line-height: 33px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const P = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 22.86);
    line-height: calc(100vw / 14.5);
  }
  @media screen and (min-width: 480px) {
    font-size: 21px;
    line-height: 33px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DeletePetButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: none;
  border-radius: 22px;

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    background-color: #fdf7f2;
  }
`;
