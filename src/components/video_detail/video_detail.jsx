import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  const {
    id,
    snippet: { channelTitle, description, publishedAt, tags, title },
  } = video;

  return (
    <section className={styles.detail}>
      <iframe
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
      <h3>{channelTitle}</h3>
      <pre className={styles.description}>{description}</pre>
      <p>{publishedAt}</p>
      {tags && tags.map((tag) => <span key={`${id}_tag`}>{`#${tag}`}</span>)}
    </section>
  );
};

export default VideoDetail;
