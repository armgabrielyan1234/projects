import { Link } from "react-router-dom";

export default function RatedMovies({ ratedMovie }) {
  return (
    <div className="mt-10">
      <h1 className="text text-4xl text-center mt-5">Most Rated Films</h1>
      <div className="flex  space-x-10 flex-wrap mt-5">
        {ratedMovie.map(({ backdrop_path }, id) => {
          return id < 4 ? (
            <Link key={id} to={`/film/${id}`}>
              <div className="w-[300px] h-[300px]  rounded-2xl border-[5px] p-5 border-yellow-300">
                <img
                  src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                  className="w-full rounded-2xl h-full"
                  alt=""
                />
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
}
