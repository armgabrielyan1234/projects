import { Link } from "react-router-dom";

export default function UpcomingMovie({ upcomingMovie }) {
  return (
    <div className="flex flex-row pl-5 pt-8 space-x-[50px] flex-wrap p-2">
      {upcomingMovie.map(({ backdrop_path }, id) => {
        return id < 2 ? (
          <Link key={id} to={`/film/${id}`}>
            <div className="w-[600px] rounded-2xl h-[300px]  bg-black">
              <img
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
                className="w-full rounded-2xl h-full"
                alt=""
              />
            </div>
          </Link>
        ) : null;
      })}

      <div className="flex flex-col">
        <h1 className="text text-2xl mt-5 text-yellow-400">Watch EveryWhere</h1>
        <p className="text-lg text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
    </div>
  );
}
