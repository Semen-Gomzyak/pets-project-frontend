import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  padding-top: 45px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 18px;
`;

export const UserInfo = styled.div`
  padding: 20px 14px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 35px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;

export const Avatar = styled.div`
  width: 230px;
  height: 230px;
  object-fit: cover;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
  }
  border-radius: 50%;
`;

export const EditAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
`;

export const AvatarButton = styled.button`
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const EditAvatarText = styled.span`
  margin-left: 5px;
  font-size: 12px;
  line-height: 22px;
`;

export const LogOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
`;

export const LogOutText = styled.span`
  margin-left: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: rgba(17, 17, 17, 0.6);
`;

export const LogOutButton = styled.button`
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 44px;
`;

export const Form = styled.form`
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: inline-flex;
  width: 62px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const Input = styled.input`
  width: 124px;
  border: none;
  padding: 4px 18px;
  font-size: 12px;
  line-height: 16px;
  :focus {
    outline: none;
    background: #fdf7f2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
`;

export const InputButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fdf7f2;
`;

export const PetDataList = styled.section`
  width: 240px;
`;

export const PetsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
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
`;

export const AddPetText = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
`;

export const PetInfo = styled.li`
  padding: 16px 20px;
  margin-bottom: 20px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
`;

export const PetItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
`;

export const PetImgContainer = styled.div`
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
`;

export const DeletePetButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
`;

export const PetData = styled.p`
  font-size: 14px;
  line-height: 22px;
`;
