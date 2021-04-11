import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  SET_EDIT_MOVIE,
  SET_DELETE_MOVIE,
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  SET_ADD_MOVIE,
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAILURE,
} from "../actionTypes/movies";
import { FETCH_MOVIES_API_URL } from "../../consts";
import { AppDispatch } from "..";

export const fetchMovies = () => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_MOVIES });
    try {
      const response = await fetch(FETCH_MOVIES_API_URL);
      const data = await response.json();
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: error,
      });
    }
  };
};

export const setEditMovie = (movie) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SET_EDIT_MOVIE,
      payload: movie,
    });
  };
};

export const editMovie = (movie) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: EDIT_MOVIE });
    try {
      const response = await fetch(FETCH_MOVIES_API_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        const result = await response.json();
        dispatch({
          type: EDIT_MOVIE_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: EDIT_MOVIE_FAILURE,
          payload: response.status,
        });
      }
    } catch (error) {
      dispatch({
        type: EDIT_MOVIE_FAILURE,
        payload: error,
      });
    }
  };
};

export const setDeleteMovie = (movie) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SET_DELETE_MOVIE,
      payload: movie,
    });
  };
};

export const deleteMovie = (movieId) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: DELETE_MOVIE });
    try {
      await fetch(FETCH_MOVIES_API_URL + String(movieId), {
        method: "DELETE",
      });
      dispatch({
        type: DELETE_MOVIE_SUCCESS,
        payload: movieId,
      });
    } catch (err) {
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        payload: err,
      });
    }
  };
};

export const setAddMovie = (movie) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SET_ADD_MOVIE,
      payload: movie,
    });
  };
};

export const addMovie = (movie) => {
  return async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_MOVIE });
    try {
      const response = await fetch(FETCH_MOVIES_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        const result = await response.json();

        dispatch({
          type: ADD_MOVIE_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: ADD_MOVIE_FAILURE,
          payload: response.status,
        });
      }
    } catch (error) {
      dispatch({
        type: ADD_MOVIE_FAILURE,
        payload: error,
      });
    }
  };
};
export interface ActionType<T, P> {
  readonly type: T;
  readonly payload?: P;
}