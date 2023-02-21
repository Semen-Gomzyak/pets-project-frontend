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
  font-family: ${p => p.theme.fonts.manrope};
  letter-spacing: 0.04em;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  padding: 10px 28px;
  border-radius: 40px;
  border: 2px solid #f59256;
  opacity: 1;

  height: 44px;
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  :hover,
  :focus {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  &.active {
    background: ${p => p.theme.colors.accent};
    border-radius: 40px;
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.35;
  }
`;
