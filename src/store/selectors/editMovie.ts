import { createSelector } from "reselect";

import { RootState } from "../reducers";

const editMovieSelector = (state: RootState) => state.moviesData.editMovie;

export const selectEditMovie = createSelector(editMovieSelector, (movieToEdit) => ({
  movieToEdit,
}));
