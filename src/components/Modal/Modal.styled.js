import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Backdrop = styled.div`
  position: fixed;
  padding-top: 70px;
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
  // overflow: auto;
  z-index: 9999;

  width: fit-content;
  height: fit-content;
  margin-bottom: 30px;
  margin-top: 160px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.white};
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  /* transition-property: all; */

  @media ${p => p.theme.device.tablet} {
    margin-top: 270;
    margin-bottom: 60px;
  }
  @media ${p => p.theme.device.desktop} {
    margin-top: 0;
    margin-bottom: 0;
  }

  animation-name: open;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    cursor: pointer;
  }
`;

export const MdCloseBtn = styled(MdClose)`
  color: ${p => p.theme.colors.black};
  :hover,
  :focus {
    color: ${p => p.theme.colors.background};
  }
`;
