import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { request } from "../../../hooks";

import AlbumsRender from "../albumsRender";

function Album() {
  const [allAlbums, setAllAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const [filteredValue, setFilteredValue] = useState("");
  const [filterResult, setFilterResult] = useState("");
  const [loading, setLoading] = useState(true);

  const { uId } = useParams();

  const data = request("https://jsonplaceholder.typicode.com/albums", "GET");

  useEffect(() => {
    const filteredAlbumsData = data.filter((album) => album.userId === +uId);
    setAllAlbums(filteredAlbumsData);
    setFilteredAlbums(filteredAlbumsData);
    setLoading(false);
  }, [data, uId]);

  function filterAlbums() {
    if (filteredValue === "") {
      setFilteredAlbums(allAlbums);
      setLoading(false);
    } else {
      const filteredAlbumsData = allAlbums.filter((album) =>
        album.title.includes(filteredValue)
      );
      if (filteredAlbumsData.length > 0) {
        setFilterResult(true);
      } else {
        setFilterResult(false);
      }

      setFilteredAlbums(filteredAlbumsData);
    }
  }

  return (
    <div>
      <Link to={`/`}>
        <img className="flex w-8 p-1 m-3" src="/photo/x.png" alt="" />
      </Link>
      <h1 className="text text-center m-5 text-xl">Albums</h1>
      <div className="flex justify-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            filterAlbums();
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
        <AlbumsRender
          filteredAlbums={filteredAlbums}
          filterResult={filterResult}
          loading={loading}
        />
      )}
    </div>
  );
}

export default Album;
