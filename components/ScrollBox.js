import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";
import styles from "../styles/ScrollBox.module.css";

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

export default function ScrollBox(props) {
  return (
    <Grid
      item
      container
      sx={{
        scrollSnapAlign: "center",
      }}
      className={styles.blockWrapper}
    >
      <Grid item xs={12} sm={5} className={styles.titleBlock}>
        <Typography variant="h1" className={styles.title}>
          {props.content.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7} className={styles.scrollWrapper}>
        <motion.div
          initial={scrollboxVar.hidden}
          whileInView={scrollboxVar.visible}
          viewport={{ once: true }}
        >
          <img
            src={props.content.imageUrl}
            className={
              props.content.imageUrl ? styles.imageShow : styles.imageHide
            }
          />
          <Typography
            className={
              props.content.caption ? styles.captionShow : styles.captionHide
            }
          >
            {props.content.caption}
          </Typography>
          <Box className={styles.paragraphBlock}>
            {props.content.description.map((bit) => (
              <div>{bit}</div>
            ))}
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}
