import styled from 'styled-components';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  border: 2px solid #f59256;
  backdrop-filter: blur(2px);
  transition: transform ${p => p.theme.transition.first};

  :hover {
    cursor: pointer;
  }
`;

export const FavoriteIconFalse = styled(BsHeart)`
  color: #f59256;
`;

export const FavoriteIconTrue = styled(BsHeartFill)`
  color: #f59256;
`;
