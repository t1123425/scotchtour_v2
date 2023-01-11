import React from "react";
import { Grid } from "@mui/material";
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
        {props.content.map((group, i) => (
          <Grid item key={`grid-${i}`}>
            <ScrollBox content={group} key={`scrollbox-${i}`} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
