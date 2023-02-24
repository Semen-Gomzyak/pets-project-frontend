import { ButtonMob, Button, BtnCiCirclePlus } from './AddPetBtn.styled';
import { useMedia } from 'react-use';

export const AddPetBtn = ({ text, onClick }) => {
  const isMobile = useMedia('(max-width: 767px)');

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <>
      {isMobile ? (
        <ButtonMob type="button" onClick={handleButtonClick}>
          <span>
            <BtnCiCirclePlus />
          </span>
          {text}
        </ButtonMob>
      ) : (
        <Button type="button" onClick={handleButtonClick}>
          {text}
          <span>
            <BtnCiCirclePlus />
          </span>
        </Button>
      )}
    </>
  );
};
