import React from "react";

import "./SearchBar.scss";

export const SearchBar: React.FC = () => (
  <input
    type="text"
    className="search-bar"
    placeholder="What do you want to watch?"
  />
);
