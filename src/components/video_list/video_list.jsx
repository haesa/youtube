import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} snippet={video.snippet} />
      ))}
    </ul>
  );
};

export default VideoList;
