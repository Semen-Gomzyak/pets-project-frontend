import { ButtonMob, Button, BtnCiCirclePlus } from './AddPetBtn.styled';
import { useMedia } from 'react-use';

export const AddPetBtn = ({ text, onClick }) => {
  const isMobile = useMedia('(max-width: 532px)');

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
          {/* {text} */}
          <span style={{ color: '#ffffff' }}>Add pet</span>
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
