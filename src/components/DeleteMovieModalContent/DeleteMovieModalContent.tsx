import React from "react";

import "./DeleteMovieModalContent.scss";

export class DeleteMovieModalContent extends React.Component {
  deleteMovieText = "Are you sure you want to delete this movie?";

  render(): React.ReactNode {
    return <p className="delete-movie-text">{this.deleteMovieText}</p>;
  }
}
