import { Button } from '../../Button/Button';
import styled from 'styled-components';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

export const Box = styled.div`
  margin: 32px 20px;
  @media ${p => p.theme.device.tablet} {
  }
`;
export const ImageContainer = styled('div')`
  @media ${p => p.theme.device.tablet} {
    display: flex;
  }
`;

export const PictureData = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 0px 0px 40px 40px;

  @media ${p => p.theme.device.tablet} {
    width: 288px;
    height: 328px;
    padding-top: 0px;
    margin-right: 20px;
  }
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Category = styled.p`
  position: absolute;
  top: 20px;
  padding: 6px;
  width: 158px;
  text-align: center;
  background-color: #ffffff99;
  backdrop-filter: blur(50px);
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
    :focus,
    :hover {
      color: ${p => p.theme.colors.accent};
    }
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
  align-items: center;
  justify-content: center;
  justify-content: center;
  width: 100%;
  padding: 8px 10px;

  margin-bottom: 12px;
  margin-left: 0px;

  @media ${p => p.theme.device.tablet} {
    width: 160px;

    margin-bottom: 0px;
    margin-left: 12px;
  }

  :contact {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const LinkTel = styled.a`
  text-decoration: none;
  color: ${p => p.theme.colors.text.primary};
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FavoriteIconFalse = styled(BsHeart)`
  color: ${p => p.theme.colors.accent};
  margin-bottom: -3px;
  margin-left: 10px;
`;

export const FavoriteIconTrue = styled(BsHeartFill)`
  color: ${p => p.theme.colors.accent};
  margin-bottom: -3px;
  margin-left: 10px;
`;
