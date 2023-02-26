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
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: fit-content;
  margin-bottom: 160px;
  margin-top: 160px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.device.mobile} {
    width: calc(100vw - 40px);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media ${p => p.theme.device.tablet} {
    width: 704px;
    margin-top: 270;
    margin-bottom: 270px;
  }
  @media ${p => p.theme.device.desktop} {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const CloseBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
