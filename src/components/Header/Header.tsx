import React from "react";

import './Header.scss';
import { Logo } from "../Logo";
import { AddMovieButton } from "../AddMovieButton";
import { SearchBox } from "../SearchBox";

export const Header = () => {
  return (
    <div className='container-div'>
      <div className='header-div'/>
      <div className='logo-div'>
        <Logo/>
      </div>
      <div className="header-span">find your movie</div>
      <AddMovieButton/>
      <SearchBox/>
    </div>
  )
}