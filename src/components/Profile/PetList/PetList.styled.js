import styled from 'styled-components';
import { Button } from 'components/Button/Button';
// import { theme } from 'services/theme';

export const PetInfo = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 16px 20px;
  margin-bottom: 20px;

  background: ${p => p.theme.colors.white};
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
  }
  width: 161px;
  height: 161px;
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
    background-color: ${p => p.theme.colors.background};
  }
`;

export const ConfirmBtn = styled(Button)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  flex-direction: row;
  align-items: flex-start;
  padding: 2px 12px;
  border-radius: 30px;
  border: 1px solid ${p => p.theme.colors.accent};
  opacity: 1;
  background-color: ${p => p.theme.colors.white};
  transition: background-color 250 ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250 ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
