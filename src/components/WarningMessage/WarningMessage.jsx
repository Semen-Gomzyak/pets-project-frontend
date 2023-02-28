import { CancelBtn, Wrap, Title, Button } from './WarningMessage.styled';
import { Modal } from 'components/Modal/Modal';

export const WarningMessage = ({
  onClose,
  text,
  type,
  approveFunk,
  id,
}) => {
  const clickHandler = () => {
    approveFunk(id);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Title>{text}</Title>

      <Wrap>
        <CancelBtn onClick={onClose}>Cancel</CancelBtn>
        <Button type="button" onClick={clickHandler}>
          Delete
        </Button>
      </Wrap>
    </Modal>
  );
};
