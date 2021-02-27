import React from "react";

import './MoviesList.scss';
import { MovieCard } from "../MovieCard";

export const MoviesList = () => {
	const movies = [
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		},
		{
			year: "2004",
			title: "Pulp fiction",
			genre: "Action & Adventure",
		}
	];

  	return (
  	<div className='list-wrapper'>
			{movies.map((movie, index) => (
				<MovieCard title={movie.title} genre={movie.genre} year={movie.year} key={index}/>
			))}
	</div>
  )
}