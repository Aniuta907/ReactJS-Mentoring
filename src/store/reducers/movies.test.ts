import { moviesReducer, initialState } from './movies'
import * as t from '../actionTypes/movies';

describe('movies reducer', () => {
  it('FETCH_MOVIES_SUCCESS', () => {
    const action = {
      type: t.FETCH_MOVIES_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      movies: action.payload.data,
    })
  })

  it('SET_EDIT_MOVIE', () => {
    const action = {
      type: t.SET_EDIT_MOVIE,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      editMovie: initialState.movies.find((movie) => movie.id === action.payload),
    })
  })

  it('EDIT_MOVIE_SUCCESS', () => {
    const action = {
      type: t.EDIT_MOVIE_SUCCESS,
      payload: {
        id: 1
      }
    }
    const newMovies = [...initialState.movies];
    newMovies[newMovies.findIndex((movie) => movie.id === action.payload.id)] = action.payload;
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      movies: newMovies,
    })
  })

  it('EDIT_MOVIE_FAILURE', () => {
    const action = {
      type: t.EDIT_MOVIE_FAILURE,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    })
  })

  it('SET_DELETE_MOVIE', () => {
    const action = {
      type: t.SET_DELETE_MOVIE,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      deleteMovie: initialState.movies.find((movie) => movie.id === action.payload),
    })
  })

  it('DELETE_MOVIE_SUCCESS', () => {
    const action = {
      type: t.DELETE_MOVIE_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      movies: initialState.movies.filter((movie) => movie.id !== action.payload),
    })
  })

  it('DELETE_MOVIE_FAILURE', () => {
    const action = {
      type: t.DELETE_MOVIE_FAILURE,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    })
  })

  it('ADD_MOVIE_SUCCESS', () => {
    const action = {
      type: t.ADD_MOVIE_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      movies: [...initialState.movies, action.payload],
    })
  })

  it('ADD_MOVIE_FAILURE', () => {
    const action = {
      type: t.ADD_MOVIE_FAILURE,
      payload: {
        data: [
          {
            id: 1,
            title: "foo"
          }
        ]
      }
    }
    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      error: action.payload,
    })
  })

  it('default case', () => {
    expect(moviesReducer(initialState, {})).toEqual({
      ...initialState
    })
  })
})