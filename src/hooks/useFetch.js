import { useEffect, useState } from "react";

//Custom hooks it does not use export default

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText
              ? "Hay un error muñeco"
              : res.statusText,
          };
        }

        let data = await res.json();

        setData(data);
        setIsPending(false);
        setError({ err: false });
        //The code within the throw block is caught below
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};
