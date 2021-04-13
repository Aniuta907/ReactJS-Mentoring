import React from "react";
import { Switch, Route } from 'react-router-dom';

import "./styles/App.scss";
import { Footer } from "./components";
import { ErrorBoundary } from "./components";
import { ErrorPage, HomePage, MovieDetailsPage, NoMovieFoundPage } from "./pages";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <Switch>
          <Route path="/movie/:urlID" component={MovieDetailsPage}/>
          <Route path="/search/:query" component={HomePage}/>
          <Route path="/nomoviefound" component={NoMovieFoundPage}/>
          <Route exact path="/" component={HomePage}/>
          <Route path="*" component={ErrorPage}/>
        </Switch>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
