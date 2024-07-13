import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="bg-gray-400 bg-opacity-50 text-black p-3 px-8 rounded-lg text-lg flex ">
          <img src="assets/icons/play.png" width={26} />
          Play
        </button>
        <button className="bg-gray-400 bg-opacity-50 text-black p-3 px-8 rounded-lg text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
