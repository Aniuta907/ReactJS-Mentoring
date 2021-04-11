import React from "react";
import { Link } from 'react-router-dom';

import "./ErrorPage.scss";
import { Logo } from "../../components/Logo";

export const ErrorPage: React.FC = () => {
  return (
    <>
      <div className="logo-div">
        <Logo />
      </div>
      <div className="error-page">
        <h2 className="error-page-h2">page not found</h2>
        <h1 className="error-page-glitch">404</h1>
        <Link to="/">
          <button className="error-page-button">go back to home</button>
        </Link>
      </div>
    </>
  );
};
