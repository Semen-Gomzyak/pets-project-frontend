import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  margin-right: auto;

  @media (min-width: 1280px) {
    margin-right: 80px;
  }
`;
export const LogoText = styled.span`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0.07em;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

export const BlackLetter = styled(LogoText)`
  color: #111111;
`;
export const OrangeLetter = styled(LogoText)`
  color: #f59256;
`;
