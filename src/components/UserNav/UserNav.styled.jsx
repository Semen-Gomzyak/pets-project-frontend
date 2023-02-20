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
  text-decoration: none;
  width: 164px;
  height: 44px;
  background: tomato;
  font-family: ${p => p.theme.fonts.manrope};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.white};
  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const UserNavIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 12px;
`;
