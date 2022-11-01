import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typography, Grid } from "@mui/material";
import styles from "./ScrollBox.module.css";
import defaultdata from "../constants/defaultdata";
import Image from "next/image";

const scrollboxVar = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
      ease: "easeIn",
    },
    // filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    scale: 0,
    // filter: "blur(5px)"
  },
};

function ScrollBox(props) {
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
      <Typography variant="h2" className={styles.scrollboxitem}>
        {props.defaultdata.header}
      </Typography>
      <Image
        className={styles.scrollboxitem}
        src={props.defaultdata.imageUrl}
        width={600}
        height={400}
      />
      <Typography className={styles.scrollboxitem}>
        {props.defaultdata.text}
      </Typography>
    </motion.div>
  );
}

export default function ScrollPage(props) {
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems={"center"}
        rowSpacing={4}
        justifyContent="center"
        textAlign={"center"}
      >
        <Grid item>
          <ScrollBox defaultdata={defaultdata} />
        </Grid>
        <Grid item>
          <ScrollBox defaultdata={defaultdata} />
        </Grid>
        <Grid item>
          <ScrollBox defaultdata={defaultdata} />
        </Grid>
        <Grid item>
          <ScrollBox defaultdata={defaultdata} />
        </Grid>
      </Grid>
    </>
  );
}
