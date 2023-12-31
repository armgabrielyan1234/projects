import { useState } from "react";

function Level({ questions }) {
  const [level, setLevel] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="">
      {level !== 5 ? (
        <div className="flex justify-center ">
          <div className="w-[50%] bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 p-5  rounded-2xl">
            <div className="w-[95%] flex  border-2  border-black rounded-2xl  h-[20px] m-5">
              <div
                className={`${
                  level === 0
                    ? "w-[0%]"
                    : level === 1
                    ? "w-[20%]"
                    : level === 2
                    ? "w-[40%]"
                    : level === 3
                    ? "w-[60%]"
                    : level === 4
                    ? "w-[80%]"
                    : "w-[100%]"
                } bg-gradient-to-r rounded-2xl from-pink-500 via-red-500 to-yellow-500`}
              ></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <div className="flex justify-center flex-col items-center">
                <div className="w-[90%] h-[50px] font-semibold  justify-center flex text-4xl mb-5 border-[5px] border-yellow-300 rounded-3xl">
                  {level === 0 && questions.level1.questionText}
                  {level === 1 && questions.level2.questionText}
                  {level === 2 && questions.level3.questionText}
                  {level === 3 && questions.level4.questionText}
                  {level === 4 && questions.level5.questionText}
                </div>
                <div className="flex flex-col  w-[90%] space-y-5 items-center ">
                  <button
                    key={`wrong1-${level}`}
                    onClick={() => {
                      setLevel(level + 1);
                    }}
                    className="flex justify-center"
                  >
                    <div className="w-[90%]  p-2 justify-center flex items-center text-4xl  border-2 border-black bg-slate-400 rounded-3xl">
                      {level === 0 && questions.level1.Answers.wrong1}
                      {level === 1 && questions.level2.Answers.wrong1}
                      {level === 2 && questions.level3.Answers.wrong1}
                      {level === 3 && questions.level4.Answers.wrong1}
                      {level === 4 && questions.level5.Answers.wrong1}
                    </div>
                  </button>
                  <button
                    key={`wrong2-${level}`}
                    onClick={() => {
                      setLevel(level + 1);
                      setResult(result + 1);
                    }}
                    className="flex justify-center"
                  >
                    <div className="w-[90%] p-2 justify-center flex items-center text-4xl border-2 border-black bg-slate-400 rounded-3xl">
                      {level === 0 && questions.level1.Answers.wrong2}
                      {level === 1 && questions.level2.Answers.wrong2}
                      {level === 2 && questions.level3.Answers.wrong2}
                      {level === 3 && questions.level4.Answers.wrong2}
                      {level === 4 && questions.level5.Answers.wrong2}
                    </div>
                  </button>

                  <button
                    key={`true-${level}`}
                    onClick={() => {
                      setLevel(level + 1);
                    }}
                    className="flex justify-center"
                  >
                    <div className="w-[90%] p-2 justify-center flex items-center text-4xl border-2 border-black bg-slate-400 rounded-3xl">
                      {level === 0 && questions.level1.Answers.true}
                      {level === 1 && questions.level2.Answers.true}
                      {level === 2 && questions.level3.Answers.true}
                      {level === 3 && questions.level4.Answers.true}
                      {level === 4 && questions.level5.Answers.true}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[600px] h-screen flex flex-col justify-center items-center bg-white p-5  rounded-2xl">
            <img src={"/congratulations.png"} alt="" />
            <div className="text-3xl flex flex-col justify-center border-5 border-black items-center w-[80%] h-[50%]">
              <p className="text-5xl text-orange-500 font-bold">
                Congratulations! You choose the correct answer - {result}
              </p>
              <br />
              <p className="text-5xl text-red-500 font-bold">
                {result < 2
                  ? "Butter luck the next time my friend"
                  : result < 4
                  ? "Very good my friend"
                  : "The Perfect my friend"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Level;
