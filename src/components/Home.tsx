import "../styles/components/home.scss";
import LandingVideo from "../assets/video/landing.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <div className="title">
          <p>Innovative Solutions</p>
          <p className="bold">Swift Execution</p>
        </div>
        <div className="sub-title">
          <p>
            Blending design and function to craft engaging experiences that
            simplify complexity and surpass expectations.
          </p>
        </div>
      </div>
      <div className="visual">
        <div className="video-wrapper">
          <video autoPlay={true} muted loop>
            <source src={LandingVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="scroll-indicator flex justify-content-center">
        <p>Scroll Down</p>
      </div>
    </div>
  );
};

export default Home;
