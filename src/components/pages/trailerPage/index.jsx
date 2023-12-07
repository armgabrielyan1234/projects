import React from "react";

export default function TrailerPage() {
  return (
    <div>
      <div className="bg-gradient-to-r flex justify-center pt-9 w-screen h-screen from-gray-600 to-gray-700">
        <iframe
          title="Trailer"
          src="https://www.youtube.com/embed/fp9CdYRczPI"
          className="w-[80%] h-[80%]"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
