import React from "react";

import "./HomePage.scss";
import { FilterBar } from "../../components";
import { Dropdown } from "../../components";
import { ResultCount } from "../../components";
import { MoviesList } from "../../components";

export const HomePage: React.FC = () => {
  return (
    <main>
      <div className="wrapper-div">
        <FilterBar />
        <Dropdown />
      </div>
      <ResultCount year="39" />
      <MoviesList />
    </main>
  );
};
