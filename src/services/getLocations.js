const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location/").then((res) =>
    res.json().then((response) => response)
  );
};

export default getLocations;
