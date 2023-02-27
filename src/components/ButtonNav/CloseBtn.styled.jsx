import styled from 'styled-components';
import { TfiClose } from 'react-icons/tfi';

export const Icon = styled(TfiClose)`
  fill: ${p => p.theme.colors.black};
  transition: color 0.2s ease-in-out;

  :hover {
    fill: ${p => p.theme.colors.accent};
`;

export const BtnMenuClose = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  cursor: pointer;
  margin-left: auto;
  background: transparent;

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;
