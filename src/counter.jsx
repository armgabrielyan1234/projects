import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center screen h-screen bg-slate-600 ">
      <div className="flex w-[40%] flex-col justify-around h-[80%] bg-black">
        <div className="text-white text-8xl flex justify-center w-full ">
          {count}
        </div>
        <div className="flex items-end justify-center">
          <div className="flex space-x-10">
            <button
              className="text-red-900 text-8xl p-2  border-[5px] text-center border-yellow-300"
              onClick={() => {
                count > 0 ? setCount(count - 1) : setCount(count);
              }}
            >
              -
            </button>
            <button
              className="text-red-900 text-8xl p-2  border-[5px] text-center border-yellow-300"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
            <button
              className="text-red-900 text-4xl p-2  border-[5px] text-center border-yellow-300"
              onClick={() => {
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const parsedValue = parseFloat(value);
              if (!isNaN(parsedValue)) {
                setCount(count + parsedValue);
              } else {
                alert("please write a number");
              }
            }}
          >
            <input
              type="text"
              className={`p-2 w-[150px] outline-none sm:w-[300px] text-2xl  rounded-2xl`}
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
          </form>

          <div className="pl-2">
            <form
              onClick={(event) => {
                event.preventDefault();
                setValue("");
              }}
            >
              <div className="border-2 w-10 h-19  text-center rounded-2xl  border-yellow-300">
                <button className="text-red-900  text-4xl">x</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
