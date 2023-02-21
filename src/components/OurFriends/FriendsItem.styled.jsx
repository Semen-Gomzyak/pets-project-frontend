import styled from 'styled-components';

export const Card = styled.article`
  width: 280px;
  padding: 14px 4px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.card};

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    border-radius: 40px;
  }
`;

export const WrapperTitle = styled.div`
  text-align: center;
  margin-bottom: 12px;
`;

export const LinkTitle = styled.a`
  text-align: center;
  margin-bottom: 28px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  text-decoration: underline 1px;
  color: ${p => p.theme.colors.accent};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.hoverAccent};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.space[4]}px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.35;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 110px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 1280px) {
    width: 158px;
  }
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 14px;
    line-height: 1.357;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const InfoItemLink = styled.a`
  color: ${p => p.theme.colors.text.primary};
  text-decoration-line: none;

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const InfoItemText = styled.p`
  color: ${p => p.theme.colors.text.primary};
`;
