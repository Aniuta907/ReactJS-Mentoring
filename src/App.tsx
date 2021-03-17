import React from "react";

import "./styles/App.scss";
import { Header } from "./components";
import { HomePage, MovieDetailsPage } from "./pages";
import { Footer } from "./components";
import { ErrorBoundary } from "./components";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* <Header /> */}
        <MovieDetailsPage />
        <HomePage />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
