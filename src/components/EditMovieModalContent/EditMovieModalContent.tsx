import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./EditMovieModalContent.scss";
import { MovieGenreSelect } from "../MovieGenreSelect";
import { useAppSelector } from "../../store/reducers";
import { editMovie, setEditMovie } from "../../store/actions/movies";

interface EditMovieModalContentProps {
  handleEditSubmit?: () => void;
}

export const EditMovieModalContent: React.FC<EditMovieModalContentProps> = ({handleEditSubmit}) => {
  const movieToEdit = useAppSelector(state => state.moviesData.editMovie);
  const { id, title, runtime, overview, poster_path, release_date, genres } = movieToEdit;

  const dispatchRedux = useDispatch();

  return (
    <Formik
      initialValues={{
        id,
        title,
        poster_path,
        runtime,
        overview,
        release_date,
        genres,
      }}

      onSubmit={(values) => {
        const movieEdit = {
          ...values,
          runtime: Number(values.runtime),
          id: Number(values.id)
        };
        dispatchRedux(setEditMovie(movieEdit.id));
        dispatchRedux(editMovie(movieEdit));
        handleEditSubmit();
      }}

      validationSchema={Yup.object({
        id: Yup.number()
          .integer('id should be an integer')
          .required('Please enter id'),
        title: Yup.string()
          .min(1, 'Please enter title more than 1 character')
          .max(70, 'Please enter title less than 70 characters')
          .required('Please enter title'),
        release_date: Yup.date().required('Please enter release date'),
        poster_path: Yup.string().url().required('Please enter poster path'),
        genres: Yup.array().required('Please enter genre'),
        overview: Yup.string()
          .min(1, 'Please enter overview more than 1 character')
          .max(700, 'Please enter overview less than 700 characters')
          .required('Please enter overview'),
        runtime: Yup.number()
          .integer('Runtime should be an integer')
          .min(1, 'Please enter runtime more than 1 minutes')
          .required('Please enter runtime'),
      })}
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
