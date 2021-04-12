import React from "react";

import "./MovieGenreSelect.scss";

interface MovieGenreSelectProps {
  name?: string;
  value?: Array<string>;
  onChange: (event) => void;
}

export const MovieGenreSelect: React.FC<MovieGenreSelectProps> = ({
  name,
  value,
  onChange,
}) => {
  return (
    <select className="movie-genre-select" onChange={onChange} name={name}>
      <option value="" style={{ display: "none" }}>
      {value.length === 2 ? value.join(" & ") : value.join(", ")}
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
