import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (input) => {
    setValue((prevValue) => prevValue + input);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  return (
    <div className="bg-gray-200 w-screen  h-screen flex justify-center items-center">
      <div className="w-204 h-auto bg-white rounded-2xl  border-4 border-gray-300 shadow-2xl shadow-black">
        <div className="w-auto m-3 h-28 text-right space-y-2 pt-10 pr-2">
          <div className="text-black font-bold text-3xl">{value}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] text-2xl flex justify-center items-center"
              onClick={handleClear}
            >
              C
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("(")}
            >
              (
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick(")")}
            >
              )
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("/")}
            >
              /
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("7")}
            >
              7
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("8")}
            >
              8
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("9")}
            >
              9
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("*")}
            >
              x
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("4")}
            >
              4
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("5")}
            >
              5
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("6")}
            >
              6
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("-")}
            >
              -
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("1")}
            >
              1
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("2")}
            >
              2
            </div>
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("3")}
            >
              3
            </div>
            <div
              className="bg-orange-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("+")}
            >
              +
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              className="bg-gray-400 border-2 border-black w-[50px] h-[50px] flex justify-center items-center text-2xl text-center "
              onClick={() => handleButtonClick("0")}
            >
              0
            </div>
            <div className="flex w-full ml-3 justify-between">
              <div
                className="bg-green-600 border-2 border-black w-[170px] text-4xl flex justify-center items-center text-center"
                onClick={handleCalculate}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
