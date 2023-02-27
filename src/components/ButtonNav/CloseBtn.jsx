// import { GrClose } from 'react-icons/gr';
import { BtnMenuClose, Icon } from './CloseBtn.styled';

export const CloseBtn = ({ onClick }) => {
  return (
    <>
      <BtnMenuClose onClick={onClick}>
        <Icon />
      </BtnMenuClose>
    </>
  );
};
