export default function Footer() {
  return (
    <div className="w-screen pl-[100px] pr-[100px] flex  h-[100px] bg-yellow-300">
      <div className="flex w-full items-center justify-between ">
        <div className="flex justify-between w-[300px]">
          <img className="w-10" src="/media/photo/instagram_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Facebook_icon.png" alt="" />
          <img className="w-10" src="/media/photo/Tweeter_icon.png" alt="" />
        </div>
        <img src="/media/photo/logo.png" className="w-[120px]" alt="" />
      </div>
    </div>
  );
}