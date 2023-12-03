import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useRequest(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const request = useCallback(async () => {
    try {
      const response = await axios({ url });
      if (response.data !== undefined) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error in request:", error);
      throw error;
    }
  }, [url]);

  useEffect(() => {
    request();
  }, [request]);

  return data, loading;
}

export default useRequest;
