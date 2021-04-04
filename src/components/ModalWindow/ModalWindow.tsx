import React from "react";

import useClickOutside from "../../hooks/useClickOutside";
import "./ModalWindow.scss";

interface ModalWindowProps {
  modalTitle: string;
  IsModalVisible: boolean;
  closeModal: () => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
  modalTitle,
  IsModalVisible,
  closeModal,
  children,
}) => {
  const modalRef = React.createRef<HTMLDivElement>();

  useClickOutside(modalRef, IsModalVisible, closeModal);

  return (
    <>
      {IsModalVisible && (
        <div className="modal-shim">
          <div className="modal" ref={modalRef}>
            <div className="modal-close-icon" onClick={closeModal}>
              X
            </div>
            <div className="modal-guts">
              <span className="modal-span">{modalTitle}</span>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
