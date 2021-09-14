import React from "react";
import { useFetch } from "../../hooks/useFetch";

const UsingCustomHook = () => {
  let url = "https://restcountries.eu/rest/v2/lang/es";

  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Using Custom Hook</h2>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(isPending)}</p>
      <p>{JSON.stringify(error)}</p>
    </>
  );
};

export default UsingCustomHook;
