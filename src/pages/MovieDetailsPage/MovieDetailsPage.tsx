import React, { useState } from "react";

import "./MovieDetailsPage.scss";
import { Logo } from "../../components/Logo";
import { MovieDetails } from "../../components/MovieDetails";
import { SearchIconButton } from "../../components/SearchIconButton";
import { Dropdown, FilterBar, MoviesList, ResultCount } from "../../components";

export const MovieDetailsPage: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(181808);
  
  const getCurrentMovie = (movieID, movies) => {
    const current = movies.find(({ id }) => id === movieID);
    setCurrentMovie(current);
  };

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
      <ResultCount year="39" />
      <MoviesList getCurrentMovie={getCurrentMovie}/>
    </main>
  );
};
