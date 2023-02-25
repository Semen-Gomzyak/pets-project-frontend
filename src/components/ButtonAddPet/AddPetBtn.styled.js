import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';

export const ButtonMob = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.accent};
  position: relative;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
  align-items: center;
  font-size: 16px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.buttonAccent};
    transition: ${p => p.theme.transition.first};
    transform: scale(1.1);
  }
`;

export const BtnCiCirclePlus = styled(AiOutlinePlus)`
  aline-items: center;
  width: 25px;
  height: 25px;
`;

export const Button = styled.button`
  display: flex;
  background: inherit;
  flex-shrink: 0;
  gap: 12px;
  padding: 0;
  width: 129px;
  align-items: center;
  font-size: 20px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    background: ${p => p.theme.colors.accent};
    border-radius: 50%;
    transition: transform ${p => p.theme.transition.first};

    :hover,
    :focus {
      transform: scale(1.1);
      background: ${p => p.theme.colors.buttonAccent};
    }

    svg {
      fill: ${p => p.theme.colors.white};
    }
  }
`;
