import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NaviList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    gap: 80px;
    align-items: center;
  }
`;

export const NaviLink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  font-family: ${p => p.theme.fonts.manrope};
  color: ${p => p.theme.colors.black};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &.active {
    background: inherit;
    color: ${p => p.theme.colors.accent};
    font-weight: 700;
    text-decoration-line: underline;
  }

  @media ${p => p.theme.device.desktop} {
    font-size: 20px;
    line-height: 1.36;
  }
`;
