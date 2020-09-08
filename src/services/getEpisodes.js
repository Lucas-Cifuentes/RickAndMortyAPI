const getEpisodes = () => {
  return fetch("https://rickandmortyapi.com/api/episode/").then((res) =>
    res.json().then((response) => response)
  );
};

export default getEpisodes;
