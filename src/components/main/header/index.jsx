import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="w-screen items-center flex justify-between pl-[150px] pr-[100px] h-[100px] bg-gradient-to-r from-gray-600  to-gray-700">
      <div className="w-[120px]">
        <Link to={"/"}>
          <img
            src="/media/photo/logo.png"
            className="w-full object-cover"
            alt=""
          />
        </Link>
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            navigate(`/search/${value}`);
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
