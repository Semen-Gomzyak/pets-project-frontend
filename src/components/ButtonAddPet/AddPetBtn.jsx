import { ButtonMob, Button, BtnCiCirclePlus } from './AddPetBtn.styled';
import { useMedia } from 'react-use';
import { BsPlusCircleFill } from 'react-icons/bs';
import { theme } from 'services/theme';

export const AddPetBtn = ({ text, onClick }) => {
  const isMobile = useMedia('(max-width: 767px)');

  const handleButtonClick = () => {
    onClick();
  };

  return (
    <>
      {isMobile ? (
        <Button type="button" onClick={handleButtonClick}>
          {text}
          <BsPlusCircleFill size={40} color={theme.colors.accent} />
        </Button>
      ) : (
        <Button type="button" onClick={handleButtonClick}>
          {text}
          <BsPlusCircleFill size={40} color={theme.colors.accent} />
        </Button>
      )}
    </>
  );
};
