import { useRef, useEffect } from 'react';
import { motion, useCycle } from 'framer-motion';
import loadingAnimation from '../assets/loading.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

import '../styles/loading.scss';

const Loading = () => {
  const animation = useRef<LottieRefCurrentProps>(null);
  const [doAnimation, cycleAnimation] = useCycle('idle', 'loading');

  useEffect(() => {
    const interval = setInterval(() => cycleAnimation(), 100);
    return () => clearInterval(interval);
  }, [cycleAnimation]);

  return (
    <motion.div
      variants={{
        idle: { opacity: 1, y: -50 },
        loading: { opacity: 0, y: -50 },
      }}
      transition={{ duration: 2 }}
      animate={doAnimation}
    >
      <div className="loading">
        <Lottie
          onComplete={() => {
            animation.current?.setDirection(-1);
            animation.current?.play();
          }}
          lottieRef={animation}
          loop={false}
          className="loading-animation"
          animationData={loadingAnimation}
        />
      </div>
    </motion.div>
  );
};

export default Loading;
