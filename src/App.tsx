import React from "react";

import "./styles/App.scss";
import { HomePage } from "./pages";
import { Footer } from "./components";
import { ErrorBoundary } from "./components";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* <MovieDetailsPage /> */}
        <HomePage />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
