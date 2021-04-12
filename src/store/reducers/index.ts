import { combineReducers } from "redux";
import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
  moviesData: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
