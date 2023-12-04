import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [value, setValue] = useState("");
  return (
    <div className="w-screen items-center flex justify-between pl-[150px] pr-[100px] h-[100px] bg-gradient-to-r from-gray-600  to-gray-700">
      <div className="w-[120px]">
        <img src="/media/photo/logo.png" className="w-full" alt="" />
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(value);
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
