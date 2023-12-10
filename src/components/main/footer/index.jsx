import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-screen pl-[10%] pr-[10%] flex h-[100px] bg-yellow-300">
      <div className="flex w-full items-center flex-col sm:flex-row p-5 justify-center sm:justify-between ">
        <div className="flex space-x-5 gap-5  sm:space-x-20">
          <img className="w-10" src="/media/photo/instagram_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Facebook_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Tweeter_icon.png" alt="" />
        </div>
        <div className="w-[120px]">
          <Link to={"/"}>
            <div className="flex items-end">
              <h2 className="text-3xl font-bold text-white">Movie</h2>
              <h1 className="text-4xl font-bold text-black">X</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
