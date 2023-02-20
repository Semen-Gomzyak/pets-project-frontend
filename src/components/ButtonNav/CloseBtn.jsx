import { GrClose } from 'react-icons/gr';
import { BtnMenuClose } from './CloseBtn.styled';

export const CloseBtn = ({ onClick }) => {
  return (
    <>
      <BtnMenuClose onClick={onClick}>
        <GrClose />
      </BtnMenuClose>
    </>
  );
};
