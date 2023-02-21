import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer } from './Modal.styled';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  });

  const modalRoot = document.querySelector('#modal-root');

  const onEscapePress = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = event => {
    if (event.target.id === 'backdrop') {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={onBackdropClick} id="backdrop">
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
};
