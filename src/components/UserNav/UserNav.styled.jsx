import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserNavDiv = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: 0;
  }
`;

export const UserNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
  text-decoration: none;
  width: 164px;
  height: 44px;
  border-radius: 40px;
  text-align: center;

  background: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.manrope};
  color: ${p => p.theme.colors.white};

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;

  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const UserNavIcon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
