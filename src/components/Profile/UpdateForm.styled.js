import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: inline-flex;
  width: 62px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const Input = styled.input`
  width: 124px;
  border: none;
  padding: 3px 18px;
  font-size: 12px;
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
  margin-left: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fdf7f2;
`;
