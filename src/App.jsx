import React from "react";
import User from "./components/pages/users/User.jsx";
import Post from "./components/pages/posts/Post.jsx";
import Album from "./components/pages/albums/Album.jsx";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/post" element={<Post />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </div>
    );
  }
}

export default App;
