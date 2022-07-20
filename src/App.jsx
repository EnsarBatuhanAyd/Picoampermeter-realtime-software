import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Realtime from "./Pages/RealtimePage"
import Results from "./Pages/ResultsPage"

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/results">
          <Results />
        </Route>
        <Route path="/">
          <Realtime />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
