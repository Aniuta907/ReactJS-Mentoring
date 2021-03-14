import React from "react";

import "./MovieDetailsPage.scss";
import { Logo } from "../../components/Logo";
import { MovieDetails } from "../../components/MovieDetails";
import { SearchIconButton } from "../../components/SearchIconButton";

export const MovieDetailsPage: React.FC = () => {
  return (
    <div className="movie-details-page">
      <div className="movie-details-page-background" />
      <div className="logo-div">
        <Logo />
      </div>
      <SearchIconButton />
      <MovieDetails />
    </div>
  );
};
