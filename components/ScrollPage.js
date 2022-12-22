import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ScrollBox from "./ScrollBox";

export default function ScrollPage(props) {
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems={"center"}
        justifyContent="center"
        textAlign={"center"}
        // sx={{ scrollSnapType: "y mandatory" }}
      >
        {props.content.map((group) => (
          <Grid item>
            <ScrollBox content={group} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
