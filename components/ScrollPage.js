import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography, Grid } from "@mui/material";
import styles from "./ScrollBox.module.css";

const scrollboxVar = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function ScrollBox() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={scrollboxVar}
      className={styles.scrollbox}
    >
      <Typography>TEST!</Typography>
    </motion.div>
  );
}

export default function ScrollPage(props) {
  return (
    <>
      <Grid item>
        <Typography variant="h2">Scroll Down!</Typography>
        <ScrollBox />
        <ScrollBox />
        <ScrollBox />
        <ScrollBox />
      </Grid>
    </>
  );
}
