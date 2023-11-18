import React from 'react';
import './Video.css';
import videobg from '../Components/video.mp4';

const Video = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={videobg} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
