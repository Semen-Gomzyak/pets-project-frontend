import styled from 'styled-components';
// import theme from 'services/theme';

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-bottom: 35px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 52px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    margin-left: 0;
    margin-bottom: 32px;
    flex-direction: row;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 233px;
  height: 233px;
  border-radius: 50%;
  /* object-fit: contain; */
  overflow: hidden;

  > img {
    /* width: auto;
    height: 100%; */
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Plug = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 233px;
  height: 233px;
  background: none;
  background-color: ${p => p.theme.colors.background};
  border-radius: 50%;
`;

export const ChangeAvatarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-left: auto;

  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: -72px;
  }
`;

export const BtnContainer = styled.label`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const AvatarInput = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
  pointer-events: none;
`;

export const AvatarButton = styled.div`
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
