import "../styles/videoVisualizer.scss";
import DownArrows from "../assets/images/down-arrows.svg";
import landingVideo from "../assets/videos/hero-video.mp4";

const VideoVisualizer = () => {
  return (
    <div className="visual-graphic">
      <div className="video-wrapper">
        <video autoPlay={true} muted loop>
          <source src={landingVideo} type="video/mp4" />
        </video>
      </div>
      <div className="scroll-down">
        <img src={DownArrows} alt="👇" />
      </div>
    </div>
  );
};

export default VideoVisualizer;
