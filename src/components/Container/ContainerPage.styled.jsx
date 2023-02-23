import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
