import React from "react";
import xImage from "../../../media/photo/x.png";
import { Link } from "react-router-dom";

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  async componentDidMount() {
    try {
      const albums = await fetch("https://jsonplaceholder.typicode.com/albums");
      if (albums.ok) {
        const response = await albums.json();
        this.setState({
          albums: response,
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

    const filteredAlbums = this.state.albums.filter((album) => {
      return album.userId === +userId;
    });

    return (
      <div>
        <Link to={"/"}>
          <img className="flex w-8 p-1 m-3" src={xImage} alt="" />
        </Link>
        <h1 className="text text-center m-5 text-xl">Albums</h1>
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {filteredAlbums.map((album) => (
            <div
              key={album.id}
              className="flex flex-col gap-5 p-5 w-80 text-center border-solid border-2 border-black"
            >
              <p className="text text-lg text-2xl">{album.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
