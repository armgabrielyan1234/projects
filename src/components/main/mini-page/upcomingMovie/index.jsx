import { Link } from "react-router-dom";

export default function UpcomingMovie({ upcomingMovie }) {
  const displayedMovies = upcomingMovie.slice(0, 2);

  return (
    <div className="flex flex-row  pl-5 pt-8  flex-wrap p-2">
      <div className="flex w-full flex-wrap gap-2 space-x-[50px] justify-center">
        {displayedMovies.map(({ backdrop_path, id }) => (
          <Link key={id} to={`/film/${id}`}>
            <div className="">
              <div className="w-[600px] justify-center flex  rounded-2xl h-[300px]">
                <img
                  src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                  className="w-[60%] lg:w-full bg-cover bg-center object-cover  rounded-2xl h-full"
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex pl-7 m-5 flex-col">
        <h1 className="text text-2xl mt-5 font-bold text-yellow-400">
          Watch Everywhere
        </h1>
        <p className="text-lg text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
    </div>
  );
}
