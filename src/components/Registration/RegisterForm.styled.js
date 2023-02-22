import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const InfoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 40px;
  border: 1px solid;
  border-color: #f2f2f2;

  width: 608px;
  height: 517px;
  left: 80px;
  top: 276px;

  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
`;

export const InputsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
  width: 448px;
  height: 52px;
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid;
  border-radius: 40px;
  background-color: #fdf7f2;
  border-color: #f59256;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1, 39;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 0.6);
  padding-left: 32px;
`;
export const RegisterTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 49px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  margin-bottom: 40px;
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

  width: 458px;
  height: 44px;
  left: 155px;
  top: 585px;

  border-radius: 40px;
  margin-top: 26px;
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
  color: red;
  font-style: italic;
`;
