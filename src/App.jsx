import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Realtime from "./Pages/RealtimePage"
import Results from "./Pages/ResultsPage"
import Credits from "./Pages/CreditPage"
function App() {
  
  return (
    
    <Router>
      <Switch>
      <Route path="/credits">
          <Credits />
        </Route>
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
