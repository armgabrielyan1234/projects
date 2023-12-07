import { Link } from "react-router-dom";

export default function RatedMovies({ ratedMovie }) {
  const displayedMovies = ratedMovie.slice(0, 4);
  return (
    <div className="mt-10">
      <h1 className="text text-4xl text-center mt-5">Most Rated Films</h1>
      <div className="flex  space-x-10 flex-wrap mt-5">
        {displayedMovies.map(({ backdrop_path, id }) => {
          return (
            <Link key={id} to={`/film/${id}`}>
              <div className="w-[300px] h-[300px]  rounded-2xl border-[5px] p-5 border-yellow-300">
                <img
                  src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                  className="w-full object-cover rounded-2xl h-full"
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
