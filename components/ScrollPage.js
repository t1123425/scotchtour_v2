import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";

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
  return (
    <Grid
      container
      item
      textAlign={"center"}
      justifyContent="center"
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
          <img src={props.content.imageUrl} />
          <Typography display={props.content.caption ? "block" : "none"}>
            {props.content.caption}
          </Typography>
          <Box p={4}>{props.content.description.map((bit) => bit)}</Box>
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
          <Grid item height="100vh">
            <ScrollBox content={group} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
