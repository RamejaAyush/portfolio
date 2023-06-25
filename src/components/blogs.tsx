import { Link } from 'react-router-dom';
import PageTranstition from './pageTranstition';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import '../styles/blogs.scss';

const Blogs = () => {
  useEffect(() => {
    document.title = 'Blogs: Ayush Rameja';
  }, []);

  return (
    <AnimatePresence>
      <PageTranstition>
        <motion.div className="blogs">
          <nav>
            <div className="left-logo">
              <h1>
                Ayush Rameja <span>• blogs</span>
              </h1>
            </div>
            <div className="nav-links">
              <Link to={'/'}>Home</Link>
            </div>
          </nav>
          <div className="blog-content">
            <div className="header">
              <h1>Blogs</h1>
            </div>
            <div className="all-blogs">
              <div className="blog">
                <h2>Working on Blogs 😎</h2>
              </div>
              <div className="blog border dull">
                <h2>No Blogs Found</h2>
              </div>
            </div>
          </div>
        </motion.div>
      </PageTranstition>
    </AnimatePresence>
  );
};

export default Blogs;
