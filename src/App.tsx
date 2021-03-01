import React from "react";

import "./styles/App.css";
import { Header } from "./components";
import { HomePage } from "./pages";
import { Footer } from "./components";
import { ErrorBoundary } from "./components";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
