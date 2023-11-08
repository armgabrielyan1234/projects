import React, { useState, useEffect } from "react";
import xImage from "../../../media/photo/x.png";
import { Link, useParams } from "react-router-dom";

function Album() {
  const [filteredAlbum, setFilteredAlbum] = useState([]);

  const a = useParams();
  const userId = a.uId;

  useEffect(() => {
    getAlbum();
  }, [userId]);

  async function getAlbum() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      if (response.ok) {
        const data = await response.json();
        setFilteredAlbum(data.filter((album) => album.userId === +userId));
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
      <h1 className="text text-center m-5 text-xl">Albums</h1>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {filteredAlbum.map((album) => (
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

export default Album;
