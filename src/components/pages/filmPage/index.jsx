import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { BookmarkSquareIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import useRequest from "../../../request";

export default function FilmPage() {
  const { uId } = useParams();
  const data = useRequest(
    `https://api.themoviedb.org/3/movie/${uId}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
    process.env.REACT_APP_API_KEY
  );
  return (
    <div>
      <div className="bg-gradient-to-r w-screen h-[400px] from-gray-600  to-gray-700">
        <div className="flex justify-around pt-[25px]">
          <Link to={`/trailer/id`}>
            <div className="card-container  w-[300px] h-[350px] rounded-2xl border-[5px] ml-[70px] border-yellow-300">
              <img
                src="/media/photo/logo.png"
                className="w-full object-cover h-full"
                alt=""
              />
            </div>
          </Link>
          <div>
            <h1 className="text text-4xl mt-5 text-yellow-400">Name Film</h1>
            <div className="flex pt-5 flex-col space-y-10">
              <div className="flex space-x-10">
                <ClockIcon width={50} className="color text-yellow-300" />
                <h2 className="text text-4xl text-white">100.000</h2>
              </div>
              <div className="flex space-x-10">
                <StarIcon width={50} className="color text-yellow-300" />
                <h2 className="text text-4xl text-white">9.2</h2>
              </div>
              <div className="flex space-x-10">
                <BookmarkSquareIcon
                  width={50}
                  className="color text-yellow-300"
                />
                <h2 className="text text-4xl text-white">Arman Gabrielyan</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text text-4xl text-center mt-5">Most popular Films</h1>
        <div className="flex justify-center gap-5 flex-wrap mt-5">
          <Link to={`/film/id`}>
            <div className="card-container w-[300px] h-[350px] rounded-2xl border-[5px] p-5 border-yellow-300">
              <div>
                <img
                  src="/media/photo/logo.png"
                  className="w-full object-cover h-[200px] mb-4"
                  alt=""
                />
                <br />
                <br />
                <h1 className="text-xl text-center">Name Film</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
