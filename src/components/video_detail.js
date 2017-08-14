import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    if (video === undefined) {
      return (
        <div>No results for <strong>{document.getElementById("search").value}</strong>.</div>
      );
    }
    return (
      <div>Loading...</div>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <div className="video-detail col-md-8" id="hello">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}
          allowFullScreen="allowFullScreen"
        />
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail
