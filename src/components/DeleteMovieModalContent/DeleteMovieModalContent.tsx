import React from "react";

import "./DeleteMovieModalContent.scss";
export class DeleteMovieModalContent extends React.Component {
  render(): React.ReactNode {
    return <p className="delete-movie-text">Are you sure you want to delete this movie?</p>;
  }
}
