import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ModalWindow } from "../ModalWindow";
import { DottedIconImage } from "./DottedIconImage";
import { EditMovieModalContent } from "../EditMovieModalContent";
import { DeleteMovieModalContent } from "../DeleteMovieModalContent";
import "./DottedIcon.scss";
import useClickOutside from "../../hooks/useClickOutside";
import {
  deleteMovie,
  setDeleteMovie,
  setEditMovie,
} from "../../store/actions/movies";
import { useAppSelector } from "../../store/reducers";

interface DottedIconProps {
  id: string;
}

export const DottedIcon: React.FC<DottedIconProps> = ({ id }) => {
  const [IsDropdownVisible, setDropdownVisibility] = useState(false);
  const [IsEditModalVisible, setEditModalVisibility] = useState(false);
  const [IsDeleteModalVisible, setDeleteModalVisibility] = useState(false);
  const modalRef = React.createRef<HTMLDivElement>();
  const dispatch = useDispatch();
  const movieToDelete = useAppSelector(state => state.moviesData.deleteMovie);

  const openDropdown = (): void => {
    setDropdownVisibility(true);
  };

  const closeDropdown = (): void => {
    setDropdownVisibility(false);
  };

  const openEditModal = (movieID: string): void => {
    dispatch(setEditMovie(movieID));
    setEditModalVisibility(true);
    closeDropdown();
  };

  const closeEditModal = (): void => {
    setEditModalVisibility(false);
  };

  const openDeleteModal = (movieID: string): void => {
    dispatch(setDeleteMovie(movieID));
    setDeleteModalVisibility(true);
    closeDropdown();
  };

  const closeDeleteModal = (): void => {
    setDeleteModalVisibility(false);
  };

  useClickOutside(modalRef, IsDropdownVisible, closeDropdown);

  const handleEditSubmit = () => {
    closeEditModal();
  };

  const handleDeleteSubmit = () => {
    dispatch(deleteMovie(movieToDelete.id));
  };

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
          <div className="dotted-icon-option" onClick={() => openEditModal(id)}>
            Edit
          </div>
          <div className="dotted-icon-option" onClick={() => openDeleteModal(id)}>
            Delete
          </div>
        </div>
      )}
      {IsEditModalVisible && (
        <ModalWindow
          IsModalVisible={IsEditModalVisible}
          modalTitle="EDIT MOVIE"
          closeModal={closeEditModal}
        >
          <EditMovieModalContent handleEditSubmit={handleEditSubmit}/>
        </ModalWindow>
      )}
      {IsDeleteModalVisible && (
        <ModalWindow
          IsModalVisible={IsDeleteModalVisible}
          modalTitle="DELETE MOVIE"
          closeModal={closeDeleteModal}
        >
          <DeleteMovieModalContent handleDeleteSubmit={handleDeleteSubmit}/>
        </ModalWindow>
      )}
    </div>
  );
};
