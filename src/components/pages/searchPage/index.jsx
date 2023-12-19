//import icons
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

//import hooks
import { Link, useParams } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";
import Container from "../../../hooks/container";

export default function SearchFilms() {
  const { value } = useParams();

  const { loading, results } = useRequest(
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
          <div className="flex flex-wrap  space-x-5 items-center justify-center">
            <div className="flex justify-center  gap-5 flex-wrap m-5">
              {results.length < 1 ? (
                <div className="flex space-x-4  justify-center items-center">
                  <ExclamationCircleIcon
                    width={80}
                    className="text-yellow-300"
                  />
                  <h1 className="text text-4xl">The film does not found</h1>
                </div>
              ) : (
                results.map(
                  (
                    { title, backdrop_path, vote_count, vote_average, id },
                    i
                  ) => {
                    return backdrop_path !== null ? (
                      <Link key={i} to={`/film/${id}`}>
                        <Container
                          backdrop_path={backdrop_path}
                          vote_average={vote_average}
                          title={title}
                          vote_count={vote_count}
                        />
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
