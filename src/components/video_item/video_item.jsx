import React from 'react';

const VideoItem = ({ key, imgSrc, title, channelTitle }) => {
  return (
    <li key={key}>
      <img src={imgSrc} alt="thumbnail" />
      <p>{title}</p>
      <span>{channelTitle}</span>
    </li>
  );
};

export default VideoItem;
// id, src, title, channelTitle
