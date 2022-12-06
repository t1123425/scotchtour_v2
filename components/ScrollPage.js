import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";
import defaultdata from "../constants/defaultdata";
import Image from "next/image";

// Refactored initial Scroll animation using native whileInView prop and updated layout

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
  console.log(props);
  return (
    <Grid
      container
      item
      textAlign={"center"}
      justifyContent="center"
      height="100vh"
      alignContent="center"
      sx={{
        scrollSnapAlign: "center",
      }}
    >
      <Grid item xs={12} sm={5} overflow="visible">
        <Typography variant="h2" position={"sticky"} top="10%">
          {props.content.title}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <motion.div
          initial={scrollboxVar.hidden}
          whileInView={scrollboxVar.visible}
          viewport={{ once: true }}
        >
          <Box
            position="relative"
            width="100%"
            textAlign="center"
            display={props.content.imageUrl ? "block" : "none"}
          >
            <img src={props.content.imageUrl} objectFit="contain" />
          </Box>
          <Typography mt={4} display={props.content.caption ? "block" : "none"}>
            {props.content.caption}
          </Typography>
          <Box mt={4}>{props.content.description.map((bit) => bit)}</Box>
        </motion.div>
      </Grid>
    </Grid>
  );
}

export default function ScrollPage(props) {
  console.log(props.content);
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
        // sx={{ scrollSnapType: "y mandatory" }}
      >
        {props.content.map((group) => (
          <Grid item>
            <ScrollBox content={group} />
          </Grid>
        ))}
        {/* <Grid item>
          <ScrollBox content={props.content.overview} />
        </Grid>
        <Grid item>
          <ScrollBox content={props.content.comparison} />
        </Grid>
        <Grid item>
          <ScrollBox content={props.content.legal} />
        </Grid> */}
      </Grid>
    </>
  );
}
