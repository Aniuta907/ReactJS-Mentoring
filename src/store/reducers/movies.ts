import {
  FETCH_MOVIES_SUCCESS,
  SET_EDIT_MOVIE,
  SET_DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAILURE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_FAILURE,
  UPDATE_MOVIE
} from '../actionTypes/movies';

const initialState = {
  movies: [],
  editMovie: null,
  deleteMovie: null,
  addMovie: null,
  error: null
};

export const moviesReducer = (state = initialState, action) => {
  let newMovies;
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.data,
      };
    case SET_EDIT_MOVIE:
      return {
        ...state,
        editMovie: state.movies.find((movie) => movie.id === action.payload),
      };
    case EDIT_MOVIE_SUCCESS:
      newMovies = [...state.movies];
      newMovies[newMovies.findIndex((movie) => movie.id === action.payload.id)] = action.payload;
      return {
        ...state,
        movies: newMovies,
      };
    case EDIT_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_DELETE_MOVIE:
      return {
        ...state,
        deleteMovie: state.movies.find((movie) => movie.id === action.payload),
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_MOVIE:
        let { field, value } = action.payload;
        let movieToUpdate = state[field];
        movieToUpdate = value;
        return {
          ...state,
          [field]: movieToUpdate,
        };
    default:
      return state;
  }
};