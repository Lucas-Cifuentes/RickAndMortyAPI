import React, { useEffect, useState } from "react";

import getCharacters from "../services/getCharacters";

import Card from "../components/Card";

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((res) => setCharacters(res.results));
  }, []);

  return (
    <>
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
    </>
  );
};

export default CharactersPage;
