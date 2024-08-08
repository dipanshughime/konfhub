import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YouTubePreview = ({ videoId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const opts = {
    height: '400',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="youtube-preview">
      {!isPlaying ? (
        <div
          className="video-thumbnail cursor-pointer relative"
          onClick={handlePlay}
        >
          <img
            src={thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="w-full h-auto"
          />
          <div className="play-button absolute inset-0 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-white bg-black bg-opacity-50 rounded-full p-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-4.276-2.482A1 1 0 009 9.555v4.89a1 1 0 001.476.868l4.276-2.482a1 1 0 000-1.736z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <YouTube videoId={videoId} opts={opts} />
      )}
    </div>
  );
};

export default YouTubePreview;
