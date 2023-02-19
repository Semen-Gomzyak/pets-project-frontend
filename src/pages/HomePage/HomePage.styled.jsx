import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 280px;
  font-size: 32px;
  line-height: 1.38;
  font-weight: 700;
  color: black;
  @media screen and (min-width: 768px) {
    max-width: 588px;
    font-size: 68px;
    line-height: 1.47;
  }
`;

export const HomeSection = styled.section`
  padding-top: 60px;
  min-height: 543px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: #f59256;
  @media screen and (min-width: 768px) {
    min-height: 1108px;
    padding-top: 88px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 92px;
    padding-bottom: 408px;
    min-height: calc(100vh - 64px);
  }
`;
