import React from "react";

import "./Dropdown.scss";

export const Dropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <label htmlFor="results-sort" className="dropdown_label">
        Sort by
      </label>
      <select id="results-sort" className="dropdown_select">
        <option className="dropdown_option" value="release date">
          release date
        </option>
        <option className="dropdown_option" value="popularity">
          popularity
        </option>
        <option className="dropdown_option" value="name">
          name
        </option>
      </select>
    </div>
  );
};
