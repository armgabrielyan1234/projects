//import request
import useRequest from "../../request";

//imports components
import RatedMovies from "./mini-page/mostRatedMovies";
import PopularMovie from "./mini-page/popularMovie";
import UpcomingMovie from "./mini-page/upcomingMovie";

export default function Main() {
  const [popularMovie] = useRequest(
    process.env.REACT_APP_POPULAR_MOVIE,
    process.env.REACT_APP_API_KEY
  );
  const [upcomingMovie] = useRequest(
    process.env.REACT_APP_UPCOMING_MOVIE,
    process.env.REACT_APP_API_KEY
  );
  const [ratedMovie] = useRequest(
    process.env.REACT_APP_RATED_MOVIE,
    process.env.REACT_APP_API_KEY
  );

  return (
    <div>
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
    </div>
  );
}
