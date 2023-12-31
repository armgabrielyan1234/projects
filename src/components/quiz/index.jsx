import Level from "../levels";

function Quiz() {
  const questions = {
    level1: {
      questionText: "WHAT IS A STATE",
      Answers: {
        wrong1:
          "State is a React Hook that lets you reference a value that's not needed for rendering",
        wrong2:
          "The State Hook provides function components access to the state value for a state object.",
        true: "State of a component is an object that holds some information that may change over the lifetime of the component",
      },
    },
    level2: {
      questionText: "WHAT IS A CONTEXT",
      Answers: {
        wrong1:
          "The Context are a type of object where the value of attributes of a tag is stored.",
        true: "Context, in React, is a way to pass data down through a component tree without having to pass props down through every level.",
        wrong2: "The Context is a predictable state container",
      },
    },
    level3: {
      questionText: "WHAT IS A USE-EFFECT",
      Answers: {
        wrong1:
          "useEffect  built-in hook in React that lets you memoize a callback function by preventing it from being recreated on every render",
        true: "using this Hook, you tell React that your component needs to do something after render",
        wrong2:
          "useEffect allowed React to skip re-rendering of components when the props are unchanged.",
      },
    },
    level4: {
      questionText: "WHAT IS A AXIOS",
      Answers: {
        true: "Axios is a popular JavaScript library for making HTTP requests from a web browser or a Node. js server.",
        wrong1:
          "Axios is a useful ReactJS feature that allows developers to store and retrieve data locally within a user's web browser.",
        wrong2:
          "The Axios is a built-in React object that is used to contain data or information about the component. ",
      },
    },
    level5: {
      questionText: "WHAT IS A REACT-JS",
      Answers: {
        wrong1:
          "React is a software platform based on the V8 engine that transforms JavaScript from a highly specialized language into a general-purpose language",
        wrong2:
          "React.js is an open JavaScript framework built on top of Node,js for creating web applications, created by Vercel ",
        true: "React is an open source JavaScript library for developing user interfaces.",
      },
    },
  };

  return (
    <div className="w-screen p-2 bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 flex justify-center items-center">
      <Level questions={questions} />
    </div>
  );
}
export default Quiz;
