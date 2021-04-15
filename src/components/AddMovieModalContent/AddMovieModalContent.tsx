import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import "./AddMovieModalContent.scss";
import { addMovie } from "../../store/actions/movies";
import { MovieGenreSelect } from "../MovieGenreSelect/MovieGenreSelect";
import MovieModalContentSchema from "../../validationSchemas/MovieModalContentSchema";

interface AddMovieModalContentProps {
  closeModal?: () => void;
}

export const AddMovieModalContent: React.FC<AddMovieModalContentProps> = ({closeModal}) => {
  const dispatchRedux = useDispatch();

  const initialValues = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: ''
  }

  const onSubmit = (values) => {
    const movieToAdd = {
      ...values,
      runtime: Number(values.runtime),
      release_date: String(values.release_date)
    };

    dispatchRedux(addMovie(movieToAdd));

    closeModal();
  }

  return (
    <Formik
      initialValues = {initialValues}

      onSubmit={onSubmit}

      validationSchema={MovieModalContentSchema}
    >
      <Form>
      <label className="add-movie-label">title</label>
      <Field
        name="title"
        className="add-movie-input"
        placeholder="Title here"
        type="text"
      />

      <label className="add-movie-label">release date</label>
      <Field
        name="release_date"
        type="date"
        className="add-movie-input"
      />

      <label className="add-movie-label">movie url</label>
      <Field
        name="poster_path"
        className="add-movie-input"
        placeholder="Movie URL here"
        type="url"
      />

      <label className="add-movie-label">genre</label>

      <Field className="add-movie-select" name="genres" as={MovieGenreSelect}/>

      <label className="add-movie-label">overview</label>
      <Field
        name="overview"
        className="add-movie-input"
        placeholder="Overview here"
        type="text"
      />

      <label className="add-movie-label">runtime</label>
      <Field name="runtime" className="add-movie-input" placeholder="Runtime here" type="text"/>
      
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
