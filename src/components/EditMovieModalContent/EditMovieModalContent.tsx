import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import "./EditMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";
import { useAppSelector } from "../../store/reducers";
import { editMovie } from "../../store/actions/movies";
import MovieModalContentSchema from "../../validationSchemas/MovieModalContentSchema";

interface EditMovieModalContentProps {
  handleEditSubmit?: () => void;
}

export const EditMovieModalContent: React.FC<EditMovieModalContentProps> = ({handleEditSubmit}) => {
  const movieToEdit = useAppSelector(state => state.moviesData.editMovie);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    const movieEdit = {
      ...values,
      runtime: Number(values.runtime),
      id: Number(values.id)
    };

    dispatch(editMovie(movieEdit));
    handleEditSubmit();
  }

  return (
    <Formik
      initialValues={movieToEdit}

      onSubmit={onSubmit}

      validationSchema={MovieModalContentSchema}
    >
    <Form>
      <label className="edit-movie-label">movie id</label>
      <Field className="edit-movie-input" name="id" type="text"/>

      <label className="edit-movie-label">title</label>
      <Field
        name="title"
        type="text"
        className="edit-movie-input"
        placeholder="Title here"
      />

      <label className="edit-movie-label">release date</label>
      <Field name="release_date" type="date" className="edit-movie-input" />

      <label className="edit-movie-label">movie url</label>
      <Field
        name="poster_path"
        type="url"
        className="edit-movie-input"
        placeholder="Movie URL here"
      />

      <label className="edit-movie-label">genre</label>

      <Field className="add-movie-select" name="genres" as={MovieGenreSelect}/>

      <label className="edit-movie-label">overview</label>
      <Field
        className="edit-movie-input"
        type="text"
        placeholder="Overview here"
        name="overview"
      />

      <label className="edit-movie-label">runtime</label>
      <Field
        className="edit-movie-input"
        placeholder="Runtime here"
        name="runtime"
        type="text"
      />  
    
      <div className="edit-movie-footer">
        <button className="edit-movie-left-button" type="reset">RESET</button>
        <button className="edit-movie-right-button" type="submit">
          CONFIRM
        </button>
      </div>

    </Form>
  </Formik>
  );
};
