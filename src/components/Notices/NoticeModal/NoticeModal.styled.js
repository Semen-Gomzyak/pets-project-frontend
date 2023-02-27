import { Button } from '../../Button/Button';
import styled from 'styled-components';

export const Content = styled.div`
  width: 280px;
  height: auto;
  @media ${p => p.theme.device.tablet} {
    width: 700px;
    height: 480px;
  }
`;

export const ImageContainer = styled('div')`
  @media ${p => p.theme.device.tablet} {
    margin-right: 40px;
    display: flex;
  }
`;

export const PictureData = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  padding-top: 20px;

  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0px 0px 40px 40px;
  overflow: hidden;

  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media ${p => p.theme.device.tablet} {
    width: 288px;
    height: 328px;
    padding-top: 0px;
    margin-right: 20px;
  }
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  padding: 6px;
  width: 158px;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(1px);
  border-radius: 0px 15px 15px 0px;
  overflow: hidden;
`;

export const Header = styled.h2`
  margin: 16px 0px;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: -0.01em;
  @media ${p => p.theme.device.tablet} {
    width: 320px;
    font-size: ${p => p.theme.fontSizes.mll};
    margin: 0px 0px 20px 0px;
  }
`;

export const MyLi = styled.li`
  display: flex;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.m};
  }
  &:not(:first-child) {
    padding-top: 8px;
  }
  & p {
    font-size: inherit;
    font-weight: ${p => p.theme.fontWeights.semiBold};
    width: 98px;
    @media ${p => p.theme.device.tablet} {
      font-size: ${p => p.theme.fontSizes.m};
      width: 121px;
    }
  }
  & span {
    font-size: inherit;
    @media ${p => p.theme.device.tablet} {
      font-weight: ${p => p.theme.fontWeights.heading};
    }
  }
`;

export const Comments = styled.p`
  margin: 28px 0px 40px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  & span {
    font-weight: ${p => p.theme.fontWeights.text};
    @media ${p => p.theme.device.tablet} {
      font-weight: ${p => p.theme.fontWeights.heading};
    }
  }
  @media ${p => p.theme.device.tablet} {
    margin: 28px 0px 32px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const BtnContainer = styled.div`
  @media ${p => p.theme.device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

export const MyBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & span {
    margin-left: 9px;
  }
  :hover {
    cursor: pointer;
  }
  &:last-child {
    margin-top: 12px;
  }
  @media ${p => p.theme.device.tablet} {
    width: 160px;
    &:last-child {
      margin-top: 0px;
      margin-right: 12px;
    }
  }
`;
