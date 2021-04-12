import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";
import { useAppSelector } from "../../store/reducers";
import { fetchMovies } from "../../store/actions/movies";

interface MoviesListProps {
  getCurrentMovie?: (movieID, movies) => void;
}

export const MoviesList: React.FC<MoviesListProps> = ({getCurrentMovie}) => {
  const dispatch = useDispatch();
  const { movies } = useAppSelector(state => state.moviesData);

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
          onClick={()=>getCurrentMovie(movie.id, movies)}
        />
      ))}
    </div>
  );
};
