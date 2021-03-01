import React from "react";

import "./FilterBar.scss";

export const FilterBar: React.FC = () => {
  return (
    <div className="filter-div">
      <nav>
        <ul>
          <li>all</li>
          <li>documentary</li>
          <li>comedy</li>
          <li>horror</li>
          <li>crime</li>
        </ul>
      </nav>
    </div>
  );
};
