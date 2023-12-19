//import icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

//import hooks
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";

export default function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const { results } = useRequest(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    process.env.REACT_APP_API_KEY
  );

  const searchValue = results.map(({ original_title }) => {
    return original_title;
  });
  const searchHelp = searchValue.slice(0, 3);

  return (
    <div className="w-screen items-center flex justify-between pb-5 pl-[10%]  pr-[10%] pt-5 bg-gradient-to-r from-gray-600 to-gray-700">
      <div className="w-[120px]">
        <Link to={"/"}>
          <div className="flex items-end">
            <h2 className="text-3xl font-bold text-white">Movie</h2>
            <h1 className="text-4xl font-bold text-yellow-300">X</h1>
          </div>
        </Link>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            navigate(`/search/${value}`);
            setValue("");
          }}
        >
          {searchHelp.length > 0 ? (
            <div className="flex flex-col border-2  border-yellow-500 rounded-t-2xl items-center">
              <div className="flex">
                <div className={`flex justify-end items-center`}>
                  <MagnifyingGlassIcon className="w-6 h-6 line-height-6 mr-[-9.2rem] sm:mr-[-17.5rem] relative z-10 float-left" />
                </div>
                <input
                  type="text"
                  className="p-2 w-[150px] outline-none sm:w-[300px] bg-gray-600 rounded-t-2xl"
                  placeholder="Enter a Keyword"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col border-2  border-yellow-500 rounded-2xl items-center">
              <div className="flex">
                <div className="flex justify-end items-center">
                  <MagnifyingGlassIcon className="w-6 h-6 line-height-6 mr-[-9.2rem] sm:mr-[-17.5rem] relative z-10 float-left" />
                </div>
                <input
                  type="text"
                  className="p-2 w-[150px] outline-none sm:w-[300px] bg-gray-600 rounded-2xl"
                  placeholder="Enter a Keyword"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </div>
            </div>
          )}

          <div className="absolute  rounded-b-2xl w-[154px] sm:w-[304px]">
            {searchHelp.map((name, i) => (
              <div
                key={i}
                className=" flex p-2 bg-yellow-300 opacity-100 hover:opacity-80 w-full items-center"
                onClick={() => {
                  setValue(name);
                }}
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
                <h2 className="pl-5">
                  {name.length > 15 ? `${name.slice(0, 25)}...` : name}
                </h2>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
