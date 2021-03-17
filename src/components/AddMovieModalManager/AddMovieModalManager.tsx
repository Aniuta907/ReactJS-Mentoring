import React, { useState } from "react";

import { ModalWindow } from "../ModalWindow";
import { AddMovieModalContent } from "../AddMovieModalContent";
import "./AddMovieModalManager.scss";

export const AddMovieModalManager: React.FC = () => {
  const [IsModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    setModalVisibility(true);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <>
      <button className="add-movie-button" onClick={openModal}>
        + add movie
      </button>
      {IsModalVisible && (
        <ModalWindow
          IsModalVisible={IsModalVisible}
          modalTitle="ADD MOVIE"
          leftButton="RESET"
          rightButton="SUBMIT"
          closeModal={closeModal}
        >
          <AddMovieModalContent />
        </ModalWindow>
      )}
    </>
  );
};
