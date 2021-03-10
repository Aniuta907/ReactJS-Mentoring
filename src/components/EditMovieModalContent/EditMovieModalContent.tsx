import React from "react";

import "./EditMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";

export class EditMovieModalContent extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <label className="edit-movie-label">movie id</label>
        <label className="edit-movie-edit-id">MO3282OTH</label>

        <label className="edit-movie-label">title</label>
        <input className="edit-movie-input" placeholder="Title here" />

        <label className="edit-movie-label">release date</label>
        <input type="date" className="edit-movie-input" />

        <label className="edit-movie-label">movie url</label>
        <input className="edit-movie-input" placeholder="Movie URL here" />

        <label className="edit-movie-label">genre</label>

        <MovieGenreSelect />

        <label className="edit-movie-label">overview</label>
        <input className="edit-movie-input" placeholder="Overview here" />

        <label className="edit-movie-label">runtime</label>
        <input className="edit-movie-input" placeholder="Runtime here" />
      </>
    );
  }
}
