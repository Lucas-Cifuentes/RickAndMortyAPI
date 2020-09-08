import React, { useEffect, useState } from "react";

import getCharacters from "../services/getCharacters";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Card from "../components/Card";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setCharacters(res.results));
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.content}>
      {characters.map((character, index) => (
        <Card
          image={character.image}
          title={character.name}
          status={character.status}
          species={character.species}
          LastKnowwLocation={character.location.name}
          key={index}
        />
      ))}
    </Container>
  );
};

export default CharactersPage;
