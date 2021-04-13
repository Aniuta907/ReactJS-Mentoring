import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import "./SearchBox.scss";
import { SearchBar } from "../SearchBar";
import { SearchButton } from "../SearchButton";

export const SearchBox: React.FC = () => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setSearchText(value);
  };

  const onClick = () => {
    searchText.length ? history.push(`/search/${searchText}`) : history.push('/');
  };
  
  return (
    <div className="search-box">
      <SearchBar value={searchText} onChange={onChange}/>
      <SearchButton onClick={onClick}/>
    </div>
  );
};
