import React from "react";

import "./AddMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";

export class AddMovieModalContent extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <label className="add-movie-label">title</label>
        <input className="add-movie-input" placeholder="Title here" />

        <label className="add-movie-label">release date</label>
        <input type="date" className="add-movie-input" />

        <label className="add-movie-label">movie url</label>
        <input className="add-movie-input" placeholder="Movie URL here" />

        <label className="add-movie-label">genre</label>

        <MovieGenreSelect />

        <label className="add-movie-label">overview</label>
        <input className="add-movie-input" placeholder="Overview here" />

        <label className="add-movie-label">runtime</label>
        <input className="add-movie-input" placeholder="Runtime here" />
      </>
    );
  }
}
