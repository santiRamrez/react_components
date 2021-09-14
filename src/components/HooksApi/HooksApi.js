import React, { useState, useEffect } from "react";

const HooksApi = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    let url = "https://restcountries.eu/rest/v2/lang/es";
    getData(url);
  }, []);

  const getData = (url) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCountries(data));
    } catch (error) {
      setCountries(error);
    }
  };

  return (
    <>
      <h2>Peticiones a una API</h2>
      {countries.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        countries.map((country, i) => {
          return (
            <div key={i}>
              <p>{country.name}</p>
            </div>
          );
        })
      )}
    </>
  );
};

export default HooksApi;
