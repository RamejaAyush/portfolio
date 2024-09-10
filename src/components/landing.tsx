import "../styles/landing.scss";

const Landing = () => {
  return (
    <div className="landing">
      <div className="title">
        <h1 className="fw-l">Innovation Solutions</h1>
        <h1 className="fw-sb">Swift Execution</h1>
      </div>
      <div className="sub-title">
        <div className="content">
          <p className="fw-l">
            Blending design and function to craft engaging experiences that
            simplify complexity and surpass expectations.
          </p>
        </div>
        <div className="cta">
          <a className="fw-med" href="#">
            Work
            <span>→</span>
          </a>
          <a className="fw-med" href="#">
            Contact
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
