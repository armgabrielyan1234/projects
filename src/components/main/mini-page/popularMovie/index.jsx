import { Link } from "react-router-dom";

//import icons
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";

export default function PopularMovie({ popularMovie }) {
  return (
    <div className="">
      <h1 className="text text-4xl text-center font-semibold mt-5">
        Most popular films
      </h1>
      <div className="flex justify-center gap-5 flex-wrap mt-5">
        {popularMovie.map(
          ({ title, backdrop_path, vote_average, vote_count, id }) => {
            return (
              <Link key={id} to={`/film/${id}`}>
                <div className="card-container w-[300px] h-[440px] rounded-2xl border-[5px] p-5 border-yellow-300">
                  <div>
                    <img
                      src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                      className="w-full object-cover rounded-2xl h-[250px]"
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
            );
          }
        )}
      </div>
    </div>
  );
}
