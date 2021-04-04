import React from "react";

import "./MovieDetails.scss";

interface MovieDetailsProps {
  movie: any;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({movie}) => (
  <>
    <div className="movie-details">
      <img src={movie.poster_path} className="movie-details-image" />
      <div className="movie-details-info">
        <div className="movie-details-info-div">
          <div className="movie-details-info-title">{movie.title}</div>
          <div className="movie-details-info-rating">{movie.vote_average}</div>
        </div>
        <div className="movie-details-info-overview">Oscar winning movie</div>
        <div className="movie-details-info-wrapper">
          <div>{movie.release_date?.split('-')[0]}</div>
          <div className="movie-details-info-duration">{movie.runtime} min</div>
        </div>
        <div className="movie-details-info-description">{movie.overview}</div>
      </div>
    </div>
  </>
);
