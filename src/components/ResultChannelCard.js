import React from "react";

const ResultChannelCard = ({ video }) => {
  // console.log(video);
  return (
    <div className="justify-between pl-20 h-fit p-2 ml-10 mr-[30rem] mt-5 rounded-lg flex cursor-pointer items-center">
      <img
        className="rounded-full w-[8rem] h-[8rem]"
        src={video?.snippet?.thumbnails?.default?.url}
        alt=""
      />
      <div className="flex flex-col ml-10">
      <p className="font-semibold text-[20px]">{video.snippet.channelTitle}</p>
      <p>2.10M subscribers</p>
      <p>{video.snippet.description.substr(0, 50).concat("...")}</p>
      </div>
      <div className="end-0">
      <button className="ml-8 bg-black text-white px-5 py-3 text-lg font-bold rounded-full hover:bg-gray-700"> Subscribe </button>
      </div>
    </div>
  );
};

export default ResultChannelCard;
