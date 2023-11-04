import React from "react";
import xImage from "../../../media/photo/x.png";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (posts.ok) {
        const response = await posts.json();
        this.setState({
          posts: response,
        });
      } else {
        alert("Failed fetch");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const userId = window.location.href.split("?")[1]?.split("=")[1];

    const filteredPosts = this.state.posts.filter((post) => {
      return post.userId === +userId;
    });

    return (
      <div>
        <Link to={"/"}>
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
              <br />
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
