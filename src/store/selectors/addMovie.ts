import { createSelector } from "reselect";

import { RootState } from "../reducers";

const addMovieSelector = (state: RootState) => state.moviesData.addMovie;

export const selectAddMovie = createSelector(addMovieSelector, (movieToAdd) => ({
  movieToAdd,
}));
