import styles from "../style";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.6 }}
      animate={{ scale: 2.2, opacity: 1.0 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <h1 className="text-center text-white text-2xl md:text-3xl font-semibold px-4">
        Welcome! Let’s build a great relationship
      </h1>
    </motion.div>
  );
};

export default Loading;
