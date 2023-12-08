import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-screen items-center flex justify-between  sm:pl-[150px] pr-[100px] h-[100px] bg-gradient-to-r from-gray-600  to-gray-700">
      <div className="w-[120px]">
        <Link to={"/"}>
          <div className="flex items-end">
            <h2 className="text-3xl font-bold	text-white">Movie</h2>
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
          <div className="flex items-center">
            <MagnifyingGlassIcon className="flex w-6 h-6 line-height-6  mr-[-17.5rem] relative z-10 float-left" />
            <input
              type="text"
              className="border-2 border-yellow-500 p-2 w-[300px] bg-gray-600 rounded-2xl"
              placeholder="Enter a Keyword"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
