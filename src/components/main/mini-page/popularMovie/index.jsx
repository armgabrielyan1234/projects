import { Link } from "react-router-dom";

export default function PopularMovie({ popularMovie }) {
  return (
    <div>
      <h1 className="text text-4xl text-center mt-5">Most popular Films</h1>
      <div className="flex justify-center gap-5 flex-wrap mt-5">
        {popularMovie.map(({ title, backdrop_path }, id) => {
          return (
            <Link key={id} to={`/film/${id}`}>
              <div className="card-container w-[300px] h-[350px] rounded-2xl border-[5px] p-5 border-yellow-300">
                <div className="">
                  <img
                    src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
                    className="w-full h-[200px] mb-4"
                    alt=""
                  />
                  <br />
                  <br />
                  <h1 className="text-xl text-center">{title}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
