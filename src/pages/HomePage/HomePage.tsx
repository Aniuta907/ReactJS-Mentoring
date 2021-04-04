import React from "react";

import "./HomePage.scss";
import { FilterBar, Header } from "../../components";
import { Dropdown } from "../../components";
import { ResultCount } from "../../components";
import { MoviesList } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Header />
      <div className="wrapper-div">
        <FilterBar />
        <Dropdown />
      </div>
      <ResultCount year="39" />
      <MoviesList />
    </main>
  );
};
