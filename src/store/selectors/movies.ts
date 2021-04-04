import { createSelector } from "reselect";

import { RootState } from "../reducers";

const moviesSelector = (state: RootState) => state.moviesData.movies;

export const selectMovies = createSelector(moviesSelector, (movies) => ({
  movies,
}));
