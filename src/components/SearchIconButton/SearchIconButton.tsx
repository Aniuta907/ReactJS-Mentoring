import React from "react";
import { Link } from "react-router-dom";

import "./SearchIconButton.scss";

export const SearchIconButton: React.FC = () => {
  return (
  <Link to="/">
    <button className="search-icon-button" />;
  </Link>
  )
};
