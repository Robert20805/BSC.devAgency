import React from "react";
import { motion } from "framer-motion";
import styles from "../style";
import { Devs, Projects } from "./index";

const WatchAbility = () => {
  return (
    <section id="watch-ability" className="py-12">
      <motion.div
        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
          Watch Out <span className="text-gradient">Our Ability</span>
        </h1>
        <p className={`${styles.paragraph} max-w-3xl mx-auto`}>
          Explore our top talent and recent work that showcase our capability to deliver.
        </p>
      </motion.div>

      {/* Our Lead Developers */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Devs />
        </div>
      </div>

      {/* Our Top Projects */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default WatchAbility; 