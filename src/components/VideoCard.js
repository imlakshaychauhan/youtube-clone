import React from "react";
import { Link } from "react-router-dom";
import {formatNumberToYoutubeViews} from "../utils/helper"

const VideoCard = ({ video }) => {
  const { title, channelTitle, thumbnails } = video.snippet;
  const { viewCount } = video.statistics;

  return (
    <Link to={`/watch?v=${video.id}`}>
      <div className="w-72 m-2 rounded-lg hover:bg-gray-100">
        <img className="rounded-lg" alt="" src={thumbnails.medium.url} />
        <div className="p-2">
          <div className="flex">
            <img
              className="w-7 h-7"
              alt="Logo"
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            />
            <p className="font-bold ml-2">{title.substr(0, 40).concat("...")}</p>
          </div>
          <p className="ml-8 text-gray-600 text-md">{channelTitle}</p>
          <p className="ml-8 text-gray-600 text-md">{formatNumberToYoutubeViews(viewCount)} views</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
