import React from "react";

import "./MovieGenreSelect.scss";

export const MovieGenreSelect: React.FC = () => {
  return (
    <select className="movie-genre-select">
      <option value="" style={{ display: "none" }}>
        Select Genre
      </option>
      <option className="movie-genre-option" value="name">
        Crime
      </option>
      <option className="movie-genre-option" value="name">
        Documentary
      </option>
      <option className="movie-genre-option" value="name">
        Horror
      </option>
      <option className="movie-genre-option" value="name">
        Comedy
      </option>
    </select>
  );
};
