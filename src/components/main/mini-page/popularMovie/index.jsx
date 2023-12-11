//import hooks
import { Link } from "react-router-dom";
import Container from "../../../../hooks/container";

export default function PopularMovie({ popularMovie }) {
  return (
    <div className="">
      <h1 className="text text-4xl text-center font-semibold mt-5">
        Most popular films
      </h1>
      <div className="flex justify-center gap-5 flex-wrap mt-10">
        {popularMovie.map(
          ({ title, backdrop_path, vote_average, vote_count, id }, i) => {
            return (
              <Link key={i} to={`/film/${id}`}>
                <Container
                  backdrop_path={backdrop_path}
                  title={title}
                  vote_count={vote_count}
                  vote_average={vote_average}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
