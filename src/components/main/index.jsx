//import hooks
import { useContext } from "react";
import useRequest from "../../hooks/useRequest";

//import components
import RatedMovies from "./mini-page/mostRatedMovies";
import PopularMovie from "./mini-page/popularMovie";
import UpcomingMovie from "./mini-page/upcomingMovie";
import { ThemeContext } from "../../context";

export default function Main() {
  const [theme] = useContext(ThemeContext);

  const { loading: popularMovieLoading, results: popularMovieResults } =
    useRequest(
      process.env.REACT_APP_POPULAR_MOVIE,
      process.env.REACT_APP_API_KEY
    );

  const { loading: upcomingMovieLoading, results: upcomingMovieResults } =
    useRequest(
      process.env.REACT_APP_UPCOMING_MOVIE,
      process.env.REACT_APP_API_KEY
    );

  const { loading: ratedMovieLoading, results: ratedMovieResults } = useRequest(
    process.env.REACT_APP_RATED_MOVIE,
    process.env.REACT_APP_API_KEY
  );

  return (
    <div>
      {popularMovieLoading && upcomingMovieLoading && ratedMovieLoading ? (
        <div className="flex w-screen  justify-center items-center">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt=""
            className="w-[500px]"
          />
        </div>
      ) : (
        <div>
          <div
            className={`bg-gradient-to-r w-screen ${
              theme === "dark" ? "bg-black" : "from-gray-600 to-gray-700"
            }`}
          >
            <UpcomingMovie upcomingMovie={upcomingMovieResults} />
          </div>
          <div
            className={`flex justify-center ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } gap-5 flex-wrap`}
          >
            <PopularMovie popularMovie={popularMovieResults} theme={theme} />
            <RatedMovies ratedMovie={ratedMovieResults} theme={theme} />
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}
