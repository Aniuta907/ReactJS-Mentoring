import React from "react";

import { DottedIcon } from "../DottedIcon";
import "./MovieCard.scss";
interface MovieCardProps {
  releaseDate: string;
  title: string;
  genres: Array<string>;
  posterPath: string;
  id: string;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  releaseDate,
  title,
  genres,
  posterPath,
  id,
  onClick,
}) => {
  return (
    <div className="movie">
      <div className="movie-dropdown">
        <DottedIcon id={id} />
      </div>
      <img className="movie-image" src={posterPath} onClick={onClick} />
      <div className="movie-footer">
        <div className="movie-wrapper">
          <span className="movie-title movie-text">{title}</span>
          <span className="movie-genre movie-text">
            {genres.length === 2 ? genres.join(" & ") : genres.join(", ")}
          </span>
        </div>
        <div className="movie-wrapper-year">
          <span className="movie-year movie-text">{releaseDate.split("-")[0]}</span>
        </div>
      </div>
    </div>
  );
};
