import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
  moviesData: moviesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
