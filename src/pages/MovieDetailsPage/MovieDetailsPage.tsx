import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./MovieDetailsPage.scss";
import { Logo } from "../../components/Logo";
import { MovieDetails } from "../../components/MovieDetails";
import { SearchIconButton } from "../../components/SearchIconButton";
import { Dropdown, FilterBar, MoviesList } from "../../components";
import { useAppSelector } from "../../store/reducers";

export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let { movies } = useAppSelector(state => state.moviesData);
  const [currentMovie, setCurrentMovie] = useState({
    id: '',
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: '',
    vote_average: ''
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const current = movies.find((movie) => {
      const { id: moviesID } = movie;
      return moviesID === +id;
    });
    setCurrentMovie(current);
  }, [id, movies]);

  return (
    <main>
      <div className="movie-details-page">
        <div className="movie-details-page-background" />
        <div className="logo-div">
          <Logo />
        </div>
        <SearchIconButton />
        <MovieDetails movie={currentMovie}/>
      </div>
      <div className="wrapper-div">
        <FilterBar />
        <Dropdown />
      </div>
      <MoviesList />
    </main>
  );
};
