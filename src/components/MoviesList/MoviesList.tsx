import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";
import { useAppSelector } from "../../store/reducers";
import { fetchMovies } from "../../store/actions/movies";
import { ResultCount } from "..";

export const MoviesList: React.FC = () => {
  const dispatch = useDispatch();
  const { query } = useParams<{ query: string }>();
  let { movies } = useAppSelector(state => state.moviesData);
  let isRedirectRequired = false;

  if (query && movies.length) {
    movies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
    isRedirectRequired = true;
  }

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    movies.length ?
    <>
      <ResultCount count={movies.length} />
      <div className="list-wrapper">
        {movies.map((movie: any) => (
          <MovieCard
            title={movie.title}
            genres={movie.genres}
            releaseDate={movie.release_date}
            posterPath={movie.poster_path}
            key={movie.id}
            id={movie.id}
          />
        ))}
      </div> 
    </> : (isRedirectRequired && <Redirect from={`/search/${query}`} to='/nomoviefound'/>)
  );
};
