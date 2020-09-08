const getCharacters = () => {
  return fetch("https://rickandmortyapi.com/api/character/").then((res) =>
    res.json().then((response) => response)
  );
};

export default getCharacters;
