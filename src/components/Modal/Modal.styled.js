import styled from 'styled-components';
// import theme from 'services/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  width: 280px;

  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  }

  height: fit-content;
  overflow-y: scroll;
  margin-top: 160px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${p => p.theme.device.tablet} {
    width: 704px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 704px;
  }
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #fdf7f2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
