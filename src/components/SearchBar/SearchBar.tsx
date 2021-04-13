import React from "react";

import "./SearchBar.scss";

interface SearchBarProps {
  value: string;
  onChange: (event) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => (
  <input
    type="text"
    className="search-bar"
    placeholder="What do you want to watch?"
    value={value}
    onChange={onChange}
  />
);
