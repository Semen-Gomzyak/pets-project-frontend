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
