import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./HomePage.scss";
import { FilterBar, Header } from "../../components";
import { Dropdown } from "../../components";
import { ResultCount } from "../../components";
import { MoviesList } from "../../components";
import { selectMovies } from "../../store/selectors";

export const HomePage: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(181808);
  
  let { movies } = useSelector(selectMovies);
  
  const getCurrentMovie = (movieID) => {
    const current = movies.find(({ id }) => id === movieID);
    setCurrentMovie(current);
  };
  
  return (
    <main>
      <Header />
      <div className="wrapper-div">
        <FilterBar />
        <Dropdown />
      </div>
      <ResultCount year="39" />
      <MoviesList getCurrentMovie={getCurrentMovie}/>
    </main>
  );
};
