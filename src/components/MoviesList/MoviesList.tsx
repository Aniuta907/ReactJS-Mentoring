import React from "react";

import "./MoviesList.scss";
import { MovieCard } from "../MovieCard";

const movies = [
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "0",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "1",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "2",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "3",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "4",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "5",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "6",
  },
  {
    year: "2004",
    title: "Pulp fiction",
    genre: "Action & Adventure",
    id: "7",
  },
];

export const MoviesList: React.FC = () => {
  return (
    <div className="list-wrapper">
      {movies.map((movie) => (
        <MovieCard
          title={movie.title}
          genre={movie.genre}
          year={movie.year}
          key={movie.id}
        />
      ))}
    </div>
  );
};
