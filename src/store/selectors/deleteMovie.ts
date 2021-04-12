import { createSelector } from "reselect";

import { RootState } from "../reducers";

const deleteMovieSelector = (state: RootState) => {
  return state.moviesData.deleteMovie;
};

export const selectDeleteMovie = createSelector(
  deleteMovieSelector,
  (movieToDelete) => ({
    movieToDelete,
  })
);
