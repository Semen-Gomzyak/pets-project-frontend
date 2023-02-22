import styled from 'styled-components';

export const ListNotices = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns:  minmax(280px, 1fr));
  gap: 32px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 336px);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 288px);
  }
`;
