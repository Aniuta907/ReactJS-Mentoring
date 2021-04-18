import React from "react";

import "./SearchButton.scss";

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton: React.FC<SearchButtonProps> = ({onClick}) => (
  <button className="search-button" onClick={onClick}>search</button>
);
