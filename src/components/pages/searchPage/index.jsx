//import react components
import { Link, useParams } from "react-router-dom";

//import request
import useRequest from "../../../request";

export default function SearchFilms() {
  const { value } = useParams();

  const data = useRequest(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    process.env.REACT_APP_API_KEY
  );

  return (
    <div className="m-2">
      <h1 className="text text-4xl text-center mt-5">Search Films</h1>
      <div className="flex flex-wrap space-x-5 justify-center">
        <div className="flex justify-center gap-5   flex-wrap mt-5">
          {data.length < 1 ? (
            <div className="flex h-[310px] justify-center items-center">
              <h1 className="text text-8xl">Not Found 404</h1>
            </div>
          ) : (
            data.map(({ title, backdrop_path, id }) => {
              const imagePath = backdrop_path
                ? `${process.env.REACT_APP_HOST}${backdrop_path}`
                : null;

              return (
                <Link key={id} to={`/film/${id}`}>
                  <div className="card-container w-[300px] h-[400px] rounded-2xl border-[5px] p-5 border-yellow-300">
                    <div>
                      <img
                        src={imagePath}
                        className="w-full object-cover h-[200px] mb-4"
                        alt=""
                      />
                      <br />
                      <br />
                      <h1 className="text-xl text-center">{title}</h1>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
