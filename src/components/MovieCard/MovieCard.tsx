import React from "react";
import { Link } from 'react-router-dom';

import { DottedIcon } from "../DottedIcon";
import "./MovieCard.scss";
import { MovieCardInterface } from "../../interfaces/MovieCardInterface";

interface MovieCardProps {
  movie: MovieCardInterface;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { release_date, title, genres, poster_path, id } = movie;
  return (
    <div className="movie">
      <div className="movie-dropdown">
        <DottedIcon id={id} />
      </div>
      <Link to={`/movies/${id}`}>
        <img className="movie-image" src={poster_path} />
      </Link>
      <div className="movie-footer">
        <div className="movie-wrapper">
          <span className="movie-title movie-text">{title}</span>
          <span className="movie-genre movie-text">
            {genres.length === 2 ? genres.join(" & ") : genres.join(", ")}
          </span>
        </div>
        <div className="movie-wrapper-year">
          <span className="movie-year movie-text">{release_date.split("-")[0]}</span>
        </div>
      </div>
    </div>
  );
};
