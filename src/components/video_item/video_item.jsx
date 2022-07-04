import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ key, snippet }) => {
  const {
    title,
    channelTitle,
    thumbnails: {
      medium: { url: imgSrc },
    },
  } = snippet;

  return (
    <li className={styles.video} key={key}>
      <img className={styles.thumbnail} src={imgSrc} alt="thumbnail" />
      <div className={styles.metadata}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
