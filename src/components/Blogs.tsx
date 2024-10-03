import "../styles/blogs.scss";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blogs">
      <nav className="blogs__nav">
        <div className="blogs__nav__logo">
          <h1>AXU</h1>
          <span className="blogs__nav__logo__badge">blogs</span>
        </div>
        <div className="blogs__nav__links">
          <Link to={"/"}>Portfolio</Link>
        </div>
      </nav>
      <div className="blogs__content">
        <div className="blogs__content__empty-state">
          <h1>No blogs found!</h1>
          <p>Working on them.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
