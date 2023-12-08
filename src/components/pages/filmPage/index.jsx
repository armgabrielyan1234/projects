import { ClockIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";

//import icons
import { StarIcon } from "@heroicons/react/24/outline";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";

// import request
import useRequest from "../../../request";

export default function FilmPage() {
  const { uId } = useParams();
  const [data, loading] = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}?language=en-US`,
    process.env.REACT_APP_API_KEY
  );
  const firstGenre =
    data.genres && data.genres.length > 0 ? data.genres[0] : null;

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
        <div className="bg-gradient-to-r w-screen h-[400px] from-gray-600  to-gray-700">
          <div className="flex justify-around pt-[25px]">
            <Link to={`/trailer/${data.id}`}>
              <div className="card-container  w-[300px] h-[350px] rounded-2xl border-[5px] ml-[70px] mr-10 border-yellow-300">
                <img
                  src={`${process.env.REACT_APP_HOST}${data.backdrop_path}`}
                  className="w-full object-cover rounded-2xl h-full"
                  alt=""
                />
              </div>
            </Link>
            <div>
              <h1 className="text text-4xl mt-5 text-yellow-400">
                {data.original_title}
              </h1>
              <div className="flex pt-5 flex-col space-y-10">
                <div className="flex sm:space-x-10">
                  <ClockIcon width={50} className="color text-yellow-300" />
                  <h2 className="text text-4xl text-white">
                    {data.popularity}
                  </h2>
                </div>
                <div className="flex sm:space-x-10">
                  <StarIcon width={50} className="color text-yellow-300" />
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
