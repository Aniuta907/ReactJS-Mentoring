import React, { useCallback } from "react";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";
import { movies } from "../../assets/MockedData";

export const MoviesList: React.FC = () => {
  const onMovieClick = useCallback(() => {
    console.log("movie");
  }, []);

  return (
    <div className="list-wrapper">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          key={movie.id}
          onMovieClick={onMovieClick}
        />
      ))}
    </div>
  );
};
