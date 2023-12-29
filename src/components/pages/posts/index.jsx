import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PostsRender from "../postsRender";
import { request } from "../../../hooks";

function Post() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [filterResult, setFilterResult] = useState();
  const [loading, setLoading] = useState(true);

  const { uId } = useParams();

  const data = request("https://jsonplaceholder.typicode.com/posts", "GET");

  useEffect(() => {
    const filteredPostsData = data.filter((post) => post.userId === +uId);
    setAllPosts(filteredPostsData);
    setFilteredPosts(filteredPostsData);
    setLoading(false);
  }, [data, uId]);

  function filterPosts() {
    if (filteredValue === "") {
      setFilteredPosts(allPosts);
      setLoading(false);
    } else {
      const filteredPostsData = allPosts.filter((post) =>
        post.title.includes(filteredValue)
      );
      if (filteredPostsData.length > 0) {
        setFilterResult(true);
      } else {
        setFilterResult(false);
      }

      setFilteredPosts(filteredPostsData);
    }
  }

  return (
    <div>
      <Link to={`/`}>
        <img className="flex w-8 p-1 m-3" src="/photo/x.png" alt="" />
      </Link>
      <h1 className="text text-center m-5 text-xl">Posts</h1>
      <div className="flex justify-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            filterPosts();
          }}
        >
          <div className="flex space-x-2">
            <input
              type="text"
              className="border-2 p-2 border-black rounded-lg"
              placeholder="Enter a KeyWord"
              value={filteredValue}
              onChange={(event) => setFilteredValue(event.target.value)}
            />
            <button
              type="submit"
              className="border-2  border-black rounded-lg px-4 py-2"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
      {loading === true ? (
        <div>
          <img
            className="absolute w-screen h-screen justify-center items-center"
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          />
        </div>
      ) : (
        <PostsRender
          filteredPosts={filteredPosts}
          filterResult={filterResult}
        />
      )}
    </div>
  );
}

export default Post;
