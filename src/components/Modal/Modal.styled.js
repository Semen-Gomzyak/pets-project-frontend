import styled from 'styled-components';

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
`;

export const ModalContainer = styled.div`
  /* max-width: calc(100vw - 48px); */
  /* max-height: calc(100vh - 24px); */
  max-width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
`;

export const ModalHeightContainer = styled.div`
  height: 90vh;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* display: flex;
  align-items: center; */
`;
