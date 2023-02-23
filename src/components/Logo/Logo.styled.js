import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  margin-right: auto;
  margin-top: 16px;
  margin-left: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-top: 24px;
    margin-left: 32px;
  }

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
  color: ${p => p.theme.colors.black};
`;
export const OrangeLetter = styled(LogoText)`
  color: ${p => p.theme.colors.accent};
`;
