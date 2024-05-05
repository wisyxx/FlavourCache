import './Modal.css';

const Modal = ({ visible, children, onClose }) => {
  return (
    <div
      className={`modal-overlay ${visible ? '' : 'hidden'}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${visible ? '' : 'hidden'}`} // Exit animation
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
