//import react-router components
import { Route, Routes } from "react-router-dom";

//import components
import Main from "./components/main";
import FilmPage from "./components/pages/filmPage";
import TrailerPage from "./components/pages/trailerPage";
import Layout from "./layout";
import SearchFilms from "./components/pages/searchPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/film/:uId" element={<FilmPage />} />
          <Route path="/trailer/:uId/:trailerId" element={<TrailerPage />} />
          <Route path="/search/:value" element={<SearchFilms />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
