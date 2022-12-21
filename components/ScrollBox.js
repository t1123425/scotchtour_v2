import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";
import { whatIsContent } from "../constants/siteContent";
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
    >
      <Grid item xs={12} sm={5} className={styles.titleBlock}>
        <Typography variant="h1" className={styles.title}>
          {/* What is Content replace with props.content */}
          {whatIsContent[1].title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7} className={styles.scrollWrapper}>
        <motion.div
          initial={scrollboxVar.hidden}
          whileInView={scrollboxVar.visible}
          viewport={{ once: true }}
        >
          {/* What is Content replace with props.content */}
          <img src={whatIsContent[1].imageUrl} className={styles.image} />
          <Typography
            className={
              whatIsContent[1].caption ? styles.captionShow : styles.captionHide
            }
          >
            {/* What is Content replace with props.content */}
            {whatIsContent[1].caption}
          </Typography>
          <Box className={styles.paragraphBlock}>
            {/* What is Content replace with props.content */}
            {whatIsContent[1].description.map((bit) => (
              <p>{bit}</p>
            ))}
          </Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}
