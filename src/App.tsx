import React from "react";
import { Switch, Route } from 'react-router-dom';

import "./styles/App.scss";
import { Footer } from "./components";
import { ErrorBoundary } from "./components";
import { Page404, HomePage, MovieDetailsPage, NoMovieFoundPage } from "./pages";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <Route path="/movies/:id" component={MovieDetailsPage}/>
          <Route path="/movies?search=:query" component={HomePage}/>
          <Route path="/nomoviefound" component={NoMovieFoundPage}/>
          <Route exact path="/movies" component={HomePage}/>
          <Route path="*" component={Page404}/>
        </Switch>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
