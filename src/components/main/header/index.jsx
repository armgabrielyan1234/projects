//import icons
import { SearchIcon } from "@heroicons/react/solid";
import { MoonIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";

//import hooks
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../../hooks/useRequest";
import { ThemeContext } from "../../../context";

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

  const [theme, setTheme] = useContext(ThemeContext);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`w-screen items-center ${
        theme === "dark"
          ? "bg-black"
          : "bg-gradient-to-r from-gray-600 to-gray-700"
      } flex justify-between pb-5 pl-[10%]  pr-[10%] pt-5 `}
    >
      <div className="w-[120px]">
        <Link to={"/"}>
          <div className="flex items-end">
            <h2 className="text-3xl font-bold text-white">Movie</h2>
            <h1 className="text-4xl font-bold text-yellow-300">X</h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div>
          {theme === "light" ? (
            <SunIcon
              className="w-[40px] text-white "
              onClick={() => {
                handleThemeSwitch();
              }}
            />
          ) : (
            <MoonIcon
              className="w-[30px] text-white"
              onClick={() => {
                handleThemeSwitch();
              }}
            />
          )}
        </div>
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
                  <SearchIcon
                    className={`${
                      theme === "dark" ? "text-white" : "text-black"
                    }  w-6 h-6 line-height-6 mr-[-9.2rem] sm:mr-[-17.5rem] relative z-10 float-left`}
                  />
                </div>
                <input
                  type="text"
                  className={`p-2 w-[150px] outline-none sm:w-[300px] ${
                    theme === "dark" ? "bg-black text-white" : " bg-gray-600"
                  }  rounded-t-2xl`}
                  placeholder="Enter a Keyword"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col border-2  border-yellow-500 rounded-2xl items-center">
              <div className="flex">
                <div className="flex justify-end items-center">
                  <SearchIcon
                    className={` ${
                      theme === "dark" ? "text-white" : "text-black"
                    } w-6 h-6 line-height-6 mr-[-9.2rem] sm:mr-[-17.5rem] relative z-10 float-left`}
                  />
                </div>
                <input
                  type="text"
                  className={`p-2 w-[150px] outline-none sm:w-[300px] ${
                    theme === "dark" ? "bg-black text-white" : " bg-gray-600"
                  }  rounded-2xl`}
                  placeholder="Enter a Keyword"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  autoComplete="off"
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
                  navigate(`/search/${name}`);
                  setValue("");
                }}
              >
                <SearchIcon className="w-6 h-6" />
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
