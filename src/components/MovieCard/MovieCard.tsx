import React from "react";

import { DottedIcon } from "../DottedIcon";
import "./MovieCard.scss";
interface MovieCardProps {
  year: string;
  title: string;
  genre: string;
  onMovieClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  year,
  title,
  genre,
  onMovieClick,
}) => {
  return (
    <div className="movie">
      <div className="movie-dropdown">
        <DottedIcon />
      </div>
      <div className="movie-image" onClick={onMovieClick} />
      <div className="movie-footer">
        <div className="movie-wrapper">
          <span className="movie-title movie-text">{title}</span>
          <span className="movie-genre movie-text">{genre}</span>
        </div>
        <div className="movie-wrapper-year">
          <span className="movie-year movie-text">{year}</span>
        </div>
      </div>
    </div>
  );
};
