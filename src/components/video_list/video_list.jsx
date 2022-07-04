import React from 'react';
import '../../videos.css';
import VideoItem from '../video_item/video_item';
// import searchList from '../../search.json';

const VideoList = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          imgSrc={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
        />
      ))}
    </ul>
  );
};

export default VideoList;
