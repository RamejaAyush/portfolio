import "../styles/blogs.scss";

const Blog = () => {
  return (
    <div className="blogs">
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
