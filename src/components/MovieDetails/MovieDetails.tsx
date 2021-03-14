import React from "react";
import { movies } from "../../assets/MockedData";

import "./MovieDetails.scss";

export const MovieDetails: React.FC = () => {
  return (
    <>
      <div className="movie-details">
        <div className="movie-details-image" />
        <div className="movie-details-info">
          <div className="movie-details-info-div">
            <div className="movie-details-info-title">{movies[0].title}</div>
            <div className="movie-details-info-rating">{movies[0].rating}</div>
          </div>
          <div className="movie-details-info-overview">Oscar winning movie</div>
          <div className="movie-details-info-wrapper">
            <div>{movies[0].year}</div>
            <div className="movie-details-info-duration">{movies[0].duration}</div>
          </div>
          <div className="movie-details-info-description">
            {movies[0].description}
          </div>
        </div>
      </div>
    </>
  );
};
