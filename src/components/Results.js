import React, { useState, useEffect } from "react";
import ResultVideoCard from "./ResultVideoCard";
import ResultChannelCard from "./ResultChannelCard";
import { YOUTUBE_RESULTS_API_URL } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getData();
  }, [searchParams]);
  const getData = async () => {
    try {
      const response = await fetch(
        YOUTUBE_RESULTS_API_URL + searchParams.get("search_query")
      );
      const data = await response.json();
      // console.log(data.items);
      setVideos(data.items);
    } catch (err) {
      alert.log(err);
    }
  };

  return (
    <div className="flex flex-col ml-20">
      {videos.map((video) => {
        return (video?.id?.kind === "youtube#video") ? (
          <ResultVideoCard key={video.id.videoId} video={video} />
        ) : (
          <ResultChannelCard key={video.id.videoId} video={video} />
        );
      })}
    </div>
  );
};

export default Results;
