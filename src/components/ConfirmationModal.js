import React from 'react';
import '../styles/ConfirmationModal.css';
import logo from '../assets/Icon.png';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, amount }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="confirmation-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-content">
          <div className="confirmation-header">
            <div className="emoji-container">
              <img src={logo} alt="thinking emoji" className="emoji-img" />
            </div>
            <div className="confirmation-text">
              <h2>Confirm Order?</h2>
              <p>Are you sure to confirm order ${amount}?</p>
            </div>
          </div>
          <div className="button-container">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button className="accept-button" onClick={onConfirm}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal; 