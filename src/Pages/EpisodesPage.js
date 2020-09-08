import React, { useEffect, useState } from "react";

import getEpisodes from "../services/getEpisodes";
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

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getEpisodes().then((res) => setEpisodes(res.results));
  }, []);

  return (
    <Container className={classes.content}>
      {episodes.map((episode, index) => (
        <Card
          key={index}
          title={episode.name}
          dateEpisode={episode.air_date}
          episode={episode.episode}
        />
      ))}
    </Container>
  );
};

export default EpisodesPage;
