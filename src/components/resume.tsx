import '../styles/resume.scss';
import { Link } from 'react-router-dom';
import PageTranstition from './pageTranstition';
import { AnimatePresence, motion } from 'framer-motion';
import ResumePDF from "../assets/Ayush Rameja's Resume.pdf";

const Resume = () => {
  return (
    <AnimatePresence>
      <PageTranstition>
        <motion.div
          style={{
            width: '100%',
            height: '400vh',
            backgroundColor: '#000',
            overflow: 'hidden',
          }}
        >
          <div className="resume-header">
            <Link to={'/'}>Checkout My Portfolio</Link>
          </div>
          <object
            data={ResumePDF}
            type="application/pdf"
            style={{ width: '100%', height: '100%' }}
          >
            <p>
              PDF1 failed to load.
              <a download={ResumePDF} href={ResumePDF}>
                Download PDF1
              </a>
            </p>
          </object>
        </motion.div>
      </PageTranstition>
    </AnimatePresence>
  );
};

export default Resume;
