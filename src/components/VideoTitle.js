import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-white hover:bg-opacity-50 text-black p-3 px-6 rounded-lg text-lg flex gap-2">
          <img src="assets/icons/play.png" width={26} />
          Play
        </button>
        <button className="bg-gray-400 bg-opacity-50  text-black p-3 px-4 rounded-lg text-lg flex gap-2">
          <img src="assets/icons/information.png" width={26} />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
