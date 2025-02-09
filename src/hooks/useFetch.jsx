import axios from "axios";
import { useEffect, useState } from "react";

const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

const useFetch = (
  { url = "", method = "GET", headers = {} },
  { enabled } = { enabled: true },
) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (enabled) {
      setIsLoading(true);
      const urlAPI = `${import.meta.env.VITE_API_HOST}${url}`;
      const optionMovieDetail = {
        method,
        headers: { ...DEFAULT_HEADER, ...headers },
      };

      const getData = async () => {
        await axios
          .get(urlAPI, optionMovieDetail)
          .then((res) => {
            const data = res.data;
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      };
      getData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers)]);

  return { isLoading, data, enabled };
};

export default useFetch;
