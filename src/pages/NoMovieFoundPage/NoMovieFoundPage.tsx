import React from "react";

import "./NoMovieFoundPage.scss";
import { FilterBar, Header } from "../../components";
import { Dropdown } from "../../components";

export const NoMovieFoundPage: React.FC = () => {
  return (
    <div className="no-movie-found">
      <Header/>
      <div className="wrapper-div">
        <FilterBar />
        <Dropdown />
      </div>
      <div className="no-movie-found-wrapper">
        <h1 className="no-movie-found-h1">no movie found</h1>
      </div>
    </div>
  );
};
