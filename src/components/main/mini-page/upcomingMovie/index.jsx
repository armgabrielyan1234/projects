import { Link } from "react-router-dom";

export default function UpcomingMovie({ upcomingMovie }) {
  const displayedMovies = upcomingMovie.slice(0, 2);

  return (
    <div className="flex flex-row pl-5 pt-8 space-x-[50px] flex-wrap p-2">
      {displayedMovies.map(({ backdrop_path, id }) => (
        <Link key={id} to={`/film/${id}`}>
          <div className="w-[600px] rounded-2xl h-[300px]  bg-black">
            <img
              src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
              className="w-full object-cover rounded-2xl h-full"
              alt=""
            />
          </div>
        </Link>
      ))}

      <div className="flex flex-col">
        <h1 className="text text-2xl mt-5 text-yellow-400">Watch Everywhere</h1>
        <p className="text-lg text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
    </div>
  );
}
