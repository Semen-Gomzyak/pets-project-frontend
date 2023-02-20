import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    gap: 20px;
    margin-left: auto;
    margin-right: 0;
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 28px;
`;
