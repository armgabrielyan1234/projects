import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main";
import FilmPage from "./components/filmPage";
import TrailerPage from "./components/trailerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/film/:uId" element={<FilmPage />} />
        <Route path="/trailer:uId" element={<TrailerPage />} />
      </Routes>
    </div>
  );
}

export default App;
