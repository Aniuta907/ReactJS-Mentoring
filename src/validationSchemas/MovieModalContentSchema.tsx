import * as Yup from "yup";

const MovieModalContentSchema = Yup.object({
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
});

export default MovieModalContentSchema;
