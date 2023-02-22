import styled from 'styled-components';

export const ListItem = styled.li`
  width: 280px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 32px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.card};
  border-radius: 0px 0px 20px 20px;
  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px;
  }
`;
