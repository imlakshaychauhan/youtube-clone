import React from 'react'
import {Link} from "react-router-dom"

const VideoCard = ({video}) => {
    const {title, channelTitle, thumbnails} = video.snippet;
    const {viewCount} = video.statistics;
    
  return (
    <Link to={`/watch?v=${video.id}`}>
    <div className='w-72 p-2 m-2 rounded-lg hover:bg-gray-200'>
        <img className='rounded-lg' alt="" src={thumbnails.medium.url} />
        <p className='font-bold'>{title.substr(0, 60)}</p>
        <p>{channelTitle}</p>
        <p>{viewCount} views</p>
    </div>
    </Link>
  )
}

export default VideoCard