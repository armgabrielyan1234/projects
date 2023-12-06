import { useState } from "react";
import useRequest from "../../request";
import Footer from "./footer";
import Header from "./header";
import RatedMovies from "./mostRatedMovies";
import PopularMovie from "./popularMovie";
import UpcomingMovie from "./upcomingMovie";

export default function Main() {
  const popularMovie = useRequest(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );
  const upcomingMovie = useRequest(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );
  const ratedMovie = useRequest(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  return (
    <div>
      <Header />
      <div>
        <div className="bg-gradient-to-r from-gray-600  to-gray-700">
          <UpcomingMovie upcomingMovie={upcomingMovie} />
        </div>
        <div>
          <div className="flex justify-center gap-5 flex-wrap mt-5">
            <PopularMovie popularMovie={popularMovie} />

            <RatedMovies ratedMovie={ratedMovie} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
