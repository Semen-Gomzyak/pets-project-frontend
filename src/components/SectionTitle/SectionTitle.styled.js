import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  text-align: center;
  margin-top: 42px;
  margin-bottom: 28px;
  color: ${p => p.theme.colors.black};
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: calc(66 / 48);
    margin-top: 88px;
    margin-bottom: 40px;
  }
  @media (min-width: 1280) {
    margin-top: 60px;
  }
`;
