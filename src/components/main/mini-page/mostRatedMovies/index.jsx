//import hooks
import { Link } from "react-router-dom";
import Container from "../../../../hooks/container";

export default function RatedMovies({ ratedMovie, theme }) {
  const displayedMovies = ratedMovie.slice(0, 4);
  return (
    <div className="">
      <h1 className="text text-4xl text-center font-semibold mt-5">
        Most rated films
      </h1>
      <div className="flex justify-center gap-5 flex-wrap mt-10">
        {displayedMovies.map(
          ({ title, backdrop_path, vote_average, vote_count, id }, i) => {
            return (
              <Link key={i} to={`/film/${id}`}>
                <Container
                  backdrop_path={backdrop_path}
                  vote_average={vote_average}
                  title={title}
                  vote_count={vote_count}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
