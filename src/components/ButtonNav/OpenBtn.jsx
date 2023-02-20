import { GiHamburgerMenu } from 'react-icons/gi';
import { BtnMenuOpen } from './OpenBtn.styled';

export const OpenBtn = ({ onClick }) => {
  return (
    <>
      <BtnMenuOpen onClick={onClick}>
        <GiHamburgerMenu />
      </BtnMenuOpen>
    </>
  );
};
