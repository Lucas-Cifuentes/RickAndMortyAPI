import React from "react";

import Navbar from "./components/Navbar";

import Characters from "./Pages/CharactersPage";
import Locations from "./Pages/LocationsPage";
import Episodes from "./Pages/EpisodesPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/episodes" component={Episodes} />
      </Switch>
    </Router>
  );
}

export default App;
