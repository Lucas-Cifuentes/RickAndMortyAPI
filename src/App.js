import React from "react";

import Navbar from "./components/Navbar";
import { Container, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Characters from "./Pages/CharactersPage";
import Locations from "./Pages/LocationsPage";
import Episodes from "./Pages/EpisodesPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    marginTop: "1.5rem",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Navbar />
      <Container className={classes.content}>
        <Grid container spacing={3}>
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/episodes" component={Episodes} />
          </Switch>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
