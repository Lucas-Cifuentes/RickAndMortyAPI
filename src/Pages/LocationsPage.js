import React, { useEffect, useState } from "react";

import getLocations from "../services/getLocations";

import Card from "../components/Card";

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations().then((res) => setLocations(res.results));
  }, []);

  return (
    <>
      {locations.map((location, index) => (
        <Card
          key={index}
          title={location.name}
          typeLocation={location.type}
          dimensionLocation={location.dimension}
        />
      ))}
    </>
  );
};

export default LocationsPage;
