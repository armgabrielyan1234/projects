import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useRequest(url, apiKey) {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios({
        url,
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (response.data !== undefined) {
        setData(response.data);
        setResults(response.data.results);
      }
    } catch (error) {
      console.error("Error in request:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url, apiKey]);

  useEffect(() => {
    request();
  }, [request]);

  return { data, loading, results };
}

export default useRequest;
