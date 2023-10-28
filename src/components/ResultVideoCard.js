import React from "react";
import { Link } from "react-router-dom";

const ResultVideoCard = ({ video }) => {
  return (
    <Link to={"/watch?v=" + video.id.videoId}>
      <div className="h-fit p-2 ml-10 mt-5 rounded-lg flex cursor-pointer">
        <div>
          <img
            className="rounded-xl w-[30rem] h-[15rem]"
            src={video?.snippet?.thumbnails?.medium?.url}
            alt=""
          />
        </div>
        <div className="ml-5 w-[80rem]">
          <p className="font-semibold text-[20px] w-[50rem]">
            {video?.snippet?.title}
          </p>
          <div className="mt-3 flex items-center">
            <img
              className="w-7 h-7"
              alt="Logo"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            />
            <p className=" ml-2 font-semibold w-[20rem]">
              {video?.snippet?.channelTitle}
            </p>
          </div>
          <p className="mt-2">
            {video?.snippet?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultVideoCard;
