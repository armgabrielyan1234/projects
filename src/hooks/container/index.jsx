//import icons
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";

export default function Container({
  backdrop_path,
  title,
  vote_count,
  vote_average,
}) {
  return (
    <div className="card-container w-[300px] h-[440px] rounded-2xl border-[3px] p-5 border-yellow-300">
      <div>
        <img
          src={`${process.env.REACT_APP_HOST}${backdrop_path}`}
          className="w-full object-cover rounded-2xl h-[250px]"
          alt=""
        />
        <br />
        <div className="flex h-[80px] space-x-9">
          <h1 className="text-2xl font-semibold text-center">
            {title.length > 15 ? ` ${title.slice(0, 25)}... ` : title}
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
            <p className="p-2">{vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}