import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

import "./SearchBox.scss";
import { SearchBar } from "../SearchBar";
import { SearchButton } from "../SearchButton";
import { fetchMovies } from "../../store/actions/movies";

export const SearchBox: React.FC = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const onChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setSearchText(value);
  };

  const onClick = () => {
    searchText.length ? history.push(`/movies?search=${searchText}&searchBy=title`) : history.push('/movies');
    dispatch(fetchMovies(searchText));
  };
  
  return (
    <div className="search-box">
      <SearchBar value={searchText} onChange={onChange}/>
      <SearchButton onClick={onClick}/>
    </div>
  );
};
