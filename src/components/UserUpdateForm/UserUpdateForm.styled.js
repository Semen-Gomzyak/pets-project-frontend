import styled from 'styled-components';

export const Form = styled.form`
  width: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
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
  width: 160px;
  border: none;
  padding: 4px 18px;
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
  background-color: #fdf7f2;

  z-index: 10;

  :hover {
    cursor: pointer;
  }
`;

export const BtnIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const BtnContainer = styled.div`
  position: relative;
  width: 20p;
  height: 20px;
  margin-left: 9px;
`;
