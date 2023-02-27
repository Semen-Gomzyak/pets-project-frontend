import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import BgLoginMob from '../../images/LoginPage/BgLoginMob.png';
import BgLoginMob2x from '../../images/LoginPage/BgLoginMob2x.png';
import BgLoginTab from '../../images/LoginPage/BgLoginTab.png';
import BgLoginTab2x from '../../images/LoginPage/BgLoginTab2x.png';
import BgLoginForm from '../../images/LoginPage/BgLoginForm.png';
import BgLoginForm2x from '../../images/LoginPage/BgLoginForm2x.png';

export const RegisterSection = styled.section`
  padding-top: 60px;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${BgLoginMob});
  background-size: contain;
  background-position: bottom;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${BgLoginMob2x});
  }

  @media screen and (min-width: 768px) {
    // min-height: auto;
    background-image: url(${BgLoginTab});
    background-size: contain;
    background-position: bottom;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgLoginTab2x});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${BgLoginForm});
    background-size: contain;
    background-position: bottom;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${BgLoginForm2x});
    }
  }
`;

// export const InfoForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   margin: 0 auto;
//   padding: 40px;
//   border: 1px solid;
//   border-color: #f2f2f2;

//   width: 608px;
//   min-height: 517px;
//   left: 80px;
//   top: 276px;

//   background: #ffffff;
//   box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
//   border-radius: 40px;
// `;

export const InfoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 40px;
    border: 1px solid;
    border-color: #f2f2f2;

    max-width: 608px;
    width: 100%;

    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 60px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;




export const InputsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  width: 280px;
  height: 40px;

  
  padding: 8px;
  border: 1px solid;
  border-radius: 40px;
  background-color: #fdf7f2;
  border-color: #f59256;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1, 39;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  padding-left: 32px;

  
  @media screen and (min-width: 768px) {
    width: 448px;
    height: 52px;
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    width: 458px;
    height: 52px;
  }
`;

export const InputDiv = styled.div`
  position: relative;

  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RegisterTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.38;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  // width: 100px;
  // height: 33px;

  color: #111111;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const Button = styled.button`
  padding: 6px 20px;
  background-color: #f59256;
  border: 1px solid;
  border-radius: 4px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  gap: 10px;

  width: 280px;
  height: 44px;

  border-radius: 40px;
  transition: 100ms linear;
  &:hover {
    transform: scale(1.06);
  }
  &:active {
    transform: scale(1);
  }
  @media screen and (min-width: 768px) {
    width: 458px;
    height: 44px;
  }
  @media (min-width: 1280px) {
    width: 458px;
    height: 48px;
    left: 155px;
    top: 585px;
  }
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  margin-top: 40px;
`;

export const Link = styled.a`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  text-decoration-line: underline;

  color: #3091eb;
  margin-left: 5px;
`;

export const Error = styled(ErrorMessage)`
position: absolute;
bottom: 101%;
left: 5%;
font-size: 14px;
flex-wrap: nowrap;
  color: red;
  font-style: italic;
  text-align: center;
`;

export const ButtonContainer = styled.div`
display: block;
`;
