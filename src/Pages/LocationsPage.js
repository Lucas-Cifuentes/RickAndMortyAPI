import React, { useEffect, useState } from "react";

import getLocations from "../services/getLocations";

import Card from "../components/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const LocationsPage = () => {
  const classes = useStyles();
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then((res) => setLocations(res.results));
  }, []);

  return (
    <Container className={classes.content}>
      {locations.map((location, index) => (
        <Card
          key={index}
          title={location.name}
          typeLocation={location.type}
          dimensionLocation={location.dimension}
        />
      ))}
    </Container>
  );
};

export default LocationsPage;
