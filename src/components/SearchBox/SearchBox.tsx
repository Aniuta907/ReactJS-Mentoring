import React from "react";

import "./SearchBox.scss";
import { SearchBar } from "../SearchBar";
import { SearchButton } from "../SearchButton";

export const SearchBox: React.FC = () => {
  return (
    <div className="search-box">
      <SearchBar />
      <SearchButton />
    </div>
  );
};
