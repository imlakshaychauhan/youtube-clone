import React, { useEffect, useState } from 'react'
import {YOUTUBE_API_URL} from "../utils/constants";
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API_URL);
    const res = await response.json();
    console.log(res.items);
    setVideos(res.items);
  }

  if(videos.length === 0) return null;

  return (
    <div className='flex flex-wrap w-full items-center'>
    { videos.map((video) => <VideoCard key={video.id} video={video} />) }
    </div>
  )
}

export default VideoContainer