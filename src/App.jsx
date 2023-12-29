import User from "./components/pages/users/";
import Post from "./components/pages/posts/";
import Album from "./components/pages/albums/";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/post/:uId" element={<Post />} />
        <Route path="/album/:uId" element={<Album />} />
      </Routes>
    </div>
  );
}

export default App;
