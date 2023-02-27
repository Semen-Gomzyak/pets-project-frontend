import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContainer, CloseBtn, MdCloseBtn } from './Modal.styled';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscapePress);
    document.body.classList.add("is-modal-open")
    return () => {
      window.removeEventListener('keydown', onEscapePress);
      document.body.classList.remove('is-modal-open');
    };
  }, []);

  const modalRoot = document.querySelector('#modal-root');

  const onEscapePress = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = event => {
    if (event.target.id === 'backdrop') {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop
      onClick={onBackdropClick}
      id="backdrop"
      className="modal-backdrop"
    >
      <ModalContainer className="modal">
        <>
          <CloseBtn type="button" onClick={closeModal}>
            <MdCloseBtn size={25} />
          </CloseBtn>
          {children}
        </>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
};
