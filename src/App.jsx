import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Realtime from "./Pages/RealtimePage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Realtime />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
