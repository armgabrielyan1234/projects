//import react components
import { Link, useParams } from "react-router-dom";

//import icons
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";

//import request
import useRequest from "../../../request";

export default function SearchFilms() {
  const { value } = useParams();

  const [data, loading, results] = useRequest(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    process.env.REACT_APP_API_KEY
  );
  return (
    <div className="m-2">
      {loading ? (
        <div className="flex w-screen justify-center items-center">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt=""
            width={500}
          />
        </div>
      ) : (
        <>
          <h1 className="text text-4xl text-center mt-5">Search Films</h1>
          <div className="flex flex-wrap space-x-5 justify-center">
            <div className="flex justify-center gap-5   flex-wrap mt-5">
              {results.length < 1 ? (
                <div className="flex h-[310px] justify-center items-center">
                  <h1 className="text text-8xl ">Not Found 404</h1>
                </div>
              ) : (
                results.map(
                  ({ title, backdrop_path, vote_count, vote_average, id }) => {
                    return backdrop_path !== null ? (
                      <Link key={id} to={`/film/${id}`}>
                        <div className="card-container w-[300px] h-[400px] rounded-2xl border-[5px] p-5 border-yellow-300">
                          <div>
                            <img
                              src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                              className="w-full object-cover rounded-2xl h-[200px]"
                              alt=""
                            />
                            <br />
                            <div className="flex space-x-9">
                              <h1 className="text-2xl font-semibold text-center">
                                {title}
                              </h1>
                              <br />
                              <br />
                            </div>
                            <div className="flex justify-between text text-xl">
                              <div className="flex">
                                <ClockIcon className="w-8 text-yellow-300 " />
                                <p className="p-2">{vote_count}</p>
                              </div>
                              <div className="flex">
                                <StarIcon className="w-8 text-yellow-300" />
                                <p className="p-2">{vote_average}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ) : null;
                  }
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
