import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./EditMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";
import { UPDATE_MOVIE } from "../../store/actionTypes/movies";
import { RootState } from "../../store/reducers";
import { editMovie, setEditMovie } from "../../store/actions/movies";

interface EditMovieModalContentProps {
  handleEditSubmit?: () => void;
}

export const EditMovieModalContent: React.FC<EditMovieModalContentProps> = ({handleEditSubmit}) => {
  const movieToEdit = useSelector((state: RootState) => state.moviesData.editMovie);
  const { id, title, runtime, overview, poster_path, release_date, genres } = movieToEdit;

  const initialState = {
    id,
    title,
    poster_path,
    runtime,
    overview,
    release_date,
    genres,
  };

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

  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchRedux = useDispatch();

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

  const handleEditSubmitForm = () => {
    const movieEdit = {
      ...state,
      runtime: Number(state.runtime),
    };
    dispatchRedux(setEditMovie(movieEdit));
    dispatchRedux(editMovie(movieEdit));
    handleEditSubmit();
  };

  return (
  <>  
    <>
      <label className="edit-movie-label">movie id</label>
      <input className="edit-movie-input" name="id" onChange={handleChange} value={state.id}/>

      <label className="edit-movie-label">title</label>
      <input
        onChange={handleChange}
        value={state.title}
        name="title"
        className="edit-movie-input"
        placeholder="Title here"
      />

      <label className="edit-movie-label">release date</label>
      <input value={state.release_date} name="release_date" type="date" onChange={handleChange} className="edit-movie-input" />

      <label className="edit-movie-label">movie url</label>
      <input
        value={state.poster_path}
        name="poster_path"
        className="edit-movie-input"
        onChange={handleChange}
        placeholder="Movie URL here"
      />

      <label className="edit-movie-label">genre</label>

      <MovieGenreSelect onChange={handleChange} value={state.genres}/>

      <label className="edit-movie-label">overview</label>
      <input
        className="edit-movie-input"
        onChange={handleChange}
        placeholder="Overview here"
        value={state.overview}
        name="overview"
      />

      <label className="edit-movie-label">runtime</label>
      <input
        className="edit-movie-input"
        onChange={handleChange}
        placeholder="Runtime here"
        value={state.runtime}
        name="runtime"
      />  
    </>
    
    <div className="edit-movie-footer">
      <button className="edit-movie-left-button">RESET</button>
      <button className="edit-movie-right-button" onClick={handleEditSubmitForm}>
        CONFIRM
       </button>
    </div>
  </>
  );
};
