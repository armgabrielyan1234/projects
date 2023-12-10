import React from "react";
import useRequest from "../../hooks/request";
import RatedMovies from "./mini-page/mostRatedMovies";
import PopularMovie from "./mini-page/popularMovie";
import UpcomingMovie from "./mini-page/upcomingMovie";

export default function Main() {
  const [popularMovieData, popularMovieLoading, popularMovieResults] =
    useRequest(
      process.env.REACT_APP_POPULAR_MOVIE,
      process.env.REACT_APP_API_KEY
    );

  const [upcomingMovieData, upcomingMovieLoading, upcomingMovieResults] =
    useRequest(
      process.env.REACT_APP_UPCOMING_MOVIE,
      process.env.REACT_APP_API_KEY
    );

  const [ratedMovieData, ratedMovieLoading, ratedMovieResults] = useRequest(
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
          <div className="bg-gradient-to-r w-screen from-gray-600 to-gray-700">
            <UpcomingMovie upcomingMovie={upcomingMovieResults} />
          </div>
          <div className="flex justify-center gap-5 flex-wrap mt-5">
            <PopularMovie popularMovie={popularMovieResults} />
            <RatedMovies ratedMovie={ratedMovieResults} />
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
    </div>
  );
}
