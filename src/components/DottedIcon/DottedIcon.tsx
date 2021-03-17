import React, { useState } from "react";

import { ModalWindow } from "../ModalWindow";
import { DottedIconImage } from "./DottedIconImage";
import { EditMovieModalContent } from "../EditMovieModalContent";
import { DeleteMovieModalContent } from "../DeleteMovieModalContent";
import "./DottedIcon.scss";
import useClickOutside from "../useClickOutside";

export const DottedIcon: React.FC = () => {
  const [IsDropdownVisible, setDropdownVisibility] = useState(false);
  const [IsEditModalVisible, setEditModalVisibility] = useState(false);
  const [IsDeleteModalVisible, setDeleteModalVisibility] = useState(false);

  const modalRef = React.createRef<HTMLDivElement>();

  const openDropdown = (): void => {
    setDropdownVisibility(true);
  };

  const closeDropdown = (): void => {
    setDropdownVisibility(false);
  };

  const openEditModal = (): void => {
    setEditModalVisibility(true);
    closeDropdown();
  };

  const closeEditModal = (): void => {
    setEditModalVisibility(false);
  };

  const openDeleteModal = (): void => {
    setDeleteModalVisibility(true);
    closeDropdown();
  };

  const closeDeleteModal = (): void => {
    setDeleteModalVisibility(false);
  };

  useClickOutside(modalRef, IsDropdownVisible, closeDropdown);

  return (
    <div className="dotted-icon">
      <div className="dotted-icon-image" onClick={openDropdown}>
        <DottedIconImage />
      </div>
      {IsDropdownVisible && (
        <div className="dotted-icon-modal" ref={modalRef}>
          <div className="dotted-icon-close-icon" onClick={closeDropdown}>
            X
          </div>
          <div className="dotted-icon-option" onClick={openEditModal}>
            Edit
          </div>
          <div className="dotted-icon-option" onClick={openDeleteModal}>
            Delete
          </div>
        </div>
      )}
      {IsEditModalVisible && (
        <ModalWindow
          IsModalVisible={IsEditModalVisible}
          modalTitle="EDIT MOVIE"
          leftButton="RESET"
          rightButton="SAVE"
          closeModal={closeEditModal}
        >
          <EditMovieModalContent />
        </ModalWindow>
      )}
      {IsDeleteModalVisible && (
        <ModalWindow
          IsModalVisible={IsDeleteModalVisible}
          modalTitle="DELETE MOVIE"
          rightButton="CONFIRM"
          closeModal={closeDeleteModal}
        >
          <DeleteMovieModalContent />
        </ModalWindow>
      )}
    </div>
  );
};
