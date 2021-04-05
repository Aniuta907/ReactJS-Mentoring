import React from "react";

import "./MovieGenreSelect.scss";

interface MovieGenreSelectProps {
  name?: string;
  value?: Array<string>;
}

export const MovieGenreSelect: React.FC<MovieGenreSelectProps> = ({
  name,
  value,
}) => {
  return (
    <select className="movie-genre-select" name={name}>
      <option value="" style={{ display: "none" }}>
        {value}
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
