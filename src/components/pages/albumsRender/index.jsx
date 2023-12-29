export default function albumsRender({ filteredAlbums, filterResult }) {
  return (
    <div className="flex gap-5 pt-5  flex-wrap justify-center items-center">
      {filterResult === false ? (
        <div>
          <h1 className="text text-4xl">Not found albums for this filter</h1>
        </div>
      ) : (
        filteredAlbums.map((album) => (
          <div
            key={album.id}
            className="flex flex-col gap-5 p-5 w-80 text-center border-solid shadow-xl shadow-black border-2 border-black"
          >
            <p className="text text-2xl">{album.title}</p>
          </div>
        ))
      )}
    </div>
  );
}
