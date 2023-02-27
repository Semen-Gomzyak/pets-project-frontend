import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { AiOutlineSearch } from 'react-icons/ai';
export const Label = styled.label`
  display: block;
  position: relative;
  margin: 0 auto 28px;

  @media (min-width: 768px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 608px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  padding: 8px 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border-color: transparent;
  &::placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    letter-spacing: 0.04em;

    color: #535353;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-5%, -50%);
`;

export const SearchButton = styled.button`
  border: solid 15px;
    }
`;

export const IconSearch = styled(AiOutlineSearch)`
  font-size: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
`;
