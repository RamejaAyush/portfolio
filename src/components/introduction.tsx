import "../styles/introduction.scss";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="content">
        <div className="hello-world">
          <h1>HELLO</h1>
          <h1>WORLD</h1>
        </div>
        <div className="intro">
          <p>
            Hello! <span className="bold">I'm Ayush Rameja</span>, the creative
            maestro of web development hailing from India. Armed with a flair
            for the unique and a passion for perfection, I weave web wonders
            that are as smart as they are stylish. Ready to experience the art
            of the internet?
          </p>
        </div>
        <div className="cta">
          <a className="fw-med" href="#">
            Learn more
          </a>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default Introduction;
