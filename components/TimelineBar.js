import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "../styles/TimelineBar.module.css";

export default function TimelineBar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={styles.timelinebar} style={{ scaleY }} />
    </>
  );
}
