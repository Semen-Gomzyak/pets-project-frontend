import styled from 'styled-components';

export const ListNotices = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 57px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 60px;
  }
`;
