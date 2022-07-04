import React, { useState, useEffect } from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import popularList from './popular.json';
import searchList from './search.json';

function App() {
  const [videos, setVideos] = useState([]);

  const handleOnSubmit = (event, value) => {
    event.preventDefault();
    console.log(value);
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${value}&key=${API_KEY}`,
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log('error:', error));
    setVideos(searchList.items);
  };

  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    // };
    // fetch(
    //   'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${API_KEY}',
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setVideos(result.items))
    //   .catch((error) => console.log('error:', error));
    setVideos(popularList.items);
  }, []);

  return (
    <div className="main">
      <Header onSubmit={handleOnSubmit} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
