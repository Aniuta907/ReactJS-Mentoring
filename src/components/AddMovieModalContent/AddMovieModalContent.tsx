import React, { useReducer } from "react";
import { useDispatch } from "react-redux";

import "./AddMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";
import { addMovie, setAddMovie } from "../../store/actions/movies";
import { UPDATE_MOVIE } from "../../store/actionTypes/movies";

interface AddMovieModalContentProps {
  closeModal?: () => void;
}

export const AddMovieModalContent: React.FC<AddMovieModalContentProps> = ({closeModal}) => {
  const dispatchRedux = useDispatch();

  const reducer = (state, action) => {
    const { field, value } = action.payload;
    let elementToUpdate = state[field];
    switch (action.type) {
      case UPDATE_MOVIE:
        elementToUpdate = value;
        return {
          ...state,
          [field]: elementToUpdate,
        };

      default:
        break;
    }
  };

  const initialState = {
    title: "",
    poster_path: "",
    overview: "",
    runtime: "",
    genres: "",
    release_date: undefined,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_MOVIE,
      payload: {
        field: event.target.name,
        value: event.target.value,
      },
    });
  };

  const handleAddSubmitForm = () => {
    const movieToAdd = {
      ...state,
      genres: state.genres.split(","),
      runtime: Number(state.runtime),
    };

    dispatchRedux(setAddMovie(movieToAdd));
    dispatchRedux(addMovie(movieToAdd));

    closeModal();
  };

  return (
    <>
      <>
      <label className="add-movie-label">title</label>
      <input
        name="title"
        onChange={handleChange}
        className="add-movie-input"
        placeholder="Title here"
      />

      <label className="add-movie-label">release date</label>
      <input
        name="release_date"
        onChange={handleChange}
        type="date"
        className="add-movie-input"
      />

      <label className="add-movie-label">movie url</label>
      <input
        name="poster_path"
        onChange={handleChange}
        className="add-movie-input"
        placeholder="Movie URL here"
      />

      <label className="add-movie-label">genre</label>

      <MovieGenreSelect onChange={handleChange} name="genres" value={[]}/>

      <label className="add-movie-label">overview</label>
      <input
        name="overview"
        onChange={handleChange}
        className="add-movie-input"
        placeholder="Overview here"
      />

      <label className="add-movie-label">runtime</label>
      <input name="runtime" onChange={handleChange} className="add-movie-input" placeholder="Runtime here" />
    </>

      <div className="edit-movie-footer">
        <button className="edit-movie-left-button">RESET</button>
        <button className="edit-movie-right-button" onClick={handleAddSubmitForm}>
          CONFIRM
        </button>
      </div>
    </>
  );
};
