import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 35px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 230px;
  height: 230px;
  object-fit: contain;
  overflow: hidden;
  > img {
    width: auto;
    height: 100%;
  }
  border-radius: 50%;
`;

export const ChangeAvatarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;
`;

export const AvatarInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;
`;

export const AvatarButton = styled.label`
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const EditAvatarText = styled.span`
  margin-left: 5px;
  font-size: 12px;
  line-height: 22px;
`;
