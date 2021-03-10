import React from "react";

import "./Header.scss";
import { Logo } from "../Logo";
import { AddMovieModalManager } from "../AddMovieModalManager";
import { SearchBox } from "../SearchBox";

export const Header: React.FC = () => {
  return (
    <div className="container-div">
      <div className="header-div" />
      <div className="logo-div">
        <Logo />
      </div>
      <div className="header-span">find your movie</div>
      <SearchBox />
      <AddMovieModalManager />
    </div>
  );
};
