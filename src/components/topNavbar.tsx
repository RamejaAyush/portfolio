import "../styles/topNavbar.scss";

const TopNavbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ayush Rameja</h1>
      </div>
      <div className="menu">
        <div className="hamburger">
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
