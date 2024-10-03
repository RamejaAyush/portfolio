import "../styles/loading.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import loadingAnimation from "../assets/animation/loading.json";

const Loading = () => {
  const animation = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.div className="loading" initial={{ opacity: 1 }}>
      <motion.div
        className="lottie-wrapper"
        initial={{ width: 0, height: 0 }}
        animate={{ width: "20%", height: "20%" }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <motion.div
          initial={{ clipPath: "circle(100%)", opacity: 1 }}
          animate={{ clipPath: "circle(0%)", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Lottie
            onComplete={() => {
              animation.current?.setDirection(-1);
              animation.current?.play();
            }}
            lottieRef={animation}
            loop={true}
            className="loading-animation"
            animationData={loadingAnimation}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loading;
