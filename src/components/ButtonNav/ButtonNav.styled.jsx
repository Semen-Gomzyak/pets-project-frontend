import styled from 'styled-components';

export const ButtonNavMenu = styled.div`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  background: #fdf7f2;
`;

export const LogoMenu = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 46px;

  @media (min-width: 768px) {
    margin-bottom: 88px;
  }
`;

export const UserMenu = styled.div`
  display: flex;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;
