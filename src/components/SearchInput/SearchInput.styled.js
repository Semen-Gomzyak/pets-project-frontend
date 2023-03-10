import styled from 'styled-components';
import { CiCircleRemove } from 'react-icons/ci';

export const LabelSearch = styled.label`
  position: relative;
  display: block;
  margin: 0 auto;
  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    width: 25px;
    height: 25px;
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
  box-sizing: border-box;
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.card};
  border: none;
  outline: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text.secondary};

  transition: box-shadow 300ms linear;
  :hover {
    outline: 1px solid ${p => p.theme.colors.accent};
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
export const CiCircleDel = styled(CiCircleRemove)`
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
