import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={`${styles.videos} ${display && styles.select}`}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        snippet={video.snippet}
        onVideoClick={onVideoClick}
      />
    ))}
  </ul>
);

export default VideoList;
