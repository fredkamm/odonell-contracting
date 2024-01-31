import React from "react";

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img className="modal-image" src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default ImageModal;
