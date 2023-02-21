import styled from 'styled-components';

export const LabelSearch = styled.label`
  position: relative;
  display: block;
  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
  }
  @media (min-width: 768px) {
    width: 608px;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  display: block;
  padding: 10px 40px 10px 20px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.card};
  border: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text.secondary};
  outline: none;
  transition: box-shadow 300ms linear;
  :hover {
    border: 1px solid ${p => p.theme.colors.accent};
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  svg {
    right: 0px;
  }
`;
