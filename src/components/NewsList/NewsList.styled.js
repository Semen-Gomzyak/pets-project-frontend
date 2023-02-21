import styled from 'styled-components';

export const List = styled.ul`
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 33px;
  @media (min-width: 768px) {
    margin: 60px 0 0;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 72px;
    column-gap: 32px;
  }
`;

export const ListItem = styled.li`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 4px;
    border-radius: 40px;
    margin-bottom: 4px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  }
  @media (min-width: 768px) {
    width: 335px;
    ::before {
      width: 280px;
      height: 8px;
    }
  }
  @media (min-width: 1280px) {
    width: 394px;
    ::before {
      width: 340px;
      height: 8px;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(33 / 24);
  letter-spacing: -0.01em;
  color: ${p => p.theme.colors.black};
`;

export const Description = styled.p`
  margin: 16px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: ${p => p.theme.colors.text.secondary};
  max-height: 176px;
  overflow: hidden;
  @media (min-width: 768px) {
    max-height: 132px;
  }
  @media (min-width: 1280px) {
    max-height: 110px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: ${p => p.theme.colors.text.gray};
`;

export const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);
  color: ${p => p.theme.colors.accent};
  :hover {
    width: 100%;
  }
`;
