import styled from 'styled-components';
import { HiPencil } from 'react-icons/hi2';
import { BsCheckLg } from 'react-icons/bs';

export const Pen = styled(HiPencil)`
  width: 10px;
  height: 10px;

  @media screen and (min-width: 320px) {
    width: calc(100vw / 32);
    height: calc(100vw / 32);
  }
  @media screen and (min-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const Check = styled(BsCheckLg)`
  width: 10px;
  height: 10px;

  @media screen and (min-width: 320px) {
    width: calc(100vw / 32);
    height: calc(100vw / 32);
  }
  @media screen and (min-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

export const Form = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 280px;

  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  @media screen and (min-width: 768px) {
    width: 412px;
    padding-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: inline-flex;

  width: 62px;
  font-weight: 500;
  font-size: 12px;

  @media screen and (min-width: 320px) {
    width: calc(100vw / 5.16);
    font-size: calc(100vw / 27);
  }
  @media screen and (min-width: 480px) {
    width: 96px;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 107px;
  }
`;

export const Input = styled.input`
  width: 160px;
  font-size: 12px;

  border: none;
  padding: 4px 18px;

  :focus {
    background: #fdf7f2;
    outline: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }

  @media screen and (min-width: 320px) {
    width: calc(100vw / 2);
    font-size: calc(100vw / 27);
  }
  @media screen and (min-width: 480px) {
    width: 240px;
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 216px;
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  margin-left: 10px;
  @media screen and (min-width: 320px) {
    margin-left: calc(100vw / 32);
  }
  @media screen and (min-width: 480px) {
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;
  background: transparent;
  background-color: #fdf7f2;

  z-index: 10;

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 320px) {
    width: calc(100vw / 16);
    height: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

export const BtnIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
