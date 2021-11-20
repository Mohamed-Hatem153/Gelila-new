import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

Modal.setAppElement("#root");
const ProductModal = ({ isOpen, toggleModal, img,title,details }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={500}
    >
      <button onClick={toggleModal}>
        <AiOutlineClose />
      </button>
      <div className="modal-content">
        <div className="modal-details">
          <h2>100% fresh. Sourced from Egypt.</h2>
          <h3>Benefits:</h3>
          <p>{details}</p>
        </div>
        <div className="modal-img">
          <img src={img} alt={title} />
        </div>
      </div>
    </Modal>
  );
};
export default ProductModal;
