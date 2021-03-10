import React from "react";

import "./DeleteMovieModalContent.scss";

const deleteMovieText = "Are you sure you want to delete this movie?";
export class DeleteMovieModalContent extends React.Component {
  render(): React.ReactNode {
    return <p className="delete-movie-text">{deleteMovieText}</p>;
  }
}
