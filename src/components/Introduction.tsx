import "../styles/components/introduction.scss";
import StaggeredText from "../utils/StaggerText";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="left">
        <div className="hello-world">
          <p className="light">Hello, I'm</p>
          <p className="bold">Ayush Rameja</p>
        </div>
        <div className="intro">
          <p>
            the creative maestro of web development hailing from India. Armed
            with a flair for the unique and a passion for perfection, I weave
            web wonders that are as smart as they are stylish. Ready to
            experience the art of the internet?
          </p>
        </div>
        <div className="cta">
          <a href="#">
            <StaggeredText text="Learn More" />
          </a>
        </div>
      </div>
      <div className="right">
        <div className="backdrop"></div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};

export default Introduction;
