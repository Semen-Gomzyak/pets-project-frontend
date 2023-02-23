import styled from 'styled-components';
import { Button } from 'components/Button/Button';

export const ListFriends = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 12px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }
`;

export const ButtonFriend = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  background-color: ${p => p.theme.colors.white};
  box-shadow: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border: 2px solid ${p => p.theme.colors.buttonAccent};
    box-shadow: ${p => p.theme.shadows.button};
  }
`;
