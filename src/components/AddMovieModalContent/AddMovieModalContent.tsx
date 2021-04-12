import React from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./AddMovieModalContent.scss";
import { addMovie, setAddMovie } from "../../store/actions/movies";
import { MovieGenreSelect } from "../MovieGenreSelect/MovieGenreSelect";

interface AddMovieModalContentProps {
  closeModal?: () => void;
}

export const AddMovieModalContent: React.FC<AddMovieModalContentProps> = ({closeModal}) => {
  const dispatchRedux = useDispatch();

  return (
    <Formik
      initialValues={{
        title: '',
        release_date: '',
        poster_path: '',
        genres: [],
        overview: '',
        runtime: ''
      }}

      onSubmit={(values) => {
        const movieToAdd = {
          ...values,
          runtime: Number(values.runtime),
          release_date: String(values.release_date)
        };
    
        dispatchRedux(setAddMovie(movieToAdd));
        dispatchRedux(addMovie(movieToAdd));
    
        closeModal();
      }}

      validationSchema={Yup.object({
        title: Yup.string()
          .min(1, 'Please enter title more than 1 character')
          .max(70, 'Please enter title less than 70 characters')
          .required('Please enter title'),
        release_date: Yup.string().required('Please enter release date'),
        poster_path: Yup.string().url().required('Please enter poster path'),
        genres: Yup.string().required('Please enter genre'),
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
