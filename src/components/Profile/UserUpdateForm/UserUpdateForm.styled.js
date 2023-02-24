import styled from 'styled-components';

export const Form = styled.form`
  width: 280px;
  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  }
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  /* width: 280px;
  @media screen and (min-width: 320px) {
    width: calc(100vw - 40px);
  }
  @media screen and (min-width: 480px) {
    width: 440px;
  } */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: inline-flex;
  width: 62px;
  @media screen and (min-width: 320px) {
    width: calc(100vw / 5.16);
  }
  @media screen and (min-width: 480px) {
    width: 96px;
  }

  font-weight: 500;
  font-size: 12px;
  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 27);
  }
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
  line-height: 16px;
`;

export const Input = styled.input`
  width: 160px;
  @media screen and (min-width: 320px) {
    width: calc(100vw / 2);
  }
  @media screen and (min-width: 480px) {
    width: 240px;
  }

  border: none;
  padding: 4px 18px;

  font-size: 12px;
  @media screen and (min-width: 320px) {
    font-size: calc(100vw / 27);
  }
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }

  line-height: 16px;
  :focus {
    background: #fdf7f2;
    outline: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  @media screen and (min-width: 320px) {
    width: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    width: 32px;
  }

  height: 20px;
  @media screen and (min-width: 320px) {
    height: calc(100vw / 16);
  }
  @media screen and (min-width: 480px) {
    height: 32px;
  }

  border-radius: 50%;
  background: transparent;
  background-color: #fdf7f2;

  z-index: 10;

  :hover {
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  position: relative;
  margin-left: 9px;
`;

export const BtnIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  pointer-events: none;
`;
