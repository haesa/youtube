import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, snippet, onVideoClick }) => {
  const {
    title,
    channelTitle,
    thumbnails: {
      medium: { url: imgSrc },
    },
  } = snippet;

  return (
    <li className={styles.video} onClick={() => onVideoClick(video)}>
      <img className={styles.thumbnail} src={imgSrc} alt="thumbnail" />
      <div className={styles.metadata}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
      </div>
    </li>
  );
});

export default VideoItem;
