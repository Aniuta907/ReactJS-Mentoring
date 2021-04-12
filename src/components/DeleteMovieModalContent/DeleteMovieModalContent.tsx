import React from "react";

import "./DeleteMovieModalContent.scss";

interface DeleteMovieModalContentProps {
  handleDeleteSubmit?: () => void;
}

export const DeleteMovieModalContent: React.FC<DeleteMovieModalContentProps> = ({handleDeleteSubmit}) => (
  <>
    <p className="delete-movie-text">Are you sure you want to delete this movie?</p>
    <div className="delete-movie-footer">
      <button className="delete-movie-right-button" onClick={handleDeleteSubmit}>
        CONFIRM
      </button>
     </div> 
  </>
);
