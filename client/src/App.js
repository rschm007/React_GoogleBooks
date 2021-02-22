import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Hero>
          <div className="heroText">
            <h1 className="display-4">React Google Books Search</h1>
            <p class="lead">Search for and save books.</p>
          </div>
        </Hero>
      </div>
    </Router>
  );
}

export default App;
