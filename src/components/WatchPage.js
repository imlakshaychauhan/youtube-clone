import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_ID_API_URL } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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
    <div className="w-full">
      <div className="flex w-full">
      <div className="mt-8 ml-10">
        <iframe
          className="rounded-lg w-[75rem] h-[38rem]"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {videoDetails.length === 0 ? null : (
          <>
            <p className="my-5 font-semibold text-[20px]"> {videoDetails?.items[0]?.snippet?.title} </p>

            <div className="flex align-middle justify-between">
              <div className="flex">
              <img className="w-12 h-12 cursor-pointer" alt="Channel Logo" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
              <div className="cursor-pointer">
                <p className="font-bold text-xl ml-4"> {videoDetails?.items[0]?.snippet?.channelTitle} </p>
                <p className="text-md ml-4">9.8K subscribers</p>
              </div>
              <button className="ml-8 bg-black text-white px-5 py-3 text-lg font-bold rounded-full hover:bg-gray-700"> Subscribe </button>
              </div>
              <div className="flex">
              <button className="bg-gray-100 ml-10 p-3 rounded-l-full font-semibold text-lg flex border-r border-r-gray-300  hover:bg-gray-200 items-center">
                <img className="w-7 h-7 mr-1 text-black" alt="" src="thumbs-up.png" />
                {videoDetails?.items[0]?.statistics?.likeCount}
              </button>
              <button className="bg-gray-100 p-3 rounded-r-full font-semibold text-lg flex hover:bg-gray-200 items-center">
                <img className="w-6 h-6 mr-1 text-black" alt="" src="thumbs-down.png" />
              </button>
              <button className="bg-gray-100 p-3 rounded-full font-semibold text-lg flex ml-4 hover:bg-gray-200 items-center">
                <img className="w-6 h-6 mr-1 text-black" alt="" src="forward.png" />Share
              </button>
              <button className="bg-gray-100 p-3 rounded-full font-semibold text-lg flex ml-4 hover:bg-gray-200 items-center">
                <img className="w-5 h-5 mr-1 text-black" alt="" src="download.png" />Download
              </button>
              <button className="bg-gray-100 p-3 rounded-full font-semibold text-lg flex text-center ml-4 hover:bg-gray-200 items-center">
                <img className="w-6 h-6 text-black" alt="" src="more.png" />
              </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-8 ml-3 w-full">
        <LiveChat />
      </div>
      </div>
      <div className="mt-10 ml-10 w-[75rem] h-[38rem] max-w-w-[75rem]">
        <h1 className="text-3xl font-bold">Comments:</h1>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
