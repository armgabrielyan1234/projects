import React, { useState, useEffect } from "react";
import xImage from "../../../media/photo/x.png";
import { Link, useParams } from "react-router-dom";

function Post() {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const a = useParams();
  const userId = a.uId;

  useEffect(() => {
    getPosts();
  }, [userId]);

  async function getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.ok) {
        const posts = await response.json();
        const filteredPostsData = posts.filter(
          (post) => post.userId === +userId
        );
        setFilteredPosts(filteredPostsData);
      } else {
        alert("Failed fetch");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Link to={`/`}>
        <img className="flex w-8 p-1 m-3" src={xImage} alt="" />
      </Link>
      <h1 className="text text-center m-5 text-xl">Posts</h1>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-5 p-5 w-80 text-center border-solid border-2 border-black"
          >
            <p className="text text-lg text-2xl">{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
