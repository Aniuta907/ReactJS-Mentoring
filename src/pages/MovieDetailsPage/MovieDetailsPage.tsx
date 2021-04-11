import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./MovieDetailsPage.scss";
import { Logo } from "../../components/Logo";
import { MovieDetails } from "../../components/MovieDetails";
import { SearchIconButton } from "../../components/SearchIconButton";
import { Dropdown, FilterBar, MoviesList, ResultCount } from "../../components";
import { useSelector } from "react-redux";
import { selectMovies } from "../../store/selectors";

export const MovieDetailsPage: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(0);
  const { urlID } = useParams<{ urlID: string }>();
  
  let { movies } = useSelector(selectMovies);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const current = movies.find(({ id }) => id === +urlID);
    setCurrentMovie(current);
  }, [urlID, movies]);

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
      <MoviesList />
    </main>
  );
};
