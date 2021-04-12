import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";
import { RootState } from "../../store/reducers";
import { fetchMovies } from "../../store/actions/movies";

interface MoviesListProps {
  getCurrentMovie?: (movieID) => void;
}

export const MoviesList: React.FC<MoviesListProps> = ({getCurrentMovie}) => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.moviesData.movies);

  // const onMovieClick = useCallback(() => {
  //   console.log("movie");
  // }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="list-wrapper">
      {movies.map((movie: any) => (
        <MovieCard
          title={movie.title}
          genres={movie.genres}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
          key={movie.id}
          id={movie.id}
          onClick={()=>getCurrentMovie(movie.id)}
        />
      ))}
    </div>
  );
};
