import React, { useEffect, useState } from "react";

import getEpisodes from "../services/getEpisodes";
import Card from "../components/Card";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    getEpisodes().then((res) => setEpisodes(res.results));
  }, []);

  return (
    <>
      {episodes.map((episode, index) => (
        <Card
          key={index}
          title={episode.name}
          dateEpisode={episode.air_date}
          episode={episode.episode}
        />
      ))}
    </>
  );
};

export default EpisodesPage;
