import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header';
import VideoList from './components/video_list/video_list';
import popularList from './popular.json';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => setVideos(popularList.items), []);
  console.log(videos);

  return (
    <div className="main">
      <Header />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
