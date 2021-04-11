import React from "react";
import { Link } from 'react-router-dom';

import { DottedIcon } from "../DottedIcon";
import "./MovieCard.scss";
interface MovieCardProps {
  releaseDate: string;
  title: string;
  genres: Array<string>;
  posterPath: string;
  id: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  releaseDate,
  title,
  genres,
  posterPath,
  id,
}) => {
  return (
    <div className="movie">
      <div className="movie-dropdown">
        <DottedIcon id={id} />
      </div>
      <Link to={`/movie/${id}`}>
        <img className="movie-image" src={posterPath} />
      </Link>
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
