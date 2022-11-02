import React, { useEffect, useRef } from "react";
import { Typography, Grid, Box } from "@mui/material";
import defaultdata from "../constants/defaultdata";
import Image from "next/image";

function ScrollBox(props) {
  return (
    <Grid
      container
      item
      textAlign={"center"}
      justifyContent="center"
      height="100vh"
      alignContent="center"
    >
      <Grid item xs={12} sm={5} overflow="visible">
        <Typography variant="h2" position={"sticky"} top="10%">
          {props.defaultdata.header}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box
          position="relative"
          width="100%"
          height={{
            xs: "60vw",
            sm: "30vw",
          }}
          textAlign="center"
          // overflow="hidden"
        >
          <Image
            src={props.defaultdata.imageUrl}
            // width={600}
            // height={400}
            fill
            objectFit="contain"
          />
        </Box>
        <Typography mt={4}>{props.defaultdata.text}</Typography>
      </Grid>
    </Grid>
  );
}

export default function ScrollPage2(props) {
  return (
    <>
      <Grid container>
        <ScrollBox defaultdata={defaultdata} />
        <ScrollBox defaultdata={defaultdata} />
        <ScrollBox defaultdata={defaultdata} />
        <ScrollBox defaultdata={defaultdata} />
        <ScrollBox defaultdata={defaultdata} />
      </Grid>

      {/* <Grid container item>
        <ScrollBox defaultdata={defaultdata} />
      </Grid>
      <Grid container item>
        <ScrollBox defaultdata={defaultdata} />
      </Grid>
      <Grid container item>
        <ScrollBox defaultdata={defaultdata} />
      </Grid> */}
    </>
  );
}
