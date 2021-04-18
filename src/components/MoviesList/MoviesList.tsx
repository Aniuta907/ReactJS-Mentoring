import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";
import { useAppSelector } from "../../store/reducers";
import { fetchMovies } from "../../store/actions/movies";
import { ResultCount } from "..";

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  let { movies } = useAppSelector(state => state.moviesData);
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    movies.length ? //не уверена насчет этого условия
    <>
      <ResultCount count={movies.length} />
      <div className="list-wrapper">
        {movies.map((movie: any) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
    : <Redirect to='/nomoviefound'/>
  );
};
