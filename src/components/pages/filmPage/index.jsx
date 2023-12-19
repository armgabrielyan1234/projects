import { Link, useParams } from "react-router-dom";

//import icons
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

// import hooks
import useRequest from "../../../hooks/useRequest";
import Container from "../../../hooks/container";

export default function FilmPage() {
  const { uId } = useParams();
  const { data, loading } = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}?language=en-US`,
    process.env.REACT_APP_API_KEY
  );

  const { loading: SimilarLoading, results: SimilarResults } = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}/similar?language=en-US&page=1`,
    process.env.REACT_APP_API_KEY
  );

  const { data: TrailerData, loading: TrailerLoading } = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}/images`,
    process.env.REACT_APP_API_KEY
  );
  const { data: CreditData } = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}/credits?language=en-US`,
    process.env.REACT_APP_API_KEY
  );

  const trailers = TrailerData?.backdrops?.slice(0, 3) || [];
  const actors = CreditData.cast ? CreditData.cast.slice(0, 3) : [];
  const similar = SimilarResults ? SimilarResults.slice(0, 4) : [];

  const firstGenre =
    data?.genres && data.genres.length > 0 ? data.genres[0] : null;

  return (
    <div>
      {loading && TrailerLoading && SimilarLoading ? (
        <div className="flex w-screen justify-center items-center">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt=""
            width={500}
          />
        </div>
      ) : (
        <div className="w-screen">
          <div className="bg-gradient-to-r w-full  from-gray-600  to-gray-700">
            <div className="flex flex-col">
              <div className="flex  justify-center space-x-5 pt-[25px]">
                <div className="card-container xl:justify-center flex-col xl:flex-row w-full flex items-center   rounded-2xl ">
                  <img
                    src={`${
                      data.backdrop_path
                        ? process.env.REACT_APP_HOST + data.backdrop_path
                        : null
                    }`}
                    className=" w-[350px] sm:w-[550px] xl:w-[350px] h-[350px] border-[5px] ml-[70px] mr-10 border-yellow-300 object-cover rounded-2xl "
                    alt=""
                  />

                  <div>
                    <h1 className="text text-4xl mt-5 font-bold text-yellow-400">
                      {data?.original_title?.length > 30
                        ? ` ${data.original_title.slice(0, 30)}...`
                        : data.original_title}
                    </h1>
                    <div className="flex pt-5 flex-col space-y-10">
                      <div className="flex  sm:space-x-10">
                        <ClockIcon
                          width={50}
                          className="color text-yellow-300"
                        />
                        <h2 className="text text-4xl text-white">
                          {data.release_date}
                        </h2>
                      </div>
                      <div className="flex  sm:space-x-10">
                        <StarIcon
                          width={50}
                          className="color text-yellow-300"
                        />
                        <h2 className="text text-4xl text-white">
                          {data.vote_average}
                        </h2>
                      </div>
                      {firstGenre && (
                        <div className="flex sm:space-x-10">
                          <BookmarkSquareIcon
                            width={50}
                            className="color text-yellow-300"
                          />
                          <h2 className="text text-4xl text-white">
                            {firstGenre.name}
                          </h2>
                        </div>
                      )}
                      <div className="flex flex-wrap sm:flex-row  sm:space-x-10">
                        <UserCircleIcon
                          width={50}
                          className="color text-yellow-300"
                        />
                        {actors.map(({ profile_path }, index) => {
                          return profile_path !== null ? (
                            <div key={index} className="w-[90px] h-[90px]">
                              <img
                                src={`${process.env.REACT_APP_HOST}${profile_path}`}
                                className="w-full rounded-[50%] object-cover border-[3px] border-yellow-300 h-full"
                                alt=""
                              />
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl mt-8 text-white">Trailers</h1>
                <div className="flex flex-wrap justify-center items-center  ">
                  <div className="flex flex-wrap justify-center p-10  sm:space-x-4">
                    {trailers.length > 0 ? (
                      trailers.map((trailer, i) => (
                        <div key={i} className="p-2">
                          <Link to={`/trailer/${data.id}/${i}`}>
                            <div className="flex  flex-wrap">
                              <div className="w-[350px] relative">
                                <div className="absolute bg-black opacity-60 rounded-[35px] inset-0 flex items-center  justify-center">
                                  <PlayIcon className="w-20 justify-center text-white" />
                                </div>
                                <img
                                  src={`${process.env.REACT_APP_HOST}${trailer.file_path}`}
                                  alt={`Trailer ${i}`}
                                  className="w-full h-[200px] object-cover rounded-[35px]"
                                />
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="flex h-[310px] space-x-4 justify-center items-center">
                        <ExclamationCircleIcon
                          width={80}
                          className="text-yellow-300"
                        />
                        <h1 className="text text-4xl">
                          The Trailers does not found
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  items-center flex-wrap mt-10">
            <div>
              <h1 className="text text-4xl">Similar Films</h1>
            </div>
            <br />
            <div className="flex flex-wrap justify-center  m-5">
              {similar.length > 0 ? (
                similar.map(
                  (
                    { title, backdrop_path, vote_average, vote_count, id },
                    i
                  ) => {
                    return backdrop_path !== null ? (
                      <Link key={i} className="p-2" to={`/film/${id}`}>
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
              ) : (
                <div className="flex h-[100px] space-x-4 justify-center items-center">
                  <ExclamationCircleIcon
                    width={80}
                    className="text-yellow-300"
                  />
                  <h1 className="text text-4xl">The Films does not found</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
