import React from "react";

import "./ResultCount.scss";

interface ResultCountProps {
  count: string;
}

export const ResultCount: React.FC<ResultCountProps> = ({ count }) => {
  return (
    <div className="count-div">
      <span className="span-count">{count}</span>
      <span className="span-movies">movies found</span>
    </div>
  );
};
