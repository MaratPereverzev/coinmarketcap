import { Indexable } from "components/types";
import axios, { AxiosResponse } from "axios";
import { useCallback, useState, useRef } from "react";

export const useFetch = (defOptions: Indexable = {}) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState(false);
  const options = useRef(defOptions);

  const fetchData = useCallback(async (additionalOptions?: Indexable) => {
    setLoading(true);
    try {
      const response = await axios({
        ...options.current,
        ...additionalOptions,
      });

      setResponse(response);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { response, loading, error, fetchData };
};
