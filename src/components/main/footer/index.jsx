import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-screen sm:pl-[100px] sm:pr-[100px] flex  h-[100px] bg-yellow-300">
      <div className="flex w-full items-center justify-between ">
        <div className="flex justify-between w-[300px]">
          <img className="w-10" src="/media/photo/instagram_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Facebook_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Tweeter_icon.png" alt="" />
        </div>
        <Link to={"/"}>
          <div className="flex items-end">
            <h2 className="text-3xl font-bold	text-white">Movie</h2>
            <h1 className="text-4xl font-bold text-black">X</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
