export default function PostsRender({ filteredPosts, filterResult }) {
  return (
    <div className="flex gap-5 pt-5  flex-wrap justify-center items-center">
      {filterResult === false ? (
        <div>
          <h1 className="text text-4xl">Not found posts for this filter</h1>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-5 p-5 w-80 text-center border-solid shadow-xl shadow-black border-2 border-black"
          >
            <p className="text text-2xl">{post.title}</p>
          </div>
        ))
      )}
    </div>
  );
}
