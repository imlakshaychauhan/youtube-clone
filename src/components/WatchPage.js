import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_ID_API_URL } from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);

  console.log();
  useEffect(() => {
    dispatch(closeMenu());
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(
      YOUTUBE_ID_API_URL + "&id=" + searchParams.get("v")
    );
    const res = await response.json();
    // console.log(res);
    setVideoDetails(res);
  };

  return (
    <div>
      <div className="mt-8 ml-20">
        <iframe
          className="rounded-lg"
          width="1150"
          height="650"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {videoDetails.length === 0 ? null : (
          <>
            <p className="my-5 font-bold text-2xl">
              {videoDetails.items[0].snippet.title}
            </p>
            <p className="font-bold text-xl">
              {videoDetails.items[0].snippet.channelTitle}
            </p>
            <p className="mt-5">
              {videoDetails.items[0].statistics.viewCount} views
            </p>
            <p>{videoDetails.items[0].statistics.likeCount} likes</p>
          </>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
