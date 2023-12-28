//import hooks
import { useContext } from "react";
import useRequest from "../../../hooks/useRequest";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../../context";

export default function TrailerPage() {
  const [theme] = useContext(ThemeContext);

  const { uId, trailerId } = useParams();
  const { loading, results } = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}/videos?language=en-US`,
    process.env.REACT_APP_API_KEY
  );

  const key =
    results && results.length > trailerId ? results[trailerId].key : null;

  return (
    <div>
      {loading ? (
        <div className="flex w-screen justify-center items-center">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt=""
            width={500}
          />
        </div>
      ) : (
        <div
          className={`bg-gradient-to-r flex justify-center  pt-9 w-screen h-[500px] xl:h-screen ${
            theme === "dark" ? "bg-gray-900" : "from-gray-600 to-gray-700"
          } `}
        >
          <iframe
            title="Trailer"
            src={`https://www.youtube.com/embed/${key}`}
            className="w-[80%] p-10 h-[100%] rounded-[65px]"
          ></iframe>
        </div>
      )}
    </div>
  );
}
