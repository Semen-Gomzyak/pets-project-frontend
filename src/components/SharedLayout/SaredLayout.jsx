import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';

export const SharedLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = event => {
    setShowModal(prevState => !prevState);
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <nav style={{ margin: '20px 0px' }}>
          <NavLink to="/" style={{ margin: 20 }}>
            Home
          </NavLink>
          <NavLink to="/profile" style={{ margin: 20 }}>
            Profile
          </NavLink>
        </nav>
        <button
          style={{ marginRight: '30px', marginLeft: 'auto', marginTop: '20px' }}
          type="button"
          onClick={toggleModal}
        >
          Login
        </button>
      </div>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <LoginForm />
        </Modal>
      )}
      {/* <Modal closeModal={toggleModal} visible={showModal}>
        <LoginForm />
      </Modal> */}
      {/* <div id="modal-root"></div> */}
    </>
  );
};
