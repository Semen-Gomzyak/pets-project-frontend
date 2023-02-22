import { Field, Form } from 'formik';
import styled from 'styled-components';

export const PetTitle = styled.h1`
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.ml};
  color: ${p => p.theme.colors.black};
  line-height: 1.37;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.36;
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  @media ${p => p.theme.device.tablet} {
    padding: 20px 60px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled.label`
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  line-height: 1.47;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 1.1;
  }
`;

export const InputStyled = styled(Field)`
  position: relative;
  padding-left: 14px;
  margin-bottom: 16px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 240px;
  height: 40px;
  border-radius: ${p => p.theme.radii.bignormal};
  background-color: rgb(253, 247, 242);
  font-family: ${p => p.theme.fonts.manrope};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xss};
  line-height: 1.35;
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus {
    color: ${p => p.theme.colors.buttonAccent};
    transition: ${p => p.theme.transition};
  }
  &::placeholder {
    font-family: ${p => p.theme.fonts.manrope};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xss};
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
  }
  @media ${p => p.theme.device.tablet} {
    width: 448px;
    height: 48px;
    padding-left: 16px;
    font-size: ${p => p.theme.fontSizes.xsss};
    line-height: 1.66;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes.xss};
      color: ${p => p.theme.colors.text.gray};
    }
  }
`;

export const InputDateStyled = styled(Field)`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-bottom: 16px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 100%;
  height: 40px;
  border-radius: ${p => p.theme.radii.bignormal};
  background-color: #fdf7f2;
  font-family: ${p => p.theme.fonts.black};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xss};
  line-height: 1.35;
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.buttonAccent};
    transition: ${p => p.theme.transition};
  }
  &::placeholder {
    font-family: ${p => p.theme.fonts.manrope};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xss};
    line-height: 1.35;
    color: rgba(27, 27, 27, 0.6);
  }
  &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  @media ${p => p.theme.device.tablet} {
    height: 48px;
    padding-left: 14px;
    font-size: ${p => p.theme.fontSizes.xsss};
    line-height: 1.66;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes.xsss};
      color: ${p => p.theme.colors.gray};
    }
  }
`;

export const ErrorStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 20px;
  @media ${p => p.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 40px;
  padding: 10px auto;
  font-size: ${p => p.theme.fontSizes.xsss};
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: ${p => p.theme.radii.bignormal};
  cursor: pointer;
  font-family: ${p => p.theme.fonts.black};
  font-weight: ${p => p.theme.fontWeights.semibold};
  background-color: ${p => p.theme.colors.white};
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  @media ${props => props.theme.device.tablet} {
    width: 180px;
    height: 44px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  margin-top: 8px;
  width: 240px;
  height: 100px;
  border-radius: ${p => p.theme.radii.small};
  padding: 12px 5px 12px 14px;
  background-color: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: ${p => p.theme.fontSizes.xss};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.buttonAccent};
    transition: ${p => p.theme.transition};
  }
  @media ${p => p.theme.device.tablet} {
    width: 394px;
    height: 116px;
    font-size: ${p => p.theme.fontSizes.xsss};
  }
`;

export const ImageLabel = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.black};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  line-height: 1.47;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 1.1;
  }
`;

export const PhotoPetText = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  width: 116px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.background};
  @media ${p => p.theme.device.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageTitle = styled.label`
  // text-align: center;
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.2;
  letter-spacing: -0.01em;
  @media ${p => p.theme.device.tablet} {
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: 1.04;
  }
`;

export const ImageBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background};
  border: none;
  margin-bottom: 28px;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  cursor: pointer;
  transition: ${p => p.theme.transition};
  &:hover,
  &:focus {
    width: 210px;
    height: 210px;
    background-color: ${p => p.theme.colors.gradient};
    transition: ${p => p.theme.transition};
  }
  @media ${p => p.theme.device.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ImageExample = styled.div`
  /* margin-bottom: 28px; */
  width: 208px;
  height: 208px;
  background-color: ${p => p.theme.colors.background};
  border: none;
  border-radius: 20px;
  @media ${p => p.theme.device.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.small};
  @media ${p => p.theme.device.tablet} {
    border-radius: ${p => p.theme.radii.bignormal};
  }
`;

  



