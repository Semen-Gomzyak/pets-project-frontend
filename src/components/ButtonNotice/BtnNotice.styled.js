import styled from 'styled-components';
import { Button } from 'components/Button/Button';

export const Btn = styled(Button)`
  margin-left: 20px;
  margin-right: 20px;

  width: 100%;
  background-color: ${p => p.theme.colors.white};
  box-shadow: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border: 2px solid ${p => p.theme.colors.buttonAccent};
    color: ${p => p.theme.colors.buttonAccent};
    box-shadow: ${p => p.theme.shadows.button};
  }
`;
