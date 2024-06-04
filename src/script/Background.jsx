import "../stylesheets/background.scss";

function VideoBackground({ source }) {
  return (
    <div className="background-video-container">
      <video src={source} autoPlay loop muted className="video" />
    </div>
  );
}

export default VideoBackground;
