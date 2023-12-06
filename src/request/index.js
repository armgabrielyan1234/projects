import axios from "axios";
import { useCallback, useEffect, useState } from "react";

function useRequest(url) {
  const [data, setData] = useState([]);

  const request = useCallback(async () => {
    try {
      const response = await axios({
        url,
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2Q3Y2Y3NzA1ZWZjNWM4ZWE0OGZjZWNlY2I1N2FmOCIsInN1YiI6IjY0ZmYyZTY2ZTBjYTdmMDE0ZjZmZTZkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mS8FppuTI5cQ8_jNZLp4nsZR8eVCVb1ij08aDRFW-Hs",
        },
      });
      if (response.data !== undefined) {
        setData(response.data.results);
      }
    } catch (error) {
      console.error("Error in request:", error);
      throw error;
    }
  }, [url]);

  useEffect(() => {
    request();
  }, [request]);

  return data;
}

export default useRequest;
