import { useState } from "react";

import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: fixed;
  background-color: #fff;
  width: 60%;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalClose = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;


const Modal = ({ isOpen, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen)
  return (
    <ModalWrapper isOpen={isModalOpen}>
      <ModalContent>
        <ModalClose onClick={handleCloseModal}>x</ModalClose>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;
