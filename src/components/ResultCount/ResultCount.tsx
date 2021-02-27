import React from "react";

import './ResultCount.scss';

interface ResultCountProps {
  year: string;
}

export const ResultCount: React.FC<ResultCountProps> = (props) => {
  const { year } = props;
  return (
    <div className="count-div">
      <span className="span-count">{ year }</span>
      <span className="span-movies">movies found</span>
    </div>
  )
}